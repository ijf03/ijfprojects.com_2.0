import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { test } from 'node:test';
import { createElement as h } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { createServer } from 'vite';

const requested = ['moving-house-247', 'ticket-to-ride', 'book-app', 'aussie-ecoguard',
  'smartpark', 'flappy-birb', 'elden-thing-2', 'cloudKitchenPro'];

test('portfolio registry, routes, optional media and links remain usable', async () => {
  const server = await createServer({ server: { middlewareMode: true, hmr: false, ws: false }, appType: 'custom' });
  try {
    const { projects, getProjectBySlug } = await server.ssrLoadModule('/src/data/projects/index.ts');
    assert.equal(getProjectBySlug('ecoguard'), getProjectBySlug('aussie-ecoguard'));
    assert.equal(getProjectBySlug('recipehub2'), getProjectBySlug('cloudKitchenPro'));
    assert.ok(!projects.some(p => p.slug === 'recipehub2'));
    const kitchen = getProjectBySlug('cloudKitchenPro');
    assert.ok(kitchen.sections.some(s => s.id.startsWith('recipe-hub-')));
    assert.ok(kitchen.sections.some(s => s.id.startsWith('cloudkitchen-')));
    const { projectDateTimestamp } = await server.ssrLoadModule('/src/data/projectDates.ts');
    assert.ok(projects.every((p, i) => i === 0 || projectDateTimestamp(projects[i - 1]) >= projectDateTimestamp(p)));
    const { default: Detail } = await server.ssrLoadModule('/src/pages/ProjectDetailPage.tsx');
    const { default: Card } = await server.ssrLoadModule('/src/components/projects/ProjectCard.tsx');
    const { default: Gallery } = await server.ssrLoadModule('/src/components/projects/ProjectMediaGallery.tsx');
    const { getTechnologyCategoryConflicts } = await server.ssrLoadModule('/src/data/projectTechnicalSkills.ts');
    assert.equal(new Set(projects.map(p => p.slug)).size, projects.length);
    assert.deepEqual(getTechnologyCategoryConflicts(projects), []);
    for (const slug of requested) {
      assert.equal(projects.filter(p => p.slug === slug).length, 1, slug);
    }
    // Existing entries render through the same route as the new entries.
    for (const project of projects) {
      const html = renderToStaticMarkup(h(MemoryRouter, { initialEntries: [`/projects/${project.slug}`] },
        h(Routes, null, h(Route, { path: '/projects/:slug', element: h(Detail) }))));
      assert.equal((html.match(/<h1\b/g) ?? []).length, 1, project.slug);
      assert.ok(html.includes(project.title), project.slug);
      assert.doesNotMatch(html, /href="(?:|#)"|src=""/);
      if (project.slug === 'flappy-birb') {
        assert.match(html, /<iframe[^>]+src="https:\/\/www\.youtube-nocookie\.com\/embed\/1JtWV2EcgBk"/);
        assert.match(html, /title="Flappy Birb gameplay demonstration"/);
        assert.match(html, /allowFullScreen=""/i);
        assert.doesNotMatch(html, /href="https:\/\/(?:youtu\.be|www\.youtube\.com)/);
        assert.doesNotMatch(html, /<video[^>]+src="https:\/\/(?:youtu\.be|www\.youtube)/);
        assert.doesNotMatch(JSON.stringify(project), /assignment|teaching code/i);
      }
      if (!requested.includes(project.slug)) continue;
      assert.ok(project.sections.length >= 4, project.slug);
      assert.equal(new Set(project.sections.map(s => s.id)).size, project.sections.length);
      assert.equal(project.links.filter(l => l.type === 'github').length, project.slug === 'cloudKitchenPro' ? 2 : 1, project.slug);
      assert.doesNotMatch(JSON.stringify(project), /[\w.+-]+@[\w.-]+\.[a-z]{2,}|\u2014/i);
      const media = [project.coverImage, ...(project.heroGallery?.items ?? []).map(i => i.src),
        ...project.sections.flatMap(s => s.blocks.flatMap(b => b.type === 'gallery' ? b.gallery.items.map(i => i.src) : []))].filter(Boolean);
      for (const src of media) {
        assert.ok(existsSync(resolve('public', src.slice(1))), `${project.slug}: ${src}`);
      }
      for (const link of project.links) assert.equal(new URL(link.href).protocol, 'https:');
      if (!project.heroGallery) assert.ok(!html.includes('Project image gallery'), project.slug);
    }
    const withoutMedia = { ...projects[0], coverImage: undefined, heroGallery: undefined, links: [] };
    const card = renderToStaticMarkup(h(MemoryRouter, null, h(Card, { project: withoutMedia })));
    assert.ok(card.includes('aspect-[16/10]'));
    assert.ok(card.includes(withoutMedia.title));
    assert.ok(!card.includes('<img'));
    assert.equal(renderToStaticMarkup(h(Gallery, { gallery: { layout: 'single', items: [] } })), '');
  } finally {
    await server.close();
  }
});

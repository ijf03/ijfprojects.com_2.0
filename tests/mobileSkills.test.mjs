import assert from 'node:assert/strict';
import { test } from 'node:test';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { MemoryRouter } from 'react-router-dom';
import { createServer } from 'vite';

test('homepage skills are visible before any scroll observers fire, including their ancestors', async () => {
  const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
  try {
    const { default: HomePage } = await server.ssrLoadModule('/src/pages/HomePage.tsx');
    const html = renderToStaticMarkup(createElement(MemoryRouter, null, createElement(HomePage)));
    const skillsLink = html.indexOf('href="/projects?search=React"');
    assert.ok(skillsLink > 0, 'React skill link should render');
    const ancestors = [];
    const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'param', 'source', 'track', 'wbr']);
    for (const match of html.slice(0, skillsLink).matchAll(/<(\/?)([a-z][a-z0-9]*)\b[^>]*>/gi)) {
      const [, closing, tag] = match;
      if (closing) ancestors.pop();
      else if (!voidTags.has(tag) && !match[0].endsWith('/>')) ancestors.push(match[0]);
    }
    for (const ancestor of ancestors) {
      assert.doesNotMatch(ancestor, /opacity:\s*0(?:[;"\s])|visibility:\s*hidden|display:\s*none/, ancestor);
    }
  } finally {
    await server.close();
  }
});

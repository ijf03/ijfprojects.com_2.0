# Exact pixel crops. Boundaries sit in whitespace between complete page sections.
Add-Type -AssemblyName System.Drawing
$assetRoot = Join-Path $PSScriptRoot '../public/images/projects/sfg'
$cropRoot = Join-Path $assetRoot 'sections'
New-Item -ItemType Directory -Force $cropRoot | Out-Null
$crops = @(
  @('old/homepage.png', 'old-home-hero', 0, 1200),
  @('old/homepage.png', 'old-home-services', 2230, 3370),
  @('old/homepage.png', 'old-home-process', 3370, 5140),
  @('old/homepage.png', 'old-home-enquiry', 6560, 8770),
  @('old/homepage.png', 'old-home-faq-blog', 8770, 10640),
  @('new/home page.png', 'new-home-hero', 0, 2120),
  @('new/home page.png', 'new-home-introduction', 2120, 3800),
  @('new/home page.png', 'new-home-services', 3800, 6074),
  @('new/home page.png', 'new-home-process', 6074, 7890),
  @('new/home page.png', 'new-home-booking', 7890, 9180),
  @('old/Contact-Our-Experts-Secure-Finance-Group.png', 'old-contact-introduction', 0, 1900),
  @('old/Contact-Our-Experts-Secure-Finance-Group.png', 'old-contact-form', 1900, 4200),
  @('new/contactus.png', 'new-contact-introduction', 0, 1790),
  @('new/contactus.png', 'new-contact-form', 1790, 4010),
  @('new/contactus.png', 'new-contact-booking', 4010, 5130),
  @('old/First-Home-Buyer-Guide-SECURE-FINANCE-GROUP.png', 'old-loan-introduction', 0, 2240),
  @('old/First-Home-Buyer-Guide-SECURE-FINANCE-GROUP.png', 'old-loan-process', 2240, 5050),
  @('old/First-Home-Buyer-Guide-SECURE-FINANCE-GROUP.png', 'old-loan-calculators', 7350, 9060),
  @('new/Invesstment Loans page.png', 'new-investment-introduction', 0, 1800),
  @('new/Invesstment Loans page.png', 'new-investment-guidance', 1800, 3500),
  @('new/Invesstment Loans page.png', 'new-investment-process', 3500, 4730),
  @('new/Invesstment Loans page.png', 'new-investment-faq', 4730, 6080),
  @('old/Meet-Our-Finance-Specialist-Secure-Finance-Group.png', 'old-broker-profile', 0, 3400),
  @('new/admin dashboard.png', 'new-admin-overview', 0, 1840),
  @('new/admin dashboard.png', 'new-admin-workspace', 1840, 2320)
)
foreach ($crop in $crops) {
  $source = [System.Drawing.Bitmap]::new((Join-Path $assetRoot $crop[0]))
  try {
    $rectangle = [System.Drawing.Rectangle]::new(0, $crop[2], $source.Width, ($crop[3] - $crop[2]))
    $result = $source.Clone($rectangle, $source.PixelFormat)
    try { $result.Save((Join-Path $cropRoot ($crop[1] + '.png')), [System.Drawing.Imaging.ImageFormat]::Png) }
    finally { $result.Dispose() }
  } finally { $source.Dispose() }
}
Write-Output "Created $($crops.Count) section crops; original screenshots retained."

# Page dependency trees
## /
Entry: src/app/page.js
- src/app/components/Header.js
  - public/yapn-logo.svg
- src/app/components/Footer.js
  - public/yapn-logo.svg
- src/app/components/SignupForm.js
  - public/yapn-logo.svg
Global: src/app/layout.js -> src/app/globals.css, next/font/google, @vercel/analytics/next. Native inline SVG icons and native HTML controls. No other local homepage imports.
## /intake-survey
Entry: src/app/intake-survey/page.js
- Inline step components declared in this same file
- public/yapn-logo.svg
Global RootLayout/globals.css. API fetch to /api/intake-survey.

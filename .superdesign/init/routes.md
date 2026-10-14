# Routes
- `/`: src/app/page.js, RootLayout + Header/Footer. Restaurant sales page with stats, problems, nine capability cards, long SignupForm.
- `/intake-survey`: src/app/intake-survey/page.js, RootLayout. Long onboarding questionnaire.
- POST `/api/intake-survey`: src/app/api/intake-survey/route.js. Writes Google Sheets; not a marketing contact endpoint.
- Login is an ordinary anchor to https://dashboard.yapn.ai and has no website auth logic.

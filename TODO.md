# Backend Implementation Plan for Dream Team Legacy Contact Form

## [x] 1. Install Dependencies (npm - Bun unavailable)
`npm i express nodemailer cors`
`npm i -D @types/cors @types/express @types/nodemailer concurrently`

## [ ] 2. Create server.js
Express server on port 3001 with `/api/contact` POST endpoint:
- Logs form data (name, phone, email, message)
- Nodemailer template-ready (user adds Gmail later)

## [ ] 3. Update index.html
Replace form `onsubmit="alert()"` with `fetch('http://localhost:3001/api/contact')`

## [ ] 4. Update package.json
Add `"server": "node server.js"`, update `"dev": "concurrently \"npm run server\" \"vite dev\""`

## [ ] 5. Bonus: React Integration
Update `src/routes/contact.tsx` form to POST to API

## [ ] 6. Test
- Terminal 1: `npm run server`
- Terminal 2: `open index.html` or `npm run dev`
- Submit form → check server console

## Next: Production
- Gmail SMTP creds
- Deploy (Render/Vercel/Netlify Functions)

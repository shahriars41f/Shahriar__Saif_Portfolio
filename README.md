# Shahriar Saif — Academic Tech Portfolio

React + Tailwind CSS academic-tech portfolio with an emerald / charcoal visual direction.

## Added in this update

- Working contact form using FormSubmit AJAX
- Active navbar indicator while scrolling
- Research & Project Timeline
- Existing responsive layout, dark mode, animations, projects, research, certifications, and contact sections are preserved
- AI Portfolio Assistant was NOT added

## Run locally

```bash
npm install
npm run dev
```

If PowerShell blocks `npm`, use:

```powershell
npm.cmd install
npm.cmd run dev
```

## Contact form activation

The contact form sends submissions to the email stored in `PROFILE.email` in `src/App.jsx`.

On the first real submission, FormSubmit sends an activation/confirmation email to that address. Open the email and confirm it once. After activation, new portfolio messages can be delivered to that inbox.

Current destination email:

`shahriarsaif030@gmail.com`

If you change the portfolio email later, update `PROFILE.email`; the new address will need activation as well.

## Profile photo

The current project uses:

`public/profile.jpeg`

and `src/App.jsx` references it as:

`/profile.jpeg`

## University logo

The SEU logo is loaded from:

`public/logo.png`

## Main files to edit

- `src/App.jsx` — content, links, timeline data, projects, contact information
- `src/index.css` — styling
- `public/` — images and assets

## Build

```bash
npm run build
```

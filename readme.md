# FYN Frontend

This is the frontend for FYN; a web app built to help users do push ups the fyn way
---

## What’s Been Built

### Login Page
- Custom-styled with Tailwind-inspired utility classes
- Username and password input fields
- “Remember Me” option and "Forgot Password?" link
- Link to the signup page

### Signup Page
- Same layout and style as login
- Placeholder for user account creation

### Home Page
- Large animated “Welcome to FYN” title using shimmer (frameshift) animation
- Starry, animated background with layered visual depth
- Buttons for “Try the Camera” and “Dashboard”

### Camera Page
- 3/4 screen space dedicated to camera preview
- Right-side placeholder area for live AI feedback (DEPENDS)

### Dashboard Page
- Placeholder for displaying:
  - History of terms used
  - Terms learned
  - “What to Learn Next” (to be powered by ML suggestions later)

...

## UI and Styling Notes

- Tailwind CSS was used at the very beginning of the project setup
- Eventually moved to **manually written CSS files** for each page to have more control and flexibility
- Tailwind-style utility classes were recreated across all pages
- Each page has its own `.css` file to keep styles organized and modular
- Advanced CSS animations used for shimmer effects, starfields, and typewriter text

---

## Tech Stack

- React
- React Router
- Custom CSS (inspired by Tailwind utility classes)
- No Tailwind runtime dependency

---

## How to Run

1. Install dependencies:
   ```bash
   npm install


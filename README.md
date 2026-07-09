# Cursor Workshop

This is the hands-on project for the [**Cursor**](https://cursor.com) workshop. During the session, open it in Cursor and we'll work through small changes together, step by step.

You do **not** need to be a programmer to participate.

## What is Cursor?

[**Cursor**](https://cursor.com) is an editor with built-in AI.

In the workshop, you will use it to open this project, describe changes in simple language, and update the website little by little.

## Before you start

You need:

1. **This project on your computer**  
   We'll cover how to get it at the start of the workshop.

2. **Node.js installed**  
   Download it here if you do not already have it: [Node.js (LTS)](https://nodejs.org/)

If you are unsure whether everything is ready, ask a helper.

## Run the project

Open a terminal in the main folder of this project, then run:

```bash
npm install
```

After that, run:

```bash
npm run dev
```

Then open:

[http://localhost:3000](http://localhost:3000)

When you save changes, the page will usually update automatically.

## The command you will usually use

After the first setup, most of the time you will only need:

```bash
npm run dev
```

## Project notes

This project uses a few modern web tools:

* [**Next.js**](https://nextjs.org) for the website
* [**React**](https://react.dev) for the interface
* [**TypeScript**](https://www.typescriptlang.org) for the code structure
* [**Tailwind CSS**](https://tailwindcss.com) for styling

If those names are new to you, that's fine—you're not here to memorize them first. You'll learn what matters as you go.

## Main files

* `app/page.tsx` → main page
* `app/globals.css` → shared styles

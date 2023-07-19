# Personal Next.js Beginner Notes

## Project's Description

- This is Next.js (13.4.10) application
- The UI framework or library is: shadcn/ui (https://ui.shadcn.com/docs/installation/next)
-

## Initial Setup

### ❌ Problem: ESLint shows error messages at next.config.js and tailwing.config.js

### ✅ Fix: Add the following in the .eslintrc.json file:

```javascript
{
  "extends": ["next/babel", "next/core-web-vitals"]
}
```

## Global CSS file, Mods

### ❌ Problem: Unknown yet...

### ✅ Fix: Add the following after the Tailwing directives

```css
 {
  hmtl,
  body,
  :root {
    height: 100%;
  }
}

# Personal Next.js Beginner Notes

## Project's Description

- This is a **Next.js** (13.4.10) application
- The UI/CSS framework or library is: **shadcn/ui** (https://ui.shadcn.com/docs/installation/next)
- The **Clerk** Service is used toe ease the user authentication

## Initial Setup

### ❌ Problem:

ESLint shows error messages at next.config.js and tailwing.config.js

### ✅ Fix:

Add the following in the .eslintrc.json file:

```javascript
{
  "extends": ["next/babel", "next/core-web-vitals"]
}
```

## Global CSS file, Mods

### ❌ Problem:

Unknown yet...

### ✅ Fix:

Add the following after the Tailwing directives

```css
 {
  hmtl,
  body,
  :root {
    height: 100%;
  }
}
```

## Hydration Errors

### ❌ Problem:

Hydration errors in Next.js (or any React application) occur when the server-rendered HTML does not match the client-rendered output.

### ✅ Fix (A Workaround):

See: @components/myComps/HOC/withClientSideRendering

### 📝 Notes:

This methods escapes the hydration error by making both server & client initial renders return null. But it is NOT consider a best practise!

## Must have VS Code snippets

### For Creating dynamic Tailwind CSS classes:

1. Press <kbd>Ctrl</kbd>+<kbd>Shift</kbd>+<kbd>P</kbd>
2. Type Preferences: Configure User Snippets and select it.
3. Click on the + New Global Snippet file and give it a name, e.g., "MySnippets".
4. In the opened .json file, paste the following snippet:

```json
  "Tailwind cn Function": {
    "prefix": "twcn",
    "body": ["className={cn(\"$1\", $2)}"],
    "description": "Generates cn function for merging tailwindcss classes"
  }
```

5. Save the file.
6. Recommend use:

```
<div (type here twcn...)>
```

## Youtube Comment Issues (❌)

### 1. Input-Ring-styles (1:37:45 - 1:38:25):

1. Fix: Got to components/ui/input.tsx -> and remove the "focus-visible:ring-2" utility class

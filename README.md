# Project Setup Documentation

## Initial Setup
1. **Package Manager Configuration**
   ```json
   "packageManager": "npm@11.2.0",
   "overrides": {
     "react": "$react",
     "react-dom": "$react-dom"
   }
   ```

2. **ShadCN UI Installation**
   ```bash
   npx shadcn@latest
   ```

## Sanity CMS Setup
1. **Create Sanity Project**
   ```bash
   npm create sanity@latest -- --project flfshs5n --dataset production --template clean --typescript --output-path studio-jsm-yc_directory
   cd studio-jsm-yc_directory
   ```

2. **Next.js Integration**
   ```bash
   npm i next-sanity@canary
   ```

3. **Important Note**
   - Remove `--turbo` from `package.json` for local development at `http://localhost:3000/studio`

4. **Environment Variables**
   ```
   NEXT_PUBLIC_SANITY_PROJECT_ID=flfshs5n
   NEXT_PUBLIC_SANITY_DATASET=production
   ```

## Markdown Support
```bash
npm install sanity-plugin-markdown
npm i markdown-it
npm install --save-dev @types/markdown-it
```

## Type Generation System
1. **Extract Schema**
   ```bash
   npx sanity@latest schema extract --path=./sanity/extract.json
   ```

2. **Typegen Configuration (`sanity-typegen.json`)**
   ```json
   {
     "path": "'../../my-cool-app/src/**/*.{ts,tsx,js,jsx}'",
     "schema": "../../my-cool-app/sanity-schemas.json",
     "generates": "../../my-cool-app/sanity.types.ts"
   }
   ```

3. **Generate Types**
   ```bash
   npx sanity@latest typegen generate
   ```

## Scripts Configuration (`package.json`)
```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "predev": "npm run typegen",
  "prebuild": "npm run typegen",
  "typegen": "sanity schema extract --path=./sanity/extract.json && sanity typegen generate"
}
```

## Additional Dependencies
1. **Server-Side Only**
   ```bash
   npm i server-only
   ```

2. **UI Components**
   ```bash
   npx shadcn@latest add skeleton
   npx shadcn@latest add input textarea
   npx shadcn@latest add sonner
   ```

3. **React Fix**
   ```bash
   npm install react-is
   ```

4. **Markdown Editor**
   ```bash
   npm i @uiw/react-md-editor
   ```

5. **Slug Generation**
   ```bash
   npm i slugify
   ```

## Sentry Integration
```bash
npx @sentry/wizard@latest -i nextjs --saas --org vnr-3l --project app-name
```

## Key Technologies
- **GRPQ Query Language**: Used for Sanity data querying
- **Type Generation**: Automated type safety for Sanity schemas
- **Markdown Support**: Both in CMS and frontend rendering

## Development Workflow
1. Run type generation before development/build:
   ```bash
   npm run typegen
   ```
2. Start development server:
   ```bash
   npm run dev
   ```

---

This documentation organizes all your setup commands and configurations in a logical flow, making it easier to understand and maintain the project setup.

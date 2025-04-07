  "packageManager": "npm@11.2.0",
  "overrides": {
    "react": "$react",
    "react-dom": "$react-dom"
  },

npx shadcn@latest

sanity
npm create sanity@latest -- --project flfshs5n --dataset production --template clean --typescript --output-path studio-jsm-yc_directory
cd studio-jsm-yc_directory

npm i next-sanity@canary

remove --turbo from package.json for run http://localhost:3000/studio

# On the project overview page, look for the Project ID under the "Settings" section
NEXT_PUBLIC_SANITY_PROJECT_ID=flfshs5n
# In the Sanity dashboard, navigate to the Datasets section for your project.
NEXT_PUBLIC_SANITY_DATASET=production

npm install sanity-plugin-markdown

GRPQ query language

npx sanity@latest schema extract --path=./sanity/extract.json


sanity-typegen.json
// Use the config options in sanity-typegen.json to change output directory
{
  "path": "'../../my-cool-app/src/**/*.{ts,tsx,js,jsx}'", // glob pattern to your typescript files
  "schema": "../../my-cool-app/sanity-schemas.json", // path to your schema file, generated with 'sanity schema extract' command
  "generates": "../../my-cool-app/sanity.types.ts" // path to the output file for generated type definitions
}

npx sanity@latest typegen generate

  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "predev": "npm run typegen",
    "prebuild": "npm run typegen",
    "typegen": "sanity schema extract --path=./sanity/extract.json && sanity typegen generate"
  },

npm run dev

npm i server-only

npm i markdown-it
npm install --save-dev @types/markdown-it

add skeleton
npx shadcn@latest add skeleton

add shadcn components
npx shadcn@latest add input textarea
npx shadcn@latest add sonner

fix react-is not found error
npm install react-is

to add markdown editor to add pitch
npm i @uiw/react-md-editor

slug generator lib
npm i slugify
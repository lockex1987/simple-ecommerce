## Shopping Cart

### Introduction

#### Features

- Admin
  - Authentication
  - Change password
  - Category
  - Product
  - Order
  - Dashboard
- Shopping
  - Home
  - Product
  - Cart
  - Checkout
  - No login

#### Tech stack

Node.js, VSCode, Ubuntu

Vue 3, Vue Router, Pinia, Vite, TypeScript, ESLint



#### 



Nuxt, Express (Shopping)

AdonisJS (Admin backend)

SSR (Shopping), SPA (Admin)

Bootstrap 5.2 (include bootstrap-extended)

Highcharts, MariaDB, Redis



Nginx



#### Plan, steps

GitHub branch each step



Step 1: Get started

Create new project, setup linter, formatter

Step 2: SPA

Dummy pages







SPA: 

Fake API data

Home

Product

Cart

Checkout



Step 2: SSR with Nuxt

Step 3: Setup database with data of fake API

Step 4:

Admin backend

Admin frontend (SPA)

Features:

Authentication

Change password

Category

Product

Order

Dashboard

Deploy PM2, Nginx



### Get started

#### Prerequisites

Node.js

Ubuntu (Linux)

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin). ESLint extension too.

JS, CSS, HTML knowledge

Git, GitHub



#### Create new project

$ npm create vite@latest

$ npm create vite@latest shopping --template vue

$ npm init vue@latest



```
$ cd shopping-cart/

$ npm create vite@latest
npx: installed 6 in 2.449s
✔ Project name: … shopping
✔ Select a framework: › vue
✔ Select a variant: › vue-ts

Scaffolding project in ~/shopping-cart/shopping...

Done. Now run:

  cd shopping
  npm install
  npm run dev

$ npm create vite@latest shopping --template vue
npx: installed 6 in 1.982s

Scaffolding project in ~/shopping-cart/shopping...

Done. Now run:

  cd shopping
  npm install
  npm run dev



$ npm init vue@latest
npx: installed 1 in 0.891s

Vue.js - The Progressive JavaScript Framework

✔ Project name: … shopping
✔ Add TypeScript? … No / Yes
✔ Add JSX Support? … No / Yes
✔ Add Vue Router for Single Page Application development? … No / Yes
✔ Add Pinia for state management? … No / Yes
✔ Add Vitest for Unit Testing? … No / Yes
✔ Add Cypress for both Unit and End-to-End testing? … No / Yes
✔ Add ESLint for code quality? … No / Yes
✔ Add Prettier for code formatting? … No / Yes

Scaffolding project in ~/shopping-cart/shopping...

Done. Now run:

  cd shopping
  npm install
  npm run dev
```



package.json:

```json
{
  "name": "shopping",
  "version": "0.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vue-tsc --noEmit && vite build",
    "preview": "vite preview --port 5050",
    "typecheck": "vue-tsc --noEmit",
    "lint": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore"
  },
  "dependencies": {
    "pinia": "^2.0.13",
    "vue": "^3.2.33",
    "vue-router": "^4.0.14"
  },
  "devDependencies": {
    "@rushstack/eslint-patch": "^1.1.0",
    "@types/node": "^16.11.27",
    "@vitejs/plugin-vue": "^2.3.1",
    "@vue/eslint-config-typescript": "^10.0.0",
    "@vue/tsconfig": "^0.1.3",
    "eslint": "^8.5.0",
    "eslint-plugin-vue": "^8.2.0",
    "typescript": "~4.6.3",
    "vite": "^2.9.5",
    "vue-tsc": "^0.34.7"
  }
}
```



We have: Vue, Vue Router, Pinia, Vite, TypeScript support, ESLint.

Project Setup

npm install

Compile and Hot-Reload for Development

npm run dev

Type-Check, Compile and Minify for Production

npm run build

Lint with ESLint

npm run lint

```
npm run dev
```





http://localhost:3000/







#### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.



#### ESLint

Semi

Colon

Format, Lint on Save Vue, JS, JSON, TS, HTML

.vscode/settings.json

```
{
  "editor.formatOnSave": true,
  "[json]": {
    "editor.formatOnSave": true
  },
  "[javascript]": {
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[typescript]": {
    "editor.formatOnSave": false,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "[css]": {
    "editor.formatOnSave": true
  },
  "[html]": {
    "editor.formatOnSave": false
  },
  "[vue]": {
    "editor.defaultFormatter": "Vue.volar",
    "editor.formatOnSave": true,
    "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
    }
  },
  "files.insertFinalNewline": true,
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "editor.insertSpaces": true,
  "files.trimTrailingWhitespace": true
}
```

Add some custom rules to .eslintrc.cjs

```
rules: {
  'semi': ['error', 'never'],
  'indent': ['error', 2],
  'space-before-function-paren': [
    'error',
    {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    },
  ],
  'operator-linebreak': ['error', 'before'],
  'comma-dangle': ['error', 'always-multiline'],
  'quotes': ['error', 'single'],
  'quote-props': ['error', 'consistent-as-needed'],
},
```

#### GitHub

Create new GitHub repository

```
$ git clone git@github.com:lockex1987/simple-ecommerce.git
Cloning into 'simple-ecommerce'...
warning: You appear to have cloned an empty repository.

$ cd simple-ecommerce/

# Add README.md file

$ git add .
huyennv9@VTCC-huyennv9:~/projects/simple-ecommerce$ git commit -m "First commit"
[master (root-commit) 83ca4a1] First commit
 1 file changed, 364 insertions(+)
 create mode 100644 README.md

~/projects/simple-ecommerce$ git push
Enumerating objects: 3, done.
Counting objects: 100% (3/3), done.
Delta compression using up to 12 threads
Compressing objects: 100% (2/2), done.
Writing objects: 100% (3/3), 2.62 KiB | 2.62 MiB/s, done.
Total 3 (delta 0), reused 0 (delta 0)
To github.com:lockex1987/simple-ecommerce.git
 * [new branch]      master -> master

~/projects/simple-ecommerce$ git status
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
~/projects/simple-ecommerce$ git branch
* master


```



Create new branch

git branch step_1_get_started

git checkout step_1_get_started

Thêm file

git push -u origin step_1_get_started

Lệnh trên thực hiện một lần, những lần sau chỉ cần git push bình thường



git checkout master

git merge step_1_get_started



### SPA

Vue Router

Delete old file

This feature is already available in the previous step.

We will create 4 dummy pages: Home, Product, Cart, Checkout




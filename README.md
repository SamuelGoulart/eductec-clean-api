# Eductec Clean Api


```bash
 npm init -y
 ```
## Dependências & Arquivos de configurações
 
 ### git commit msg linter
 #### Biblioteca para garantir que serão feito commits de forma correta

 ```bash
 npm i -D git-commit-msg-linter
 ```
 
 #### Link do <a href="https://www.conventionalcommits.org/en/v1.0.0/" > Conventional Commits</a>

## TypeScript
 ```bash
npm i -D typescript @types/node
 ```
 
 #### Criar o arquivo tsconfig.json, para configuração do TypeScript
  ```bash
{
    "compilerOptions": {
        "outDir": "./dist",
        "module": "commonjs",
        "target": "es2021",
        "esModuleInterop": true,
        "allowJs": true
    }
}
 ```
 
 
 ## Eslint standard
 #### Padronização de projeto
 
```bash
npm install --save-dev \
  typescript@\* \
  eslint@^7.12.1 \
  eslint-plugin-promise@^5.0.0 \
  eslint-plugin-import@^2.22.1 \
  eslint-plugin-node@^11.1.0 \
  @typescript-eslint/eslint-plugin@^4.0.1 \
  eslint-config-standard-with-typescript@latest
 ```
 
 #### Observação instalar o plugins do <a href="https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint" > ESLint </a>
 
 #### Criar o arquivo .eslintrc.json
 
 ```bash
{
  "extends": "standard-with-typescript",
  "parserOptions": {
    "project": "./tsconfig.json"
  },
  "rules": {
    "@typescript-eslint/strict-boolean-expressions": "off",
    "@typescript-eslint/consistent-type-definitions": "off",
    "@typescript-eslint/comma-spacing": "off",
    "@typescript-eslint/return-await": "off",
    "@typescript-eslint/restrict-template-expressions": "off",
    "@typescript-eslint/no-misused-promises": "off",
    "@typescript-eslint/no-namespace": "off",
    "import/export": "off"
  }
}
 ```
 
 #### Criar o arquivo .eslintignore
 ```bash
node_modules
dist
babel
 ```
 
 ## Husky 
 #### Permite colocar no projetos hook, sendo assim roda comando antes de commitar o projeto
  ```bash
npm i -D husky &&  npm i -D lint-staged
 ```

Criar o arquivo .huskyrc.json
```bash
{
    "hooks": {
        "pre-commit":  "line-staged"
    }
}
 ```
 
 Criar o arquivo .lintstagedrc.json
 
```bash
{
  "*.ts": [
    "eslint . --fix",
    "npm run test:staged"
  ]
}
 ```
 
 

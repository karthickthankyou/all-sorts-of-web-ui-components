const chalk = require('chalk');
const fs = require('fs');
let { component, story, testScript, barrel } = require('./component_templates.ts');

// grab component componentName from terminal argument
const [componentName] = process.argv.slice(2);
if (!componentName) {
  console.log(chalk.red(`
  Error! You must include a component name.
  `));
  process.exit(0)
}

// grab component type from terminal argument
const [componentType] = process.argv.slice(3);

const path = componentType ? `${componentType}/${componentName}` : componentName

const dir = `./src/components/${path}`;

// throw an error if the file already exists
if (fs.existsSync(dir)) {
  console.log(chalk.red(`
    Component ${dir} already exists.
  `))
  process.exit(0)
}

// create the folder
fs.mkdirSync(dir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}/${componentName}.tsx`, component(componentName), writeFileErrorHandler);
// storybook.jsx
fs.writeFile(`${dir}/${componentName}.stories.tsx`, story(componentName, componentType), writeFileErrorHandler);
// test.tsx
fs.writeFile(`${dir}/${componentName}.test.tsx`, testScript(componentName), writeFileErrorHandler);
// index.tsx
fs.writeFile(`${dir}/index.ts`, barrel(componentName), writeFileErrorHandler);


console.log(chalk.green(`
  Success! The component ${componentName} is created.
  `))
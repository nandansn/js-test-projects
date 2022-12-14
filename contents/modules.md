## Modules

- Provide structure
- Split code into smaller files
- Share code across app
- Same as react
- Use server extension locally
- Used in projects

### Named Export

- need to mention the export keyword before the variable, declaration/definition
- import {using same name as export} from 'module name with extension .js'
- when you are using the javascript in the html, where the script uses the import then use the attribute type='module'

#### Named Export

- export const name = 'nanda', use export keyword before the variable for named export
- cannot use import statement outside the module error: to resolve this you need to set specific type attribute as 'module' in the script tag.
- when you are importing you need to say the extension
- multipe imports, import {a,b} from './data.js'
- this will work in the file server, means the pages and static html files need to be in the server like tomcat
- without server it willl not work
- export module name and import name should match
- to export multiple things you use like export {a,b,c}
- we may endup in the module name conflicts when importing multiple modules, to avoid this, use with the alias like export {name as aliasName}

#### Default Export

- export default variableName/functionName
- with the default, names used to import can be anything

### default export
- 'export default' this is used to export the var/function,
- when you use default export, while importing you can use any name in the import.

#### References:

- [Ref] (https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export)
- [Ref] (https://www.tutorialspoint.com/es6/es6_modules.htm)
- [Ref] (https://hacks.mozilla.org/2015/08/es6-in-depth-modules/)




#### Note
- when you work locally, use the live server, otherwise you get the CORS policy error.first
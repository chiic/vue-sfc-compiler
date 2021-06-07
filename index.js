const fs = require('fs');

const { createDefaultCompiler, assemble } = require('@vue/component-compiler');

const testData = fs.readFileSync('./test.vue', {
    encoding: 'utf-8'
});

const instance = createDefaultCompiler();

const ans = instance.compileToDescriptor('test', testData);


const code = assemble(instance, 'test', ans);

fs.writeFile('./components.js', code.code, (err) => {});
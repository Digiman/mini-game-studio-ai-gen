const fs = require('fs');
const path = require('path');

const docsDir = path.join(__dirname, '..', 'games', 'docs');
const files = fs.readdirSync(docsDir).filter(f => f.endsWith('.md'));

let result = '// Auto-generated embedded docs\nconst DOCS = {\n';

for (const f of files) {
  const key = f.replace('.md', '');
  const content = fs.readFileSync(path.join(docsDir, f), 'utf8');
  // Escape backticks, backslashes, and ${} for template literals
  const escaped = content
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
  result += `  '${key}': \`${escaped}\`,\n`;
}

result += '};\n';
console.log(result);
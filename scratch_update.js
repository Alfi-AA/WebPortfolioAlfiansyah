const fs = require('fs');

let c = fs.readFileSync('script.js', 'utf8');
c = c.replace(/assets\/gramedia\//g, 'assets/projects/gramedia/dummy/');
c = c.replace(/assets\/oasis\//g, 'assets/projects/oasis/dummy/');
c = c.replace(/assets\/aha-commerce\//g, 'assets/projects/aha-commerce/dummy/');
c = c.replace(/assets\/freelance\//g, 'assets/projects/freelance/dummy/');
c = c.replace(/assets\/ui-ux\//g, 'assets/projects/ui-ux/dummy/');
c = c.replace('bentoItem.className = `bento-item ${aspectClass}`;', 'bentoItem.className = `bento-item gallery-item ${aspectClass}`;');
c = c.replace('class="bento-item__img"', 'class="bento-item__img gallery-img"');

fs.writeFileSync('script.js', c, 'utf8');
console.log('script.js updated successfully');


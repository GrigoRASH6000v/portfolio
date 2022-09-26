// const fs = require('fs');
// let js = fs.readFileSync('./dist/js/app.js', (err, data) => (data))
// let css = fs.readFileSync('./dist/css/app.css', (err, data) => (data))


// fs.writeFileSync('../../public/js/app.js', js);
// fs.writeFileSync('../../public/css/app.css', css);

const fse = require('fs-extra');
const path = require('path')




const srcDir = path.join(__dirname, 'client');
const destDir = path.join(__dirname, '..', 'client')

                                 
try {
fse.moveSync(srcDir, destDir, { overwrite: true|false })
  console.log('success!')
} catch (err) {
  console.error(err)
}

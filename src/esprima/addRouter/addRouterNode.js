const path = require('path')
const fs = require('fs')
let log = console.log.bind(console), fileList, array = [],
  targetDir = path.join(__dirname, '..', '..', 'page', 'main'),
  targetFile = path.join(__dirname, 'routerObjList.js')
fs.readdir(targetDir, (err, files) => {
  if (err) return
  for (let i = 0; i < files.length; i++) {
    files[i] = files[i].substring(0, /\.vue$/.exec(files[i]).index)
  }
  fileList = files
  for (let i = 0; i < fileList.length; i++) {
    array.push(generateObj(fileList[i]))
  }
  log(array)
  fs.writeFile(targetFile, `[${array}]`, (err) => {
    if (err) throw err
  })
})
function generateObj (name) {
  return `{ path: '/${name}', name: '${name}', component: layzLoading('${name}')}`
}

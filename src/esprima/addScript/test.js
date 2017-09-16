let esprima = require('esprima')
let estraverse = require('estraverse')
let escodegen = require("escodegen")
let fs = require('fs')
let path = require('path')
let targetFile = path.join(__dirname,'..','router', 'test.js')
let msg = esprima.parseModule('import { sqrt } from "math.js"')
let log = console.log.bind(console)

let code = 'function ast(){}'
let ast = esprima.parse(code)
log(targetFile)
fs.readFile(targetFile, 'utf8', (err, data) => {
  if (err) throw err
  ast = esprima.parseScript(data)
  // let objString = JSON.stringify(ast, null, 2)
  log(JSON.stringify(ast, null, 4))
})

// estraverse.traverse(ast, {
//     enter: function (node) {
//         node.name += "_awsome";
//     }
// })
// var regenerated_code = escodegen.parse(ast)

// fs.readFile(targetFile, 'utf8', (err, data) => {
//   if (err) throw err
//   let reg =/default/.exec(data)
//   let jsData = data.substring(reg&&(reg.index+7)||0)
//   ast = esprima.parse(jsData)
//   let objString = JSON.stringify(ast, null, 2)
//   log(JSON.stringify(ast, null, 4))
//   fs.writeFile(saveFile, objString, (err) => {
//     // log("objString", objString)
//     if (err) throw err
//   })
// })

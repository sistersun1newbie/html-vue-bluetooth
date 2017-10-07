import Vue from 'vue'
Vue.directive('focus', {
  // 当绑定元素插入到 DOM 中。
  inserted: function (el) {
    // 聚焦元素
    el.focus()
  }
})
Vue.directive('html-code', {
  bind: function (el, binding) {
      console.log("bind",el.outerHTML,binding.value)
      binding.value.func(binding.value.variable,el.outerHTML)
    // for(let i in el){
    //   console.log(i, el[i])
    // }
  },
  update: function (el, binding ,vnode,oldVnode) {
    console.log("update",
    el.outerHTML,
    // Object.keys(vnode).join(', '),"=====",
    // Object.keys(oldVnode).join(', '),
  )

    // for(let i in el){
    //   console.log(i, el[i])
    // }

    // console.log(el.outerHTML)
  },
  componentUpdated: function (el, binding) {
    // console.log(typeof binding.value,binding.value,binding.expression)
    console.log("componentUpdated",String(new Date().getTime()))
    setTimeout(function () {
      binding.value.func(binding.value.variable,el.outerHTML)
      // binding.value.func(binding.value.variable,el.innerHTML)

    }, 10);

  },
})
Vue.directive('incident', {
  bind: function (el, binding, vnode) {
    var s = JSON.stringify
    // el.innerHTML =
    //   'name: '       + s(binding.name) + '<br>' +
    //   'value: '      + s(binding.value) + '<br>' +
    //   'expression: ' + s(binding.expression) + '<br>' +
    //   'argument: '   + s(binding.arg) + '<br>' +
    //   'modifiers: '  + s(binding.modifiers) + '<br>' +
    //   'vnode keys: ' + Object.keys(vnode).join(', ')

    el["on"+binding.arg] = ()=>{
      if(typeof binding.value ==='function'){
        binding.value()
      }else{
        console.log(typeof binding.value )
      }
    }
  }
})
export function random ({start = 0, end = 150}) {
  return (start + parseInt(Math.random() * (end - start)))
}

export function randomCenter (center, range, isFloat) {
  if (!center) {
    center = 10
  }
  if (!range) {
    range = 0.1
  }
  if (isFloat) {
    return (
      center * (1 - range) +
      parseFloat(Math.random() *
        (
          center * (1 + range) -
          center * (1 - range)
        )
      )
    ).toFixed(2)
  } else {
    return (center * (1 - range) + parseInt(Math.random() * (center * (1 + range) - center * (1 - range))))
  }
}
export function vueStyleVar (styleVar, styleObj) {
  let arr = []
  for (let i in styleObj) {
    arr.push(i)
    if (i in styleVar) {
      delete styleVar[i]
    }
  }
  styleVar = {...styleVar, ...styleObj}
  return styleVar
}
export function getTime () {
  return String((new Date).getTime())
}
//单个组件属性配置 有什么属性  父元素 递归查找创建元素
export function compsConfig (attr) {
  let obj={
    ['el-button']:{type:['large','small','mini'],innerText:'default text'},
    ['el-form']:{attr:{['label-width']:'80px'},innerText:'default text'},
    ['el-form-item']:{attr:{['label']:'label'}},
    ['el-switch']:{attr:{}},

  }
  return obj[attr]
}

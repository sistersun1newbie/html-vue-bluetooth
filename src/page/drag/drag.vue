<template lang="html">
  <div style="min-height:100vh">
    <el-row :gutter="20" style="display:none">
      <el-col :span="24">
        <button @dblclick="mousedown">test</button>

        <div @dragover.prevent="dragover" @drop="drop" class="blockdiv"  style="" >

        </div>
        <div @dragover.prevent="dragover" @drop="drop" class="blockdiv"  >
          <p id="qwe" @drag="ondrag" @dragstart="ondragstart"  draggable="true"  >
            123  @dragend="ondragend"
          </p>
          <!-- <el-button id="qwe" @drag="ondrag" @dragstart="ondragstart"  draggable="true" >
            123  @dragend="ondragend"
          </el-button> -->
        </div>
        <div id="test"  class="blockdiv" >

        </div>
      </el-col>
    </el-row>

    <el-row :gutter="20">
      <ul id="menu" v-show="menuShow" :style="menuStyle" class="el-dropdown-menu" style="transform-origin: center top 0px;position:absolute; z-index: 2007;">
        <li  class="el-dropdown-menu__item">黄金糕</li>
        <li class="el-dropdown-menu__item">狮子头</li>
        <li  class="el-dropdown-menu__item">螺蛳粉</li>
        <li class="el-dropdown-menu__item is-disabled">双皮奶</li>
        <li  class="el-dropdown-menu__item el-dropdown-menu__item--divided">蚵仔煎</li>
      </ul>
      <el-col :span="6" >
        <el-tabs  type="border-card" >
          <el-tab-pane label="div1" class="vertical" >
            <div id="hook-arguments-example" v-incident:contextmenu="rightClick">111</div>
            <!-- <input v-on:click="testfun" type="text" /> -->
            <component @dragstart.native="comDragStart"  draggable="true" @drag.native="comDrag" v-for="obj in comptArr"  :is="obj.name" >{{obj.content}}</component>

          </el-tab-pane>
          <el-tab-pane label="div2" class="vertical" >
            <el-form  ref="form" label-width="80px">
              <el-form-item @dragstart.native="comDragStart"  draggable="true" @drag.native="comDrag" label="活动名称">
                <el-input ></el-input>
              </el-form-item>
              <el-form-item label="活动区域">
                <!-- <el-select placeholder="请选择活动区域">
                  <el-option label="区域一" value="shanghai"></el-option>
                  <el-option label="区域二" value="beijing"></el-option>
                </el-select> -->
              </el-form-item>
              <el-form-item label="活动时间">
                <el-col :span="11">
                  <el-date-picker type="date" placeholder="选择日期"   style="width: 100%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">-</el-col>
                <el-col :span="11">
                  <el-time-picker type="fixed-time" placeholder="选择时间"   style="width: 100%;"></el-time-picker>
                </el-col>
              </el-form-item>
              <el-form-item label="即时配送">
                <el-switch on-text="" off-text=""  ></el-switch>
              </el-form-item>
              <el-form-item label="活动性质">
                <el-checkbox-group  >
                  <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                  <el-checkbox label="地推活动" name="type"></el-checkbox>
                  <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                  <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                </el-checkbox-group>
              </el-form-item>
              <el-form-item label="特殊资源">
                <el-radio-group  >
                  <el-radio label="线上品牌商赞助"></el-radio>
                  <el-radio label="线下场地免费"></el-radio>
                </el-radio-group>
              </el-form-item>
              <el-form-item label="活动形式">
                <el-input type="textarea" ></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" >立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
            </el-form>
          </el-tab-pane>
        </el-tabs>
      </el-col>

      <el-col :span="18" >
        <el-tabs  type="border-card" >
         <el-tab-pane label="div1" >
           <el-row>
             <el-col id="editArea" v-html="htmlcode" :span="24"
              @dragover.prevent.native="comDragOver"
              @drop.prevent.native="comDrop"
              style="border:1px solid red;min-height:200px;min-height:100vh">
             </el-col>
           </el-row>
         </el-tab-pane>
         <el-tab-pane label="div2" >
           <el-row>
             <el-col  :span="24">
             <el-form ref="form"  label-width="80px"
             @dragover.prevent.native="comDragOver"
             @drop.prevent.native="comDrop"
               style="border:1px solid red;min-height:200px;min-height:100vh">
              <el-form-item>
                <el-button type="primary">立即创建</el-button>
                <el-button>取消</el-button>
              </el-form-item>
             </el-form>

             </el-col>
           </el-row>
         </el-tab-pane>
        </el-tabs>
      </el-col>
      <!-- <el-col :span="6" class="vertical">
        {{htmlcode}}
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
  export default {
    data () {
      return{
        test:'111',
        htmlcode:'',
        comtype:'el-button',
        comptArr:[
          {name:'el-button',content:'默认文本'},
          {name:'el-radio',content:'默认文本'},
          {name:'el-switch',content:'默认文本'},
          {name:'el-input',content:'默认文本'},
          // {name:'el-form-item',content:'默认文本'},



  //         <el-form-item label="活动名称">
  //   <el-input v-model="form.name"></el-input>
  // </el-form-item>
        ],
        menu:document.getElementById("menu"),

        menuShow:false,
        menuStyle:{},
      }
    },
    created(){
      window.onload = function(){
            //去掉默认的contextmenu事件，否则会和右键事件同时出现。
            document.oncontextmenu = function(e){
                e.preventDefault();
            };
            document.getElementById("test").onmousedown = function(e){
                if(e.button ==2){
                    alert("你点了右键");
                }else if(e.button ==0){
                    alert("你点了左键");
                }else if(e.button ==1){
                    alert("你点了滚轮");
                }
            }
        }
    },
    mounted(){
      // document.getElementById("aaa").addEventListener('click',function(){
      //
      // })
      window.onclick=()=>{
        this.menuShow=false
      }
      document.getElementById("editArea").oncontextmenu = (event) => {
        // alert("右击事件")
          event.preventDefault();
          var e = event || window.event;
          //鼠标点的坐标
          var oX = event.clientX;
          var oY = event.clientY;
          //菜单出现后的位置
          this.menuShow = true
          this.menuStyle = {}

          this.menuStyle = this.util.vueStyleVar(this.menuStyle,{left: oX + "px",top:oY + "px"})
          // this.menu.style.left = oX + "px";
          // this.menu.style.top = oY + "px";
          // for(let i in this.menu){
          //   // 207 offsetHeight
          //   console.log(i,this.menu[i])
          // }

      }

    },
    methods:{
      // 测试方法
      testfun(){
        alert(123)
      },
      a(){
        alert(111)
      },
      b(){
        alert(222)
      },
      mousedown () {
        console.log('dblclick')
      },
      ondrag (event) {
        this.log(event.target.parentNode === event.target.parentElement)
      },
      ondragstart (event) {
        this.log('========ondragstart', event)
        this.log(event.target.id)
        event.dataTransfer.setData('Text', event.target.outerHTML)
        this.log('test', event.dataTransfer.getData('Text', event.target.outerHTML))
      },
      ondragend (event) {
        this.log('===ondragend', event)
        event.preventDefault()
      },
      dragover (event) {
        this.log('===dragover', event)
        event.preventDefault()
      },
      drop (event) {
        event.preventDefault()
        this.log('接受数据', event.dataTransfer.getData('Text'))
        this.log('===drop',typeof event.dataTransfer.getData('Text'))
        event.target.innerHTML=event.dataTransfer.getData('Text')
      },
      // 组件拖拽方法
      comDrag(event){
        this.log("组件拖拽方法"
        ,event.target.parentNode === event.target.parentElement
        ,event.target.outerHTML)

      },
      comDragStart(){
        this.log("组件拖拽开始")
          event.dataTransfer.setData('domData', event.target.outerHTML)
      },
      comDragOver(event){
        this.log("组件拖拽结束区域",event)
        event.preventDefault()//不取消默认行为不执行drop监听的方法
      },
      comDrop(event){
        // event.preventDefault()
        this.log("====组件拖拽落下",event)
        // if(event.target.nodeName!=='DIV'){ return }
        event.target.innerHTML+=event.dataTransfer.getData('domData')

        // this.htmlcode +=event.dataTransfer.getData('domData')
      },
      // contextmenu(){
      //   alert(123)
      // },
      rightClick(){

      },
      //深度克隆
      deepClone(obj){
          let result={},oClass=this.isClass(obj);
          // if(oClass==="Object"){
          //     result={};
          // }else if(oClass==="Array"){
          //     result=[];
          // }else{
          //     return obj;
          // }
          for(let key in obj){
              let copy=obj[key];
              if(this.isClass(copy)=="Object"){
                  result[key]=arguments.callee(copy);
              }else if(this.isClass(copy)=="Array"){
                  result[key]=arguments.callee(copy);
              }else{
                  result[key]=obj[key];
              }
          }
          return result;
      },
      isClass(o){
          if(o===null) return "Null";
          if(o===undefined) return "Undefined";
          return Object.prototype.toString.call(o).slice(8,-1);
      }

    }
  }
</script>

<style lang="less" scoped="scoped">

  .blockdiv{
    height:200px;
    width:200px;
    background-color:yellow;
    display:inline-block;
    line-height:0px;
    vertical-align: top;
  }

  .vertical{
    display:flex;
    align-items:center;
    flex-direction:column;
    flex-wrap:nowrap;
    justify-content:flex-start;
    align-content:flex-start;
    &>*{
      margin:10px 0px;
    }
  }

</style>

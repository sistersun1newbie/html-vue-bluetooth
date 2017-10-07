<template lang="html">
  <div style="min-height:100vh">
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
            <el-form  style="width:100%" label-width="80px">
              <el-form-item
                @dragstart.native="comDragStart()"
                draggable="true"
                @drag.native="comDrag"

                label="label" ></el-form-item>
              <el-form-item
                @dragstart.native="comDragStart(obj)"
                draggable="true"
                @drag.native="comDrag"
                v-for="obj in comptArr"
                :label="obj.name" >
                  <component
                   @dragstart.native="comDragStart(obj)"
                   draggable="true"
                   @drag.native="comDrag"

                   :is="obj.name" >
                   {{obj.content}}
                   </component>
              </el-form-item>
            </el-form>

          </el-tab-pane>

        </el-tabs>
      </el-col>

      <el-col :span="12" >
        <el-tabs  type="border-card" >
         <el-tab-pane label="div1" >
           <el-row>
             <el-col id="editArea"  :span="24"
             @dragover.prevent.native="comDragOver"
             @drop.prevent.native="comDrop"
              style="border:1px solid red;min-height:200px;min-height:100vh">
                <comps @delEvt="delOn"  v-for="i in editAreaArr" :comps="i"></comps>
             </el-col>
           </el-row>
         </el-tab-pane>

        </el-tabs>
      </el-col>
      <el-col :span="6" >
        <el-tabs  type="border-card" >
          <el-tab-pane label="div1" class="vertical" >

            <nestComp
            @dragstart.native="comDragStart(obj)"
            draggable="true"
            @drag.native="comDrag"
             style="width:100%"
              v-for="obj in comptArr1" :nestInitObj="obj">
            </nestComp>

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
import comps from "page/components/comps"
import nestComp from "page/components/nestComp"
  export default {
    components: {
      comps,nestComp
    },
    data () {
      return{
        htmlcode:'',
        comptArr:[
          {name:'el-button',content:'默认文本',parentNode:{}},
          {name:'el-radio',content:'默认文本'},
          {name:'el-switch',content:'默认文本'},
          {name:'el-input',content:'默认文本'},
        ],
        comptArr1:[
          {
            name:'el-form',childNode:[{
              name:'el-form-item',childNode:[{
                name:'el-switch',childNode:[{}]
              }]
            }]
          },
        ],
        menu:document.getElementById("menu"),
        menuShow:false,
        menuStyle:{},

        editAreaArr:[]
      }
    },
    created(){
      window.onload = function(){
            //去掉默认的contextmenu事件，否则会和右键事件同时出现。
            document.oncontextmenu = function(e){
                e.preventDefault();
            };

        }
    },
    mounted(){
      // document.getElementById("aaa").addEventListener('click',function(){
      //
      // })
      window.onclick=()=>{
        this.menuShow=false
      }
      // document.getElementById("editArea").oncontextmenu = (event) => {
      //   // alert("右击事件")
      //     event.preventDefault();
      //     var e = event || window.event;
      //     //鼠标点的坐标
      //     var oX = event.clientX;
      //     var oY = event.clientY;
      //     //菜单出现后的位置
      //     this.menuShow = true
      //     this.menuStyle = {}
      //
      //     this.menuStyle = this.util.vueStyleVar(this.menuStyle,{left: oX + "px",top:oY + "px"})
      //     // this.menu.style.left = oX + "px";
      //     // this.menu.style.top = oY + "px";
      //     // for(let i in this.menu){
      //     //   // 207 offsetHeight
      //     //   console.log(i,this.menu[i])
      //     // }
      // }

    },
    methods:{
      // 组件拖拽方法
      comDrag(event){
        this.log("组件拖拽方法"
        ,event.target.parentNode === event.target.parentElement
        ,event.target.outerHTML)

      },
      comDragStart(obj){
        this.log("组件拖拽开始")
      // event.dataTransfer.setData('domData', event.target.outerHTML)
        event.dataTransfer.setData('domData', JSON.stringify(obj))

      },
      comDragOver(event){
        this.log("组件拖拽结束区域",event)
        event.preventDefault()//不取消默认行为不执行drop监听的方法
      },
      comDrop(event){
        // event.preventDefault()
        let data = JSON.parse(event.dataTransfer.getData('domData'))
        this.log("====组件拖拽落下",typeof data)
        // if(event.target.nodeName!=='DIV'){ return }
        // event.target.innerHTML+=event.dataTransfer.getData('domData')
        data={...data,id:this.util.getTime()}
        this.editAreaArr.push(data)
        // this.htmlcode +=event.dataTransfer.getData('domData')
      },
      delOn(obj){
        let i= 0
        for( ;!(this.editAreaArr[i].id=== obj.id)&&i<this.editAreaArr.length;i++){

        }
        this.editAreaArr.splice(i,1)


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

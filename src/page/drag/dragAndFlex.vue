<template lang="html">
  <div style="min-height:100vh">
    <el-row :gutter="20">
      <el-col :span="24">
        <!-- <button >test</button> -->
      </el-col>
    </el-row>
    <!-- {{test}} -->
    <el-row :gutter="20">
      <el-col :span="6" class="vertical">
        <!-- <div id="hook-arguments-example" v-incident:contextmenu="rightClick">111</div> -->
        <!-- <input v-on:click="testfun" type="text" /> -->
        <component @dragstart.native="comDragStart"  draggable="true" @drag.native="comDrag" v-for="obj in comptArr"  :is="obj.name" >{{obj.content}}</component>
        <ul id="menu" v-show="menuShow" :style="menuStyle" class="el-dropdown-menu" style="transform-origin: center top 0px;position:absolute; z-index: 2007;">
          <li  class="el-dropdown-menu__item">黄金糕</li>
          <li class="el-dropdown-menu__item">狮子头</li>
          <li  class="el-dropdown-menu__item">螺蛳粉</li>
          <li class="el-dropdown-menu__item is-disabled">双皮奶</li>
          <li  class="el-dropdown-menu__item el-dropdown-menu__item--divided">蚵仔煎</li>
        </ul>
      </el-col>
      <!-- -->
      <el-col :span="12"  id="editArea" v-show="false"
      v-html="htmlcode"
       @dragover.prevent.native="comDragOver"
       @drop.prevent.native="comDrop"
       style="border:1px solid red;min-height:200px;min-height:100vh">
      >
      </el-col>
        <el-col :span="12">

       <el-tabs  type="border-card" >
          <el-tab-pane label="div" >
            <el-row>
              <el-col   :span="24" >
                <!-- v-html-code="{func:testfun,variable:'htmlcode'}"  -->
              <!-- <div
              v-html="htmlcode"
              @dragover.prevent="comDragOver"
              @drop.prevent="comDrop"
              style="border:1px solid red;min-height:200px;min-height:100vh">
v-html-code="{func:testfun,variable:'htmlcode'}"
              </div> -->
                <flexDiv
                @dragover.prevent.native="comDragOver"
                @drop.prevent.native="comDrop"
                  v-for="i in flexDivData"
                 :childData='i'
                 :key="i.id"
                  style="border:1px solid red;min-height:200px;min-height:100vh;background-color: grey">
                  <div slot="test" v-html="htmlcode"></div>
                </flexDiv>
              </el-col>
            </el-row>

          </el-tab-pane>

          <!-- <el-tab-pane label="Code" >
            <el-row>
              <el-col  :span="8" >
                <div style="width:100%;min-height:10px"
                 @dragover.native="comDragOver"
                 @drop.native="comDrop" >
                  <flexDiv

                   v-for="i in flexDivData"
                   v-html-code="{func:testfun,variable:'htmlcode'}"
                   :childData='i'
                   :key="i.id"
                    style="border:1px solid red;min-height:200px;min-height:100vh;background-color: grey">
                  </flexDiv>
                </div>
            </el-col>
            <el-col id="editArea"  :span="8" >
            {{flexDivData}}
            </el-col>
            <el-col   :span="8" >
            {{htmlcode}}
            </el-col>
          </el-row>
          </el-tab-pane> -->

        </el-tabs>
      </el-col>
      <el-col :span="6" >
        <el-tabs type="border-card">
          <el-tab-pane label="容器配置">
            <el-form ref="form" label-position="top" :inline="true"  label-width="80px">
              <el-form-item label="flex-direction:">
                <el-select v-model="flexDirection" placeholder="请选择flex-direction">
                  <el-option v-for="item in flexDirectionOptions" :key="item.value" :label="item.value" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="flexWrap:">
                <el-select v-model="flexWrap" placeholder="请选择flexWrap">
                  <el-option v-for="item in flexWrapOptions" :key="item.value" :label="item.value" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="justifyContent:">
                <el-select v-model="justifyContent" placeholder="请选择justifyContent">
                  <el-option v-for="item in justifyContentOptions" :key="item.value" :label="item.value" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="alignItems:">
                <el-select v-model="alignItems" placeholder="请选择alignItems">
                  <el-option v-for="item in alignItemsOptions" :key="item.value" :label="item.value" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="alignContent:">
                <el-select v-model="alignContent" placeholder="请选择alignContent">
                  <el-option v-for="item in alignItemsOptions" :key="item.value" :label="item.value" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>

            </el-form>
          </el-tab-pane>
          <el-tab-pane label="内容配置">
            <el-form ref="form" label-position="top" :inline="true"  label-width="80px">
              <el-form-item  label="order:">
                <el-select v-model="flexOrder"  placeholder="请选择order">
                  <el-option v-for="i in 20" :key="(new Date).getTime()+''" :label="i-10" :value="i-10">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item   label="flex-grow:">
                <el-select v-model="flexGrow"  placeholder="请选择flex-grow">
                  <el-option v-for="i in 20" :key="(new Date).getTime()+''" :label="i-10" :value="i-10">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="flex-shrink:">
                <el-select v-model="flexShrink"   placeholder="请选择flex-shrink">
                  <el-option v-for="i in 20" :key="(new Date).getTime()+''" :label="i" :value="i">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item   label="flex-basis:">
                <el-select v-model="flexBasis" placeholder="请选择 flex-basis">
                  <el-option v-for="i in 20" :key="(new Date).getTime()+''" :label="i===1?'auto':i+'px'" :value="i+'px'">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item   label="align-self:">
                <el-select v-model="alignSelf" placeholder="请选择 align-self">
                  <el-option v-for="item in alignItemsOptions" :key="item.value" :label="item.value" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>

            </el-form>
          </el-tab-pane>
          <el-tab-pane label="大小设置">
            <el-form ref="form" label-position="top" :inline="true"  label-width="80px">
              <el-form-item  label="width:">
                <el-input v-model="contentWidth" style="width:100%"></el-input>
              </el-form-item>
              <el-form-item  label="height:">
                <el-input v-model="contentHeight" style="width:100%"></el-input>
              </el-form-item>
              <el-form-item  label="height单位:">
                <el-select v-model="heightUnit"  placeholder="请选择height单位">
                  <el-option v-for="i in ['px','vh']" :key="(new Date).getTime()+''" :label="i" :value="i">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item  label="width单位:">
                <el-select v-model="widthUnit"  placeholder="请选择width单位">
                  <el-option v-for="i in ['%']" :key="(new Date).getTime()+''" :label="i" :value="i">
                  </el-option>
                </el-select>
              </el-form-item>
              <!-- <el-form-item  label="type:">
                <el-select v-model="contentType"  placeholder="请选择type">
                  <el-option v-for="i in ['content','item']" :key="(new Date).getTime()+''" :label="i" :value="i">
                  </el-option>
                </el-select>
              </el-form-item> -->
              <el-form-item  label="title:">
                <el-input v-model="contentTitle" style="width:100%"></el-input>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="树" >
            <ul class="ul" style="display: inline-block;">
              <!--:selectedId="selectedId"  -->
              <treeCom  @delEvt="delOn" v-for="i in flexDivData" :key="i.id"  :treeData="i"></treeCom>
            </ul>
          </el-tab-pane>
        </el-tabs>
        <el-form ref="form" label-position="top" :inline="true"  label-width="80px">
          <el-form-item>
            <el-button type="primary" @click="addContent">添加</el-button>
            <el-button type="primary" @click="clean()">clean</el-button>
            <el-button type="primary" @click="removeRandom">removeRandom</el-button>
            <el-button type="primary" @click="addRandom">addRandom</el-button>
            <el-button type="primary" @click="">shuffle</el-button>
            <el-button type="primary" @click="sure()">确定</el-button>
          </el-form-item>
          <el-form-item>
            {{content}}
            <p>
              =========
            </p>
            {{JSON.stringify(box)}}
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import treeCom from 'components/treeItem'
import flexDiv from "page/components/flexDivItem"
  export default {
    components: {
      flexDiv,treeCom
    },
    watch:{
      htmlcode(v){

      },
      flexDivData(nv){
        console.log("flexDivData Changer")
        this.htmlcode=this.editArea.outerHTML
      }
    },
    data () {
      return{
        test:'222',
        abc:'123',
        htmlcode:'1',
        comtype:'el-button',
        comptArr:[
          {name:'el-button',content:'默认文本'},
          {name:'el-radio',content:'默认文本'},
          {name:'el-switch',content:'默认文本'},
        ],
        menu:document.getElementById("menu"),
        editArea:document.getElementById("editArea"),
        menuShow:false,
        menuStyle:{},

      // felx comp
        selectedId:'',
        selectedObj:{
          // test:'11'
        },
        flexDivData: [{
          // id:'0',
          title: 'root',
          // type:'content',//类型标识 是容器还是 项目item
          child: []
        }],
        animation:'list-complete',//flip-list  list list-complete
        // flex配置
        itemAmount: [
          {
            style:{
              'width':100+'px'
            },
            value:'first',
            key: (new Date).getTime()+'',
          }
        ],
        flexDirection: 'row',
        flexDirectionOptions: [
          // row | row-reverse | column | column-reverse;
          {
            value: 'row'
          },
          {
            value: 'row-reverse'
          },
          {
            value: 'column'
          },
          {
            value: 'column-reverse'
          }
        ],
        flexWrap: 'nowrap',
        flexWrapOptions: [
          // nowrap | wrap | wrap-reverse;
          {
            value: 'nowrap'
          },
          {
            value: ' wrap'
          },
          {
            value: 'wrap-reverse'
          }
        ],
        justifyContent: 'flex-start',
        justifyContentOptions: [
          // justify-content: flex-start | flex-end | center | space-between | space-around;
          {
            value: 'flex-start'
          },
          {
            value: ' flex-end'
          },
          {
            value: 'center'
          },
          {
            value: 'space-between'
          },
          {
            value: ' space-around'
          }
        ],
        alignItems: 'flex-start',
        alignItemsOptions: [
          // 需要限定容器高度
          // align-items: flex-start | flex-end | center | baseline | stretch;
          {
            value: 'flex-start'
          },
          {
            value: ' flex-end'
          },
          {
            value: 'center'
          },
          {
            value: 'baseline'
          },
          {
            value: 'stretch'
          }
        ],
        alignContent: 'stretch',
        alignContentOptions: [
          // 容器需要有高度
          // align-content: flex-start | flex-end | center | space-between | space-around | stretch;
          {
            value: 'flex-start'
          },
          {
            value: ' flex-end'
          },
          {
            value: 'center'
          },
          {
            value: 'space-between'
          },
          {
            value: 'space-around'
          },
          {
            value: 'stretch'
          }
        ],


        // flexItem
        flexOrder:1,
        flexGrow:'0',
        flexShrink:1,
        flexBasis:'auto',
        alignSelf:'auto',
        // 大小设置
        heightUnit:'px',
        widthUnit:'%',
        contentHeight:'0',
        contentWidth:'0',
        // contentType:'content',
        contentTitle:'',
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
      this.deg()
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
    computed: {
      box () {
        let styleObj = {
          // display: ' -webkit-flex',
          display: 'flex',
          // width: '500px',
          // height: ' 800px',
          // backgroundColor: 'grey'
        }
        if (this.flexDirection && this.flexDirection !== '') {
          styleObj['flex-direction'] = this.flexDirection
        }

        if (this.flexWrap && this.flexDirection !== '') {
          styleObj['flex-wrap'] = this.flexWrap
        }

        if (this.justifyContent && this.flexDirection !== '') {
          styleObj['justify-content'] = this.justifyContent
        }
        if (this.alignItems && this.flexDirection !== '') {
          styleObj['align-items'] = this.alignItems
        }
        if (this.alignContent && this.flexDirection !== '') {
          styleObj['align-content'] = this.alignContent
        }
        return styleObj
      },
      content (){
        let styleObj={}
        if (this.flexOrder && this.flexOrder !== '') {
          styleObj['order'] = this.flexOrder
        }
        if (this.flexGrow && this.flexGrow !== '') {
          styleObj['flex-grow'] = this.flexGrow
        }
        if (this.flexShrink && this.flexShrink !== '') {
          styleObj['flex-Shrink'] = this.flexShrink
        }
        if (this.flexBasis && this.flexBasis !== '') {
          styleObj['flex-basis'] = this.flexBasis
        }
        if (this.alignSelf && this.alignSelf !== '') {
          styleObj['align-self'] = this.alignSelf
        }
        return styleObj
      },
      widthStyle(){
        let styleObj={style:{height:'auto',width:'auto'}}
        if (this.contentHeight && this.contentHeight !== ''&& String(this.contentHeight) !== String(0)) {
          if (this.heightUnit && this.heightUnit !== '') {
            styleObj.style['height'] = this.contentHeight + this.heightUnit
          }
        }
        if (this.contentWidth && this.contentWidth !== '' && String(this.contentWidth) !== String(0)) {
          styleObj.style['width'] = this.contentWidth+this.widthUnit
        }
        // if (this.contentType && this.contentType !== '') {
        //   styleObj['type'] = this.contentType
        // }
        if (this.contentTitle && this.contentTitle !== '') {
          styleObj['title'] = this.contentTitle
        }
        return styleObj
      },
    },
    methods:{
      // 测试方法
      testfun(a,b){
        // console.log("====",a,b)
        if(a&&b){//传值判断
          console.log(String(new Date().getTime()))
          if(this[a]!==b){
            this[a]=b
          }else{
            console.log("repeation!!!",b)
          }

        }

      },

      deg(){
        this.abc+="110099"
        setTimeout( () => {
          this.deg()
        }, 1000);
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
        let comp=event.dataTransfer.getData('domData')
        event.target.innerHTML+=comp!==undefined?comp:''

        // this.htmlcode +=event.dataTransfer.getData('domData')
        console.log("111",this.htmlcode)
      },
      // contextmenu(){
      //   alert(123)
      // },
      // ======================flexCom====================
      addContent(){
        this.itemAmount.push({
          // style:{
          //   'width':this.util.random({start:50,end:150})+'px',
          //   'height':this.util.random({start:50,end:150})+'px',
          //   'font-size':this.util.random({start:6,end:24})+'px'
          // },
          value:this.util.random({start:50,end:150})+" add ",
          key: (new Date).getTime()+'',
        })
      },
      clean(){
        this.itemAmount.splice(1,this.itemAmount.length-1)
      },
      removeRandom(){
        let number = this.util.random({start:0,end:this.itemAmount.length})
        this.log('removeRandom',number)
        this.itemAmount.splice(number,1)
        // this.itemAmount.shift()
      },
      addRandom(){
        let number = this.util.random({start:0,end:this.itemAmount.length})
        this.log('addRandom',number)
        this.itemAmount.splice(number,0,{
          style:{
            'width':this.util.random({start:50,end:150})+'px',
            'height':this.util.random({start:50,end:150})+'px',
            'font-size':this.util.random({start:6,end:24})+'px'
          },
          value:this.util.random({start:50,end:150}),
          key: (new Date).getTime()+'',
        })
      },
      getFlexItem(item,e){
        let temp=['order','flex-Shrink','align-self','flex-basis','flex-grow']
        //清空赋值
        // console.log(item.style)
        for(let i = 0;i<temp.length;i++){
          // console.log(item.style[temp[i]],temp[i])
          delete item.style[temp[i]]
          // console.log(item.style[temp[i]])
        }
        item.style={...this.content,...item.style}
        // console.log(item.style)
      },
      delOn(argObj){
        // this.log('root received',argObj)
        if(argObj.type==='select'){
          // this.log('select')
          this.selectedId=(typeof argObj.id ==='number'?String(argObj.id):argObj.id)
          this.recursionSearch(false,this.flexDivData,argObj.id,argObj.type)
        }
        if(argObj.type==='delete'){
          // this.log("delete")
          this.recursionSearch(false,this.flexDivData,argObj.id,argObj.type)
        }
      },
      recursionSearch(parent,childs,id,type){
        // this.log("start",childs)
        for(let i=0;i<childs.length;i++){
          // console.log(String(childs[i].id)&& String(childs[i].id) === String(id),String(childs[i].id))
          let kids=childs[i].child

          if(String(childs[i].id)&&String(childs[i].id)===String(id)){
            // console.log(String(childs[i].id),"find 开始层次遍历删除",parent,id)
            // console.log(type,type==='delete',"查找dao")
            if(type==='delete'){
              parent.child.splice(i,1)
              return ;
            }
            if(type==='select'){
              // console.log(parent,parent.child,this.flexDivData[0])
              this.selectedObj=parent?(parent.child[i]):this.flexDivData[0]
              // console.log("查找dao",this.selectedObj)
              return ;
            }
          }
          if(kids.length>0){
            // console.log("继续递归over",String(childs[i].id),kids[i],id)
            this.recursionSearch(childs[i],kids,id,type)
          }else{
            // console.log("叶子节点  结束查找")
            // return ;
          }
        }
      },
      sure(){
        // console.log(  this.selectedObj.style ,123)
        this.selectedObj.style = {...this.box,...this.content,...this.widthStyle.style}
        // this.selectedObj.titleSetting=this.widthStyle
        this.selectedObj.title = this.widthStyle.title
        this.selectedObj.type = this.widthStyle.type
        // this.log(this.selectedObj)
      },

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


  .grid-content {
      border-radius: 4px;
      min-height: 36px;
  }
  .bg-purple {
      background: #d3dce6;
  }
  .box {
      display: -webkit-flex;
      /* Safari */
      display: flex;
  }
  .flip-list-move {
    transition: transform 1s;
  }

  .list-enter-active, .list-leave-active {
    transition: all 1s;
    position: absolute;
  }
  .list-enter, .list-leave-to
  /* .list-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }


  .list-complete-item {
    transition: all 1s;
    display: inline-block;
    margin-right: 10px;
  }
  .list-complete-leave-to
  /* .list-complete-leave-active for below version 2.1.8 */ {
    opacity: 0;
    transform: translateY(30px);
  }

  .ul {
    padding: 0px;
    cursor: pointer;
    li{
      list-style: none;
      margin-left: 10px;
      span{
        border: 1px soild blue
      }
    }
  }
</style>

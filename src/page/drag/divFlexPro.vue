<template>
<div>
  <el-row :gutter="20">
    <el-col :span="6">
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
    <el-col :span="6">
      <el-tabs type="border-card">
        <el-tab-pane label="树形图">
          <ul class="ul" style="display: inline-block;">
            <!--:selectedId="selectedId"  -->
            <treeCom  @delEvt="delOn" v-for="i in flexDivData" :key="i.id"  :treeData="i"></treeCom>
          </ul>
        </el-tab-pane>
      </el-tabs>
      <el-form ref="form" label-position="top" :inline="true"  label-width="80px">

        <el-form-item>
          {{selectedObj}}
          <p>
            =========
          </p>
          {{selectedId}}
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :span="12" style="background-color: grey">
      <!-- <transition-group
       :style="box"
       :name="animation" tag="div"
       appear
       move-class="flip-list-move"
       enter-active-class="animated tada"
       leave-active-class="list-leave-active"
       mode="in-out" >
         <div class="grid-content bg-purple" @click="getFlexItem(itemObj,$event)" :style="itemObj.style" :key="itemObj.key" v-for="(itemObj,index) in itemAmount">

           <div class="" style="width:100%;text-align: center;border-bottom: 1px solid red;">
             {{itemObj.value}}
           </div>
         </div>

       </transition-group> -->
        <flexDiv v-for="i in flexDivData" :childData='i' :key="i.id"></flexDiv>
    </el-col>
  </el-row>
</div>
</template>

<script>
import treeCom from 'components/treeItem'
import tg from "page/commen/transitionGroup"
import flexDiv from "page/components/flexDivItem"
export default {
  components: {
    tg,flexDiv,treeCom
  },
  data () {
    return {
      selectedId:'',
      selectedObj:{test:'11'},

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
  mounted(){
    this.log(JSON.stringify(this.box))
    // this.log('random',this.util.random({}))
    // this.recursionSearch('root',this.flexDivData,2)
    // console.log(this.flexDivData[0].child[1])
  },
  watch: {
    selectedObj (newV, oldV) {
      console.log('selectedObj has change ',newV)
    },
    flexDivData (newV, oldV) {
      console.log('flexDivData has change ',newV)
    },
  },
  methods:{
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='less' scoped>

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

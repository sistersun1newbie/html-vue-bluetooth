<template>
<div>


  <el-row :gutter="20">
    <el-col :span="12">
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
                <el-option v-for="item in alignContentOptions" :key="item.value" :label="item.value" :value="item.value">
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
            flex
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
    <el-col :span="12">
      <transition-group
       :style="box"
       :name="animation" tag="div"
       appear
       move-class="flip-list-move"
       enter-active-class="animated tada"
       leave-active-class="list-leave-active"
       mode="in-out"
       >
         <div class="grid-content bg-purple" @click="getFlexItem(itemObj,$event)" :style="itemObj.style" :key="itemObj.key" v-for="(itemObj,index) in itemAmount">

           <div class="" style="width:100%;text-align: center;    border-bottom: 1px solid red;">
             {{itemObj.value}}
           </div>
         </div>
       </transition-group>
    </el-col>
  </el-row>
</div>
</template>

<script>
import tg from "page/commen/transitionGroup"
export default {
  components: {
    tg
  },
  data () {
    return {
      animation:'list-complete',//flip-list  list list-complete
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
      temp:'',
      flexOrder:1,
      flexGrow:'0',
      flexShrink:1,
      flexBasis:'auto',
      alignSelf:'auto',
    }
  },
  computed: {
    box () {
      let styleObj = {
        // display: ' -webkit-flex',
        display: 'flex',
        width: '500px',
        height: ' 800px',
        backgroundColor: 'grey'
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
      // return {
      //   'display': 'flex',
      //   'flex-direction': 'row',
      //   'width': '500px',
      //   'height':' 800px',
      //   'flex-wrap': 'wrap',
      //   'align-content': 'space-between'
      // }
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
  },
  mounted(){
    this.log(JSON.stringify(this.box))
    this.log('random',this.util.random({}))
  },
  methods:{
    addContent(){
      this.itemAmount.push({
        style:{
          'width':this.util.random({start:50,end:150})+'px',
          // 'width':'100%',
          'height':this.util.random({start:50,end:150})+'px',
          'font-size':this.util.random({start:6,end:24})+'px'
        },
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
      console.log(item.style)
      for(let i = 0;i<temp.length;i++){
        console.log(item.style[temp[i]],temp[i])
        delete item.style[temp[i]]
        console.log(item.style[temp[i]])
      }
      item.style={...this.content,...item.style}
      console.log(item.style)
    }
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


</style>

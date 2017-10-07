<template lang="html">
  <li class="selectedId===treeData.id?'selected':''">
    <div @click="isShow=!isShow">{{isShow?'-':'+'}}{{treeData.title||'no title'}}
      <span style="border:1px solid red" v-show="treeData.id" @click.stop="delEmit('delete')">Delete</span>
      <span style="border:1px solid red" @click.stop="delEmit('select')">Choose</span>
    </div>
    <slot name="test"></slot>
    <ul v-show="isShow">
      <treeObj :selectedId="selectedId" @delEvt="delOn" v-for="(item,index) in treeData.child||[]" :key="index"  v-if="treeData&&treeData.child&&treeData.child.length!==0" :treeData="item">
        <!-- <span slot="test">{{index}}</span> -->
      </treeObj>
      <li class="add" @click="addchild()">+ADD</li>
      <!-- {{treeData.child.length!==0}} -->
    </ul>
  </li>
</template>

<script>
export default {
  name: 'treeObj',
  props: {
    treeData: {
      type: Object,
      default: function () {
        return {
          title: '',
          id:'null',
          child: [],
          style:{},
        }
      }
    },
    selectedId: {
      type: String,
      default: function () {
        return ''
      }
    },
  },
  data () {
    return {
      isShow: false
    }
  },
  computed: {
    treeDataBak(){
      return this.treeData
    }
  },
  mounted () {

  },
  methods: {
    addchild () {
      this.treeDataBak.child.push({
        title: 'new some',
        id:String(new Date().getTime()),
        child: []
      })
    },
    delEmit(type){
      // console.log('send',this.treeData)
      if(!type){
        type='select'
      }
      this.$emit('delEvt',{type:type,id:this.treeData.id})
    },
    delOn(args){
      // console.log('received and send',args)
      this.$emit('delEvt',args)
    },
    choose(){

    }
  }
}
</script>

<style lang="less" scoped="scoped">
ul {
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

.selected{
  border:1px solid blue;
}
</style>

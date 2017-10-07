<template lang="html">
  <div class="grid-content bg-purple flexItem" :style="childData.style">
    <!-- <div class="title" v-show="childData.type!=='content'" style="">
      {{childData.title}}
    </div> -->
      <slot name="test"></slot>
      <flexDivComp v-for="(item,index) in childData.child" :key="index"  v-if="childData&&childData.child&&childData.child.length!==0" :childData="item">
        <!-- <span slot="test">{{index}}</span> -->
        <div slot="test" v-html="item.htmlcode"></div>
      </flexDivComp>

  </div>
</template>

<script>
export default {
  name: 'flexDivComp',
  props: {
    childData: {
      type: Object,
      default: function() {
        return {
          title: '',
          // type: 'content',
          style: '',
          child: [],
          // custom:{},
        }
      }
    },


  },
  watch: {
    // childData (newV, oldV) {
    //   console.log('childData',newV)
    // }
  },
  computed: {

    mergeStyle: function () {
      // if(this.childData.custom!==undefined){
      //   return {...this.childData.custom}
      // }else{
      //   return {...this.itemAttr,...this.contentAttr}
      // }
        return {...this.itemAttr,...this.contentAttr}
    }
  },
  data() {
    return {
      contentAttr: {
            ['display']: "flex",
            ['flex-direction']: "row",
            ['flex-wrap']: "wrap",
            ['justify-content']: "flex-start",
            ['align-items']: "flex-start",
            ['align-content']: "stretch"
        },
        itemAttr: {
              ['order']: 1,
              ['flex-grow']: 0,
              ['flex-Shrink']: 1,
              ['flex-basis']: 'auto',
              ['align-self']: 'auto',
        },

      //  visible:true
    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped="true">
  .title {
      width: 100%;
      text-align: center;
      border-bottom: 1px solid red;
  }
  .grid-content {
      border-radius: 4px;
      min-height: 36px;
      border: 1px solid blue;
  }
  .bg-purple {
      background: #d3dce6;
  }
  .content {
      width: 100%;

  }
  .flexItem {
      margin: 0 10px;
      min-width: 36px;
  }
</style>

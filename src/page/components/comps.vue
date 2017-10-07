<template lang="html">
  <div class="comContant" style="">
    <div class="toolBar">
      <el-button class="cusBtn " @click.native="delEmit()" size="mini" type="danger">Delete</el-button>
      <el-button class="cusBtn" size="mini" type="default">Drag</el-button>
    </div>
    <!-- <component :is="comps.name" >{{comps.content||attr.contentText}}</component>{{comps}} -->
    <nestComp
    style="width:100%"
    
     :nestInitObj="comps"
    ></nestComp>
  </div>
</template>

<script>
import nestComp from "page/components/nestComp"

export default {
  name: 'comps',
  components: {
    nestComp
  },
  props: {
    comps: {
      type: Object,
      default: function () {
        return {
          name: '',
          id:this.util.getTime(),
          content:'',
        }
      }
    },
  },
  data () {
    return {
      btnList:this.util.compsConfig(this.comps.name)||'',
    }
  },
  computed: {
    attr(){
      return {contentText:this.btnList.innerText||''}
    }
  },
  mounted () {

  },
  methods: {
    delEmit(type){
      // console.log('send',this.treeData)
      this.$emit('delEvt',{id:this.comps.id})
    },
  }
}
</script>

<style lang="scss" scoped>
  .comContant{
    border-color: red;
    border-style: dotted;
    border-width:1px;
    position:relative;
    min-height: 10vh;

    padding-top: 25px;
    &:hover .cusBtn{
      opacity:1;
    }
    &:before{
      // content:"row";

      background-color: #F5F5F5;
      border: 1px solid #DDDDDD;
      border-radius: 4px 0 4px 0;
      color: #9DA0A4;
      font-size: 12px;
      font-weight: bold;
      left: -1px;
      line-height: 2;
      padding: 3px 7px;
      position: absolute;
      top: -1px;
    }
    .cusBtn{
      opacity: 0.5;
      z-index: 10;

    }
    .toolBar{
      position: absolute;
      top:5px;
      width: 100%;

      display:flex;
      flex-direction:row;
      flex-wrap:nowrap;
      justify-content: flex-end;
      align-items:flex-start;
      align-content:stretch;
    }

  }

</style>

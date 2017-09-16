<template lang="html">
  <div>
    <ul style="width:200px">
      <treeCom :treeData="treeData"></treeCom>
    </ul>
  </div>
</template>

<script>
import treeCom from 'components/treeItem'
export default {
  components: {
    treeCom
  },
  data () {
    return {
      treeData: {
        title: 'root',
        child: [
          {
            title: 'firstTitle',
            child: [{
              title: 'firstItemTitle',
              child: []
            }]
          },
          {
            title: 'secondTitle',
            child: []
          }
        ]
      },
      dragEvent: {}
    }
  },
  watch: {
    // treeData (newV, oldV) {
    //   console.log(newV)
    // }
  },
  mounted () {
    this.log(111, 222)
  },
  methods: {

  }
}
</script>

<style lang="less">

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
</style>

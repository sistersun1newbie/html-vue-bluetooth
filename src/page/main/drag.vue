<template lang="html">
  <div>
    <button @dblclick="mousedown">test</button>

    <div @dragover="dragover"    @drop="drop" class="blockdiv"  style="" >

    </div>
    <div @dragover="dragover"    @drop="drop" class="blockdiv"  >
      <p id="qwe" @drag="ondrag" @dragstart="ondragstart" draggable="true"  >
        123  @dragend="ondragend"
      </p>
    </div>
    <div id="test"  class="blockdiv"  >

    </div>

  </div>
</template>

<script>
export default {
  data () {
    return{

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

  },
  methods:{
    mousedown () {
      console.log('dblclick')
    },
    ondrag (event) {
      this.log(event.target.parentNode === event.target.parentElement)
    },
    ondragstart (event) {
      this.log('===ondragstart', event)
      this.log(event.target.id)
      event.dataTransfer.setData('Text', event.target.id)
      this.log('test', event.dataTransfer.getData('Text', event.target.id))
    },
    ondragend (event) {
      this.log('===ondragend', event)
      event.preventDefault()
    },
    dragover (event) {
      this.log('===dragover', event)
      this.dragEvent = event
      event.preventDefault()
    },
    drop (event) {
      event.preventDefault()
      this.log('接受数据', event.dataTransfer.getData('Text'))
      this.log('===drop',event.dataTransfer.getData('Text'))
      event.target.appendChild(document.getElementById(event.dataTransfer.getData('Text')))
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
</style>

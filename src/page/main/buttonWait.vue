<template lang="html">
  <!-- <div> -->
    <!-- <el-button type="primary" @click="ajax('flag')" :loading="flag">加载中</el-button> -->
    <!-- <el-button type="primary" @click="ajax1('name')" :loading="stateFun('name')">加载中</el-button> -->
    <el-button type="primary" @click="ajax1(attr)" :loading="attr.flag">
      {{attr.info}}  <span v-if="$slots.default"><slot></slot></span>
    </el-button>
    <!-- <div>
      {{state['qw']}}
    </div> -->
  <!-- </div> -->
</template>
<script>
export default {
  data (){
     return {
      temp:"hhhh",
      attr:{
        info: this.info,
        flag: false
      }
     }
  },
  props:{
    info:{
      type:String,
      default:'default'
    }
  },
  created(){

  },
  methods:{
    ajax1(variable){
      // this.$set(this.state,variable,{flag:true,info:'加载中111'})
      this.log("1212121")
      this.attr={flag:true,info:'加载中111'}
      // new Promise((resolve,reject)=>{
      //   setTimeout(()=>{
      //     resolve(false)
      //   },1000)
      // }).then((data)=>{
      //   this.attr={flag:data,info:this.info}
      //     // this.$set(this.state,variable,{flag:data,info:'asd'})
      // })
      this.log("3333")
    },
    over(){
      this.log('over')
        this.attr={flag:false,info:this.info}
    }
  },
}
</script>

<style lang="css">

</style>

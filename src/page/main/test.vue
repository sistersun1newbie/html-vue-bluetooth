<!-- buttonWaitTest -->
<template lang="html">
  <but @click.native="ask" ref='but' info="a阿三的">121</but>
</template>

<script>
import but from "page/main/buttonWait"
export default {
  components:{
    but
  },
  data(){
    return {
      test:{
        info: 'default',
        flag: false
      }
    }
  },
  methods:{
    ask(){
      this.log('ask')
      new Promise((resolve,reject)=>{
        setTimeout(()=>{
          resolve(false)
        },1000)
      }).then((data)=>{
        this.$refs.but.over()
      })
    }
  }
}
</script>

<style lang="css">
</style>

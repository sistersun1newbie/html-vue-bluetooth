<!-- <template lang="html">
  <div>
    1
    {{nestInitObj.name}}
  </div>
  <component :is="nestInitObj.name" >
    <nest
      :nestInitObj="obj"
      v-for="obj in nestInitObj.childNode"
      v-if="nestInitObj.childNode.length>0&&obj.name">
    </nest>
  </component>
</template> -->

<script>

export default {
  components: {

  },
  name: 'nest',
  // render: function (createElement) {
  //
  //   return createElement('component', {
  //     style: {
  //       color: 'red',
  //       fontSize: '14px'
  //     }
  //   }, [
  //     '先写一些文字',
  //     createElement('h1', '一则头条'),
  //     createElement('span', '222'),
  //     createElement('button',
  //       {
  //         on: {
  //           click: () => {
  //             console.log(this.level)
  //             this.level++
  //           }
  //         }
  //       }, this.level)
  //   ])
  // },
  render: function (createElement) {
    let parent={
      props: {},
    },childNode=[],
    objArr=this.nestInitObj.childNode,
    pro=this.util.compsConfig(this.nestInitObj.name).attr||{}
    parent.props=pro
    if(objArr.length>0){
      for(let i=0;i<objArr.length;i++){
        // console.log(objArr[i])
        childNode.push(
          createElement('nest', {
            props: {
              nestInitObj: objArr[i],
            },
          })
        )
      }
    }else{
    }

    return createElement(this.nestInitObj.name,parent,childNode)
  },
  props: {
    nestInitObj: {
      type: Object,
      default: function () {
        return {
          name: '',
          id:this.util.getTime(),
          content:'',
          childNode:[],
        }
      }
    },
  },
  data () {
    return {
      // btnList:this.util.compsConfig(this.comps.name)||'',
    }
  },
  computed: {

  },
  mounted () {
    // console.log(this.nestInitObj)
  },
  methods: {
    delEmit(type){

    },
  }
}
</script>

<style lang="css">
</style>

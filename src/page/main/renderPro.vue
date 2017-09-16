<script>
export default {
  data () {
    return {
      level: 5
    }
  },
  mounted () {

  },
  methods: {

  },
  render: function (createElement) {
    return createElement('div', {
      style: {
        color: 'red',
        fontSize: '14px'
      }
    }, [
      '先写一些文字',
      createElement('h1', '一则头条'),
      createElement('span', '222'),
      createElement('button',
        {
          on: {
            click: () => {
              console.log(this.level)
              this.level++
            }
          }
        }, this.level)
    ])
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
div {
    p {
        color: blue;
    }
}
</style>

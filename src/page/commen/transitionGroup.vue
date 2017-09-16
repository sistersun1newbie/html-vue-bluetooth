<script>
export default {
  functional: true,
  render: function(createElement, context) {
    var data = {
      props: {
        name: context.props.name,

        moveClass:'flip-list-move',
        enterActiveClass:'animated tada',
        leaveActiveClass:'list-leave-active',
        tag:'div',
        appear:'appear'
      },
      style:context.props._css,


      on: {
        beforeEnter: function(el) {
          // ...
        },
        afterEnter: function(el) {
          // ...
        }
      }
    }
    console.log("context",context)
    return createElement('transition-group', data, context.children)
  },

  methods: {

  },
}
</script>

<style lang="css">
</style>

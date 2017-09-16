<template lang="html">
  <div>
    <video
      controls="controls" preload="preload" :height="height"
       width="100%'"
      :src="videoSrc">
        <p>
          浏览器不支持video
        </p>
    </video>
    <!-- <video
      controls="controls" preload="preload" height="500px"
       width="100%'"
      src="http://pan.592meiju.com/admin/link/7152221698667849/[www.592meiju.com]Game.of.Thrones.S07.E06.720p.Leaked.中英字幕-592美剧.mp4">
        <p>
          浏览器不支持video
        </p>
    </video> -->

    <img src='~assets/play.png' />
  </div>
</template>

<script>
export default {
  data() {
    return {
      height: document.documentElement.clientHeight,
      width:'100%',
      videoSrc:"http://pan.592meiju.com/admin/link/7152221698667849/[www.592meiju.com]Game.of.Thrones.S07.E06.720p.Leaked.中英字幕-592美剧.mp4"
    }
  },
  mounted(){

  },
  methods: {
    goto() {

    }
  }
}
</script>

<style lang="css">
</style>

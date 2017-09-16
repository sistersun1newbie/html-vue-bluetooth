<template lang="html">
<div class="body">
  <!-- hexagon -->
  <div class="hexagon">
    <div class="lb02" v-for="i in 2" style="display:inline-block">
    	<div>
    		<div>
    			<img src='~assets/cat.jpeg' />
    		</div>
    	</div>
    </div>
    <div style=" margin-top: -80px;    padding-left: 129px;">
      <div class="lb02" v-for="i in 2" style="display:inline-block;">
        <div>
          <div>
            <img src='~assets/cat.jpeg' />
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="publicBorder vertical" style="">
    <div class="publicBorder verticalChild" style="">
      1
    </div>
    <div class="publicBorder verticalChild" style="">
      1
    </div>
  </div>
  <div class="inputStyle">
    <input class="" type="text" />
  </div>
  <div class="selectStyle">
    <div class="select" style="" contenteditable="true" >
    </div>
  </div>


  <el-row :gutter="20">
    <el-col :span="5">
      {{numberT}}
    </el-col>
    <el-col :span="2">
      <el-button type="primary" @click="numberT+=20">up</el-button>
    </el-col>
    <el-col :span="2">
      <el-button type="primary" @click="numberT-=20">down</el-button>
    </el-col>
  </el-row>
</div>
</template>

<script>
var animatingNumber = function(options) {
 this.element = options.element;
 this.startNum = options.from;
 this.endNum = options.to;
 this.duration = options.duration || 2000;
 this.callback = options.callback;

 this.timer = null;
};

animatingNumber.prototype = {
 start: function() {
  var _this = this;
  _this.animate();
 },
 stop: function() {
  if(this.timer) {
   clearTimeout(this.timer);
   this.timer = null;
  }
 },
 animate: function() {
  var _this = this;
  var curNum = _this.startNum;
  var animateTime = 0;
  var range = _this.endNum - _this.startNum;
  var timerStep = Math.abs( Math.floor(_this.duration / range) );
  timerStep = timerStep > 20 ? timerStep : 20;
  var numStep = (range / _this.duration) * timerStep;

  _this.stop();

  (function animate() {
   _this.timer = setTimeout(function() {
    curNum = Math.ceil( curNum + numStep );
    if( (_this.endNum > _this.startNum && curNum >= _this.endNum) || (_this.endNum < _this.startNum && curNum <= _this.endNum) ) {
     curNum = _this.endNum;
    }
    _this.element = curNum;
    animateTime++;
    if(typeof this.callback == 'function') {
     this.callback(curNum);
    }
    animate();
    console.log(animateTime)
    if(curNum >= _this.endNum) {
     _this.stop();
    }
   }, timerStep);
  })();
 }
};

animatingNumber.create = function(options) {
 return new animatingNumber(options);
};
export default {
  data(){
    return{
      showFlag:false,
      numberT:0
    }
  },
  mounted(){

  },
  watch:{
    numberT:function(newV,oldV){
      console.log(oldV,newV)
      // setTimeout()
      // if(oldV)
      // setTimeout(()=>{this.numberT++;
      // console.log(this.numberT)},1000)
      // this.numberT=oldV
      animatingNumber.create({
        element: this.numberT,
        from: oldV,
        to: newV,
        duration: 2000
       }).start();
    }
  },
  methods:{
    plus(){

    }
  }
}
</script>

<style lang="less" scoped>
// public
.body > div{
  margin: 20px 0px
}
.publicBorder{
  border-width:1px;
  border-color:red;
  border-style:solid;
}
// 六边形
.hexagon{
  .lb02 {
  	width: 260px;
  	height: 300px;
  	margin: 0px;
  	-webkit-transform: rotate(60deg);
  	overflow: hidden;
  }
  .lb02 div,
  .lb02 img {
  	width: 100%;
  	height: 100%;
  	overflow: hidden;
  }

  .lb02> div {
  	-webkit-transform: rotate(-120deg);
  }

  .lb02> div> div {
  	-webkit-transform: rotate(60deg);
  }
}

//vertical
.vertical{
  width:300px;height:200px;line-height:200px;text-align:center;
  .verticalChild{
    width:80px;height:80px;display:inline-block;vertical-align:middle;
  }
}
.inputStyle{
  input{
    .inputObj;

  }
  display:inline-block;
  width:auto;
  // border-radius: 5px;
}
.buttonStyle{

}
.selectStyle{
  .select{
    .inputObj;
      min-width: 180px;
  }
  display:inline-block;
  width:auto;
}
.inputObj{
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 8px;
  padding-bottom: 8px;
  height: 34px;
  border: 1px solid rgb(169, 68, 66);
  width: 100%;
  border-radius: 5px;
  box-sizing: border-box;
  &:focus{
    outline-offset:2px;
    outline:-webkit-focus-ring-color auto 4px;
  }
}
</style>

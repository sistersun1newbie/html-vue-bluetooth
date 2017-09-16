<template>
  <div class="hello">
    <h1>{{ msg1 }}---{{ msg2 }}==={{msg1===msg2}}11</h1>
    <ul @click="eventProxy">
      <li>123</li>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
    <el-button type="primary" @click="esPromise()" >
      Promise
    </el-button>
    <el-row :gutter="20" >
      <el-col :span="5" >
        <el-input v-model="subKey" placeholder="请输入sub订阅键"></el-input>
      </el-col>
      <el-col :span="5" >
        <el-input v-model="subVal" placeholder="请输入sub订阅值"></el-input>
      </el-col>
      <el-col :span="5" >
        <el-input v-model="pubKey" placeholder="请输入pub发布键"></el-input>
      </el-col>
      <el-col :span="5" >
        <el-input v-model="pubVal" placeholder="请输入pub发布值"></el-input>
      </el-col>
      <el-col :span="2" >
        <el-button type="primary" @click="pubsub().subscribe(subKey,caalback)" >
          订阅
        </el-button>
      </el-col>
      <el-col :span="2" >
        <el-button type="primary" @click="pubsub().publish(pubKey,pubVal)" >
          发布
        </el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20" >
      <el-col :span="24" >
        <div style="border:1px solid red;width:100%;min-height:100px;box-sizing:border-box">

        </div>
      </el-col>
    </el-row>
    <el-row :gutter="20" >
      <el-col :span="5" >
        <el-input v-model="recursionVal" placeholder="请输入"></el-input>
      </el-col>
      <el-col :span="5" >
        <el-input v-model="recursionValCom" placeholder="recursionValCom"></el-input>
      </el-col>
      <el-col :span="2" >
        <el-button type="primary" @click="recursionValCom=recursion(recursionVal)" >
          递归
        </el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20" >
      <el-col :span="5" >
        <el-input v-model="testRecursionVal" placeholder="请输入"></el-input>
      </el-col>
      <el-col :span="5" >
        <el-input v-model="tempAmound" placeholder="tempAmound"></el-input>
      </el-col>
      <el-col :span="2" >
        <el-button type="primary" @click="testRecursion(testRecursionVal)" >
          start
        </el-button>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg1: Symbol.for('foo1'),
      msg2: Symbol.for('foo1'),
      msg3: Symbol('foo'),
      subKey:'',
      subVal:'',
      pubKey:'',
      pubVal:'',
      q : {},
      topics : {},
      subUid : -1,
      recursionVal:1,
      recursionValCom:0,
      testRecursionVal:0,
      // testRecursionValCom:0,
      tempAmound:0,
      tempHeadAmound:0,
      tempTailAmound:0
      // pubsub:(function(){
      //
      //     //取消订阅就不写了，遍历topics，然后通过保存前面返回token，删除指定元素
      // })()
    }
  },
  mounted () {
    // let s1 = Symbol('foo')
    // this.getsetTest()
    // this.initSymbol()

    // this.recursion()

  },
  methods: {
    initSymbol () {
      let attr = [Symbol.for('foo1'), Symbol('foo2')]
      let obj = {
        [attr[0]] () {
          console.log(attr[0])
        },
        [attr[1]] () {
          console.log(attr[1])
        }
      }
      console.log(attr[0])
      obj[attr[0]]()
      obj[attr[1]]()
    },
    eventProxy (event) {
      let target = event.target
      if (target.nodeName.toLowerCase() === 'li') {
        this.log(target.innerHTML)
        // for (let i in target) {
        //   this.log(i, target[i])
        // }
      }
    },
    esPromise () {
      function timeout (ms) {
        return new Promise((resolve, reject) => {
          setTimeout(resolve, ms, 'done')
        })
      }
      timeout(1000).then((value) => {
        console.log(value)
      })
    },
    esProxy () {
      Object.defineProperties()
    },
    getsetTest () {
      function Person () {
        let age = new Date().getFullYear() - 18
        Object.defineProperty(this, 'age', {
          get: function () {
            console.log('执行get')
            return new Date().getFullYear() - age
          },
          set: function (value) {
            console.log('执行set')
            age = value
          }
        })
      }
      let p = new Person()
      p.age = 1994
      console.log(p.age)
      console.log('==========')
      let proxy = new Proxy(p, {
        get: function (target, property, receiver) {
          console.log(target, receiver)
          return target.age + 5
        }
      })
      console.log(proxy.age)
      proxy.a = '123'
      console.log(proxy.a)

      const target = Object.defineProperties({}, {
        foo: {
          value: 123,
          writable: false,
          configurable: false
        }
      })
      this.log('111', target.foo)
    },
    pubsub () {
      //发布消息
      this.q.publish = (topic, args)=> {
        console.log("publish",this.topics)
        if(!this.topics[topic]) {return;}
        var subs = this.topics[topic],
            len = subs.length;
            console.log(this.topics[topic],len)
        while(len--) {
            console.log(subs,len)
            subs[len].func(topic, args);
        }
        return this.q;
      };
      //订阅事件
      this.q.subscribe = (topic, func)=> {
            this.topics[topic] =   this.topics[topic] ?   this.topics[topic] : [];
             var token = (++this.subUid).toString();
             this.topics[topic].push({
               token : token,
               func : func
           });
          console.log(token,this.topics[topic])

          return token;
      };
      return this.q;
    },
    caalback(a,b){
      console.log(a,b)
    },
    recursion(param){
      if(param===1||param===2){
        return 1
      }else{
        return this.recursion(param-1)+this.recursion(param-2)
      }
    },
    testRecursion(param){

      this.tempAmound=Math.floor(param/2 )
      this.tempHeadAmound=this.tempAmound
      this.tempTailAmound=this.tempAmound
      console.log(this.tempAmound)
      this.emitFun()
    },
    emitFun(){
      console.log(this.tempHeadAmound,this.tempTailAmound)
      if(!(this.tempHeadAmound>=4||this.tempTailAmound>=2)){
        return
      }
      if(this.tempHeadAmound>=4){
        this.tempHeadAmound-=4
        this.tempAmound++
        this.tempHeadAmound++
        this.tempTailAmound++
      }
      if(this.tempTailAmound>=2){
        this.tempTailAmound-=2
        this.tempAmound++
        this.tempHeadAmound++
        this.tempTailAmound++
      }
      this.emitFun()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="">
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

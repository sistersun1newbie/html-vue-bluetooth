<template lang="html">
  <div>
    <el-row :gutter="20">
      <el-col :span="6">
        <el-button type="primary" @click="goto()">go</el-button>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="takePhoto()">takePhoto</el-button>
      </el-col>
      <el-col :span="6">
        <el-button type="primary" @click="isInitialized()">isInitialized</el-button>
      </el-col>
    </el-row>
    <el-row :gutter="20">
        <el-button type="primary" @click="initialize()">init</el-button>
        <el-button type="primary" @click="enable()">打开蓝牙</el-button>
        <el-button type="primary" @click="disable()">关闭蓝牙</el-button>
        <el-button type="primary" @click="getAdapterInfo()">获取适配信息</el-button>
    </el-row>

    <el-row :gutter="20">
      <el-button type="primary" @click="startScan()">开始搜索</el-button>
      <el-button type="primary" @click="stopScan()">关闭搜索</el-button>
      <el-button type="primary" @click="close()">关闭connect</el-button>
    </el-row>

    <el-row :gutter="20">
      <el-button type="primary" @click="discover()">discover</el-button>
      <el-button type="primary" @click="isScanning()">isScanning</el-button>
      <el-button type="primary" @click="isBonded()">isBonded</el-button>
    </el-row>
    <el-row :gutter="20">
      <el-button type="primary" @click="isConnected()">isConnected</el-button>
      <el-button type="primary" @click="isDiscovered()">isDiscovered</el-button>
      <!-- <el-button type="primary" @click="isBonded()">isBonded</el-button> -->
    </el-row>
    <el-row :gutter="20" >
      <el-col :span="24" >
        <div style="border-color: red;border-style: solid;  border-width: 1px;">
          绑定地址：{{address}}
        </div>

      </el-col>
    </el-row>
    <el-row :gutter="20" >
      <el-col :span="24" >
        <div style="border-color: red;border-style: solid;  border-width: 1px;">
          <ul   v-if="driverList.length!==0">
            <!--@click="connect(val.address,index)"  'F0:24:75:C5:5E:AF' '14:33E:BF:5B:78:A2'-->
            <li v-for="(val,index) in driverList" @click="connect(val.address,index)">
              {{val}}~~~{{val.address}}
            </li>
          </ul>
          <span v-else>no data</span>
        </div>

      </el-col>
    </el-row>
    <div style="border-color: yellow;border-style: solid;  border-width: 1px;">
      is TEST {{yellowTest}}
    </div>
    <div style="border-color: black;border-style: solid;  border-width: 1px;">
    {{connectArg}}=={{connectMsg}}
    </div>
    {{readObj}}

    
  </div>

</template>

<script>
export default {
  data() {
    return {
      driverList:[],
      connectMsg:'',
      connectArg:'',
      address:'',
      yellowTest:'',
      readObj:[]
    }
  },
  mounted(){
    document.addEventListener('deviceready',  ()=> {
        // new Promise(function (resolve) {
        //     bluetoothle.initialize(resolve, { request: true, statusReceiver: false });
        // }).then(initializeSuccess, handleError);
          this.isInitialized()
    });
  let st='hahahahahahehehhe'
  this.yellowTest =  window.bluetoothle.stringToBytes(st)
  this.yellowTest = bluetoothle.bytesToEncodedString(this.yellowTest);
  setTimeout(()=>{
    this.yellowTest =bluetoothle.encodedStringToBytes(this.yellowTest)
    this.yellowTest =  bluetoothle.bytesToString(this.yellowTest)
  },2000)
  // =  window.bluetoothle.bytesToEncodedString(window.bluetoothle.stringToBytes(msg.value)) ;
    // setTimeout(()=>{
    //     this.isInitialized()
    // },500)
  },
  methods: {
    buttonFlag(){

    },
    goto() {
      this.$router.push({
        name: 'flex'
      })
    },
    enable(){
      let self = this
      window.bluetoothle.enable((msg)=>{
        this.connectMsg=msg
        self.log('enable=msg',msg)
      },(err)=>{
        self.log('enable=err',err)
      })||''
    },
    disable(){
      window.bluetoothle.disable((msg)=>{
        this.connectMsg=msg
        self.log('disable=msg',msg)
      },(err)=>{
        self.log('disable=err',err)
      })||''
    },
    initialize(){
      window.bluetoothle.initialize((msg)=>{
        this.log('initialize=msg',msg)
      },{
        request: true,
        statusReceiver: false,
        restoreKey: 'bluetoothleplugin'
      })||''
    },
    getAdapterInfo (){
      window.bluetoothle.getAdapterInfo((msg)=>{
        this.connectMsg=msg
        this.log('getAdapterInfo=arguments',arguments)
        this.log('getAdapterInfo',msg)
      })
    },
    startScan(){
      window.bluetoothle.startScan ((result)=>{
        this.log('startScan=msg',result)
        if(result.status==='scanStarted'){
          this.driverList=[]
          return ''
        }else if (result.status === "scanResult") {
          if (!this.driverList.some(function (device) {
              return device.address === result.address;
          })) {
              // log('FOUND DEVICE:');
              // log(result);
              this.driverList.push(result);
              // addDevice(result.name, result.address);
          }
      }
      },(err)=>{
        this.log('startScan=err',err)
      })
    },
    stopScan (){
      window.bluetoothle.stopScan((msg)=>{
        this.driverList=[]
        this.log('stopScan=msg',msg)
      },(err)=>{
        this.log('stopScan=err',err)
      })
    },
    connect (param){
      this.address=param
      this.connectArg=param
      this.connectMsg='....connect...'
      window.bluetoothle.connect((msg)=>{
        this.address=param
        this.connectMsg=msg
        this.log('connect=msg',msg)

        this.discover(param)
      },(err)=>{
        this.connectMsg=err
        this.log('connect=err',err)
      }, {address:param})

      // if (cordova.platformId === "windows") {
      //   getDeviceServices(address);
      // }else {
      //   this.stopScan();
      //   new Promise(function (resolve, reject) {
      //     bluetoothle.connect(resolve, reject, { address: param });
      //   }).then((result)=>{
      //     this.address=param
      //
      //     this.log('connect=result',result)
      //     if (result.status === "connected") {
      //         // this.getDeviceServices(result.address);
      //           this.discover(result.address)
      //           this.yellowTest='2222'
      //     }
      //     else if (result.status === "disconnected") {
      //         this.connectMsg=result
      //         this.yellowTest='3333'
      //         this.connectMsg='....connect...'
      //     }
      //   }, (err)=>{
      //     this.connectMsg=err
      //       this.yellowTest='5555'
      //     this.log('connect=err',err)
      //   });
      // }
    },
    getDeviceServices(address){
      let platform = window.cordova.platformId;
      if (platform === "android") {
        this.yellowTest='getDeviceServices...android'
        // new Promise(function (resolve, reject) {
        //     bluetoothle.discover(resolve, reject,
        //         { address: address });
        // }).then(discoverSuccess, handleError);
        this.discover(address)
      }
      else if (platform === "windows") {
        // new Promise(function (resolve, reject) {
        //     bluetoothle.services(resolve, reject,
        //         { address: address });
        // }).then(servicesSuccess, handleError);
      }
      else {

      }
    },
    close (params){
      window.bluetoothle.close( (msg)=>{
      this.connectMsg=msg
        this.log('close=msg',msg)
      } , (err)=>{
        this.connectMsg=err
        this.log('close=err',err)
      }, {address:this.address})
    },
    discover(result){
      this.yellowTest='discover...'+this.address
      window.bluetoothle.discover((msg)=>{
      // this.connectMsg=JSON.stringify(JSON.parse(msg),null,4)
        this.log('discover=msg',msg)
          // this.yellowTest=msg.services[0]
          this.yellowTest='执行read.'
          msg.services.forEach((obj)=>{
            obj.characteristics.forEach((char)=>{
              // this.readObj.push({address:this.address,serId:obj.uuid,charId:char.uuid})
              this.read(this.address,obj.uuid,char.uuid)
            })
          })

      } , (err)=>{
        this.connectMsg=err
        this.yellowTest='discover...err'
        this.log('discover=err',err)
      }, {
        "address": this.address,
        "clearCache": true
      });

      // if (result.status === "discovered") {
      //   // Create a chain of read promises so we don't try to read a property until we've finished
      //   // reading the previous property.
      //   let readSequence = result.services.reduce(function (sequence, service) {
      //     return sequence.then(function () {
      //         return addService(result.address, service.uuid, service.characteristics);
      //     });
      //   }, Promise.resolve());
      //   readSequence.then(function () {
      //     new Promise(function (resolve, reject) {
      //         bluetoothle.disconnect(resolve, reject,
      //             { address: result.address });
      //     }).then(connectSuccess, handleError);
      //   });
      // }
    },
    read(address,service,characteristic){
      // this.log('para',address)
      // this.log('para',service)
      // this.log('para',characteristic)
      // this.yellowTest=address
      this.yellowTest='执行read....'
      window.bluetoothle.read((msg)=>{
        this.yellowTest=msg
        if(msg.value){
          // msg.value =  window.bluetoothle.bytesToEncodedString(window.bluetoothle.stringToBytes(msg.value)) ;
          // msg.value =  window.bluetoothle.stringToBytes(msg.value)
          msg.value =window.bluetoothle.encodedStringToBytes(msg.value)
          msg.value =  bluetoothle.bytesToString(msg.value)
        }
        this.readObj.push(msg)
        this.log('read=msg',msg)
        } , (err)=>{

        this.log('read=err',err)
      }, {
        "address": address,
        "service":service,
        "characteristic": characteristic
      })
    },
    isInitialized (){
      bluetoothle.isInitialized((isInitialized)=>{
        this.log("isInitialized",isInitialized.isInitialized)
        if(!isInitialized.isInitialized){
          this.initialize()
        }
      })
    },
    isEnabled (){
      window.bluetoothle.isEnabled((isEnabled)=>{
        if(!isEnabled.isEnabled){
          this.enable()
        }
      })
    },
    isScanning (){
      window.bluetoothle.isScanning((isScanning)=>{
        this.log('isScanning',isScanning)
        this.yellowTest=isScanning
        if(!isScanning.isScanning){
          // this.enable()
        }
      })
    },
    isBonded(){
      window.bluetoothle.isBonded((msg)=>{
      this.yellowTest=msg
        this.log('isBonded=msg',msg)
      } , (err)=>{
        this.yellowTest=err
        this.log('isBonded=err',err)
      }, {
        "address": this.address
      });
    },
    isConnected(){
      window.bluetoothle.isConnected((msg)=>{
      this.yellowTest=msg
        this.log('isConnected=msg',msg)
      } , (err)=>{
        this.yellowTest=err
        this.log('isConnected=err',err)
      }, {
        "address": this.address
      });

    },
    isDiscovered(){

      window.bluetoothle.isDiscovered((msg)=>{
      this.yellowTest=msg
        this.log('isDiscovered=msg',msg)
      } , (err)=>{
        this.yellowTest=err
        this.log('isDiscovered=err',err)
      }, {
        "address": this.address
      });
    },
    takePhoto() {
        //拍照
        //navigator.camera就是上面我们所说的clobbers定义的东西，用来调用插件中的方法的
        //getPicture就是插件中调用摄像头拍照的方法
        console.log("takePhoto")
        navigator.camera.getPicture(takeSuccess, takeFail, {
            destinationType : Camera.DestinationType.FILE_URI
        });

        //拍照成功后回调
        function takeSuccess(imageURI) {
            console.log('success' + imageURI);
        }

        //失败后回调
        function takeFail(message) {
          console.log('拍照失败，原因：' + message);
            // navigator.notification.alert("拍照失败，原因：" + message);
        }
    },
  }
}
</script>

<style lang="less" scoped>

</style>

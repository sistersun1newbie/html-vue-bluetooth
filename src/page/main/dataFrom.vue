<template lang="html" >
  <div>
    <div class="titlebar">

    </div>
    <el-row :gutter="10">
      <el-col :span="4">
        <el-button  type="primary" @click.native="showDilog({type:'addTable'})">主要按钮</el-button>
        <div v-for=" (tableData,index , key) in tableList">
          {{key}} {{tableData}}  {{index}}
          <p>
            {{tableData.tableTitle}}
          </p>
        </div>
        <!-- <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2"><i class="el-icon-menu"></i>导航二</el-menu-item>
      <el-menu-item index="3"><i class="el-icon-setting"></i>导航三</el-menu-item>
    </el-menu> -->
      </el-col>
      <el-col :span="20">
        <el-row :span="24">

          <el-button type="primary" icon="plus" @click.native="showDilog()"></el-button>

        </el-row>
        <el-row :span="24">
        <div id="asd">


        <el-table
            v-bind:data="tableData"
            height="550"
            stripe
            style="width: 100%"
            border
            @selection-change="handleSelectionChange"
            >
            <el-table-column
              type="selection"
              min-width="55">
            </el-table-column>
            <el-table-column label="序号"
                  fixed
                   align="center"
                   min-width="100">
              <template scope="scope">
                  <span style="margin-left: 10px">{{ scope.$index+1 }}</span>
              </template>
          </el-table-column>
          <!-- :prop="key"-->
            <el-table-column v-for="(val,key) in colTitleObj" :key="key"
              align="center"
             min-width="120"
              style="background-color:red"
              :label="val"
              width="180">
              <template style="background-color:red" scope="scope">
                <div>
                  {{typeof  parseInt(scope.row[key]) }}
                      <span style="margin-left: 10px">{{ scope.row[key] }}</span>
                </div>

              </template>
            </el-table-column>
            <el-table-column label="操作"
                             align="center"

                             min-width="120">
                <template scope="scope" >
                  <el-button size="small"
                             @click="showDilog({type:'detail',data:scope})"
                             type="primary"
                             icon="edit">编辑
                  </el-button>
                  <el-button size="small"
                             @click=""
                             type="danger"
                             icon="delete">删除
                  </el-button>
                </template>
            </el-table-column>
          </el-table>
          </div>
          <table border="1">
            <thead>
              <tr>
                <th>Month</th>
                <th>Savings</th>
                <th>Savings</th>
              </tr>
            </thead>

            <tfoot>
              <tr>
                <td>Sum</td>
                <td>$180</td>
              </tr>
            </tfoot>

            <tbody>
              <tr>
                <td>January</td>
                <td>$100</td>
              </tr>
              <tr>
                <td>February</td>
                <td>$80</td>
              </tr>
            </tbody>
          </table>
          </el-row>
      </el-col>
    </el-row>
    <mydialog v-bind:dialogVisible="dialogVisible" :formData="colObj" :formText="colDataObj"
    @dialogaddColHandleClose='dialogaddColHandleClose()' @commit='dialogaddColHandleConfirm()'
     />

    </div>
</template>

<script>
import mydialog from 'components/myDialog';
// 添加列头对象
let colObj = {
  colName: '',
  colType: '',
  colKey: ''
}
// 现有数据描述
let colDataObj = [{
    labelName: 'name',
    placeholderName: '请输入名称',
    attr: 'colName'
  },
  {
    labelName: 'key',
    placeholderName: '请输入key',
    attr: 'colKey'
  },
  {
    labelName: '类型',
    placeholderName: '请输入类型',
    attr: 'colType'
  }
]
// 添加列头对象
let tableName = {
  tableName: '',
}
// 现有数据描述
let tableNameObj = [{
  labelName: '表名',
  placeholderName: '请输入表名',
  attr: 'tableName'
}]
// 现有列头对象
let colTitleObj = {
  date: '剩余数量',
  address: '地址',
  name: '姓名',
}
let commitObj = {
  type: '',
  param: {}
}
export default {
  components: {
    mydialog
  },
  data () {
    return {
      test12:'',
      commitObj: {
        type: '',
        param: {}
      },
      dialogVisible: false,
      colDataObj: [...colDataObj],
      colObj: {
        ...colObj
      },
      tableTitle: '', //表格标题
      tableList: [], //表格列表
      colTitleObj: {
        ...colTitleObj
      },
      multipleSelection: [],
      tableData: [{
        date: '80',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '20',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '180',
        name: '刘诗铸',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '1',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  mounted() {
    let target =  document.getElementById('asd')
    console.log(this.$route.params)
    // console.log(target)
  },
  methods: {
    showDilog({
      type,
      data
    } = {
      type: null,
      data: null
    }) {
      if (type === 'detail') {
        // this.colObj=
        // console.log(data)
        // console.log(this.colTitleObj)
        // console.log(data)
        this.colDataObj = [] //清空内容
        this.colObj = {}
        for (let attr in this.colTitleObj) {
          this.colObj[attr] = data.row[attr] || '';
          // console.log(attr+"====",data[attr])
          let temp = {
            labelName: '',
            placeholderName: '',
            attr: ''
          }
          temp.labelName = this.colTitleObj[attr]
          temp.attr = attr
          // console.log(  temp.labelName)
          // console.log( temp.attr)
          this.colDataObj.push(temp)
        }
        this.commitObj.type = 'updateData'
        this.commitObj.param = data
        // console.log(data)
      } else if (type === 'addTable') {
        this.colDataObj = [...tableNameObj] //清空内容
        this.colObj = { ...tableName
        }
        this.commitObj.type = 'addTable'
      } else if (type === null) {
        this.colDataObj = [...colDataObj] //清空内容
        this.colObj = { ...colObj
        }
        this.commitObj.type = 'addCol'
      }
      this.dialogVisible = true
    },
    dialogaddColHandleClose() {
      this.dialogVisible = false
      this.colObj = {
        ...colObj
      }
      this.commitObj = { ...commitObj
      }
    },
    dialogaddColHandleConfirm({
      type
    } = {
      type: null
    }) {
      if (this.commitObj.type === 'updateData') {
        this.tableData[this.commitObj.param.$index] = this.colObj
        // console.log("scope.index",this.commitObj.param.$index)
        // console.log("this.colObj",this.colObj)
        // this.tableData.push({
        //   date: '2016-05-02',
        //   name: '21231231',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // })
      } else if (this.commitObj.type === 'addCol') {
        this.colTitleObj[this.colObj.colKey] = this.colObj.colName
      }
      // 清空
      this.colObj = {
        ...colObj
      }
      console.log(this.colObj)
      console.log('colObj', colObj)
      this.dialogVisible = false
      // this.dialogaddColHandleClose()
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    }
  }
}
</script>

<style lang="less">
.titlebar {
    width: 100%;
    background-color: red;
    height: 50px;
}

.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

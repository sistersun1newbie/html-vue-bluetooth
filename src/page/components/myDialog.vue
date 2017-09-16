<template lang="html">
  <el-dialog
    title="表格名称"
    :visible.sync="visible"
    size="tiny"
    :before-close="dialogaddColHandleClose"
    >

    <el-form label-position="top" label-width="80px" :model="formData">
      <el-form-item :label="obj.labelName" v-for="(obj,index , key) in formText" :key="key">

        <el-input
          size="large"
          :placeholder="obj.placeholderName"
          v-model="formData[obj.attr]"
          >

        </el-input>
      </el-form-item>


    </el-form>


    <!-- <div v-for="(obj,index , key) in formData">
        {{key}}=== {{obj}} === {{index}}
        <p>
          =-=-=-=--
        </p>
        <h1>{{obj.labelName}}</h1>
    </div> -->

    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogaddColHandleClose">取 消</el-button>
      <el-button type="primary" @click="commit()">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  props: {
    dialogVisible: {
      type: Boolean,
      default: function () {
        return {
          message: false
        }
      }
    },
    formText: {
      type: Array,
      default: function () {
        return [{
          labelName: '123123',
          placeholderName: 'ohname',
          attr: 'colName'
        }]
      }
    },
    formData: {
      type: Object,
      default: function () {
        return {
          colName: ''
        }
      }
    }
  },
  data () {
    return {
      //  visible:true

    }
  },
  computed: {
    visible: function () {
      return this.dialogVisible
    }
  },
  methods: {
    dialogaddColHandleClose () {
      this.$emit('dialogaddColHandleClose')
    },
    commit () {
      this.$emit('commit')
    }
  }
}
</script>
<style lang="css" scoped>

</style>

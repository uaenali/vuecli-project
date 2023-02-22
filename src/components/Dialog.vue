<template>
  <div>
    <!-- :before-close 仅当用户通过点击关闭图标或遮罩关闭 Dialog 时起效 -->
    <el-dialog width="75%" :before-close="handleClose">
      <!-- 表单 -->
      <el-form ref="tableForm" :model="tableFormData" label-width="80px">
        <el-form-item label="活动名称">
          <el-input v-model="tableFormData.name"></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select v-model="tableFormData.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="活动时间">
          <el-col :span="11">
            <el-date-picker type="date" placeholder="选择日期" v-model="tableFormData.date1" style="width: 100%;"></el-date-picker>
          </el-col>
          <el-col class="line" :span="2">-</el-col>
          <el-col :span="11">
            <el-time-picker placeholder="选择时间" v-model="tableFormData.date2" style="width: 100%;"></el-time-picker>
          </el-col>
        </el-form-item>
        <el-form-item>
          <el-button
            v-if="addBtn"
            type="primary"
            size="mini"
            @click="handleSubmit('form')"
          >
            提交
          </el-button>
          <el-button
            v-else
            type="primary"
            size="mini"
            @click="handleUpdate('form')"
          >
            修改
          </el-button>
        </el-form-item>
      </el-form>
          
    </el-dialog>
  </div>
</template>
<script>
export default {
  // props:['open','editData'],// 父组件传过来的数据
  props:['editData'],// 父组件传过来的数据
  data() {
    return {
      addBtn:true,
      dialogVisible: false,
      // dialogVisible: this.open,
      tableFormData: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        type: [],
      } 
    }
  },
  watch:{
      // open(val){
      //     this.dialogVisible = val;
      // },
      // 修改（主要传递的是editData函数————val）
      editData(val){
          // this.editInfoFlag = JSON.parse(JSON.stringify(val));
          // this.editDataInfo(); // 调用方法中的修改
          this.form = JSON.parse(JSON.stringify(val)); // 表单的数据
      }
    },
  methods: {
    // 修改
    // editDataInfo(){
    //     this.accountForm = this.editInfoFlag;
    // },
    // 提交
    handleSubmit(){
      console.log('submit!');
      // this.$refs["accountForm"].validate((valid) => {
      //   if (valid) {
      //     addAPI(this.accountForm).then((res) => {
      //       if (res.code =='200') {
      //         this.$notify({
      //             code: "提示",
      //             message: "新增成功",
      //             type: "success",
      //         });
      //         this.dialogVisible = false;
      //         this.$emit("tabData", this.accountForm); // ******************************** tabData为自定义事件 传递form
      //       }
      //     });
      //   } else {
      //     console.log("error submit!!");
      //     return false;
      //   }
      // });
    },
    
    // 修改
    handleUpdate(){
      // this.$refs["accountForm"].validate((valid) => {
      //     if (valid) {
      //         updateAPI(this.accountForm).then((res) => {
      //             if (res.code == '200') {
      //                 this.$notify({
      //                     code: "提示",
      //                     message: "修改成功",
      //                     type: "success",
      //                 });
      //             }
      //         });
      //         this.$emit("tabData", this.accountForm);
      //     } else {
      //         console.log("error submit!!");
      //         return false;
      //     }
      // });
    },
    handleClose(){
      this.dialogVisible = false; // 弹窗关闭
      this.$emit("maintainClose",); // 自定义事件
      console.log('调用maintainClose');
        // this.handleResetForm();
    },
  }
}
</script>
<style lang="">
  
</style>
<template>
  <div>
    <span>list page父组件</span>
    <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        fixed
        prop="date"
        label="日期"
        width="150">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="120">
      </el-table-column>
      <el-table-column
        prop="province"
        label="省份"
        width="120">
      </el-table-column>
      <el-table-column
        prop="city"
        label="市区"
        width="120">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width="300">
      </el-table-column>
      <el-table-column
        prop="zip"
        label="邮编"
        width="120">
      </el-table-column>
      <el-table-column
        fixed="right"
        label="操作"
      >
        <template slot-scope="scope">
          <el-button @click="handleAdd()" type="text" size="small">新增</el-button>
          <el-button type="text" size="small" @click="editRow(scope.row)">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!-- editJSon要传的数据 -->
    <!-- 引入组件弹窗 -->
    <Dialog
      ref="dialog"
      :visible.sync="dialogVisible"
			:editData="editJSon"
			@dialogClose="dialogClose"
    />

  </div>
</template>
<script>
import Dialog from '../../../components/Dialog.vue'
export default {
  components: { Dialog },
  data() {
    return {
      dialogVisible: false,
      editJSon: {},
      tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1518 弄',
          zip: 200333
        }, {
          date: '2016-05-04',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1517 弄',
          zip: 200333
        }, {
          date: '2016-05-01',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1519 弄',
          zip: 200333
        }, {
          date: '2016-05-03',
          name: '王小虎',
          province: '上海',
          city: '普陀区',
          address: '上海市普陀区金沙江路 1516 弄',
          zip: 200333
        }]
    }
  },
  methods: {
    handleAdd() {
      this.dialogVisible = true;
      console.log('add');
    },
    // 弹框关闭
    dialogClose(){
      this.dialogVisible = false;
      this.editJSon = {};
    },
    
    editRow(e)  {
      console.log('edit');
      this.editJSon = e;
      this.dialogVisible = true
      this.$refs['dialog'].addBtn = false;//新增按钮关闭 打开修改按钮
    },
    
    // 弹窗关闭并请求查询
    // tabData(val) {
    //   this.dialogVisible = false;
    //   // this.$refs['dialog2'].handleResetForm();
    //   // this.handleQuery();
    // },
  }
}
</script>
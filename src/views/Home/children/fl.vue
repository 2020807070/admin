<template>
  <el-main>
    <el-button type="primary" @click="dialogFormVisible = true">添加分类</el-button>
    <!-- <el-table :data="tableData" style="width: 100%">
              <el-table-column label="icon" prop="icon">
                <template slot-scope="scope">
                <img src="../../../../static/images/img.png" alt="">
              </template>
              </el-table-column>
              <el-table-column prop="name" label="名称" width="120">
              </el-table-column>
              <el-table-column prop="classification" label="描述" width="120">
              </el-table-column>
              <el-table-column fixed="right" label="操作" width="280">
                <template slot-scope="scope">
                  <el-button type="primary">添加子类</el-button>
                  <el-button type="warning">修改</el-button>
                  <el-button type="danger" @click.native.prevent="deleteRow(scope.$index,tableData)">移除</el-button>
                </template>
              </el-table-column>
            </el-table>  -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180">
      </el-table-column>
      <el-table-column prop="name" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址">
      </el-table-column>
    </el-table>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="分类名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="选择父级" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择父级">
            <el-option label="小吃" value="xc"></el-option>
            <el-option label="地方菜" value="dfc"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="分类描述" :label-width="formLabelWidth">
          <el-input type="textarea" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" v-model="form.classification">
          </el-input>
        </el-form-item>
        <el-form-item label="上传图标" :label-width="formLabelWidth">
          <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="form.imageUrl" :src="form.imageUrl" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>
    <el-pagination background layout="prev, pager, next" :total="50">
    </el-pagination>
  </el-main>
</template>

<script>

export default {
  data() {
    return {
      dialogFormVisible: false,
      form: {
        imageUrl: '',
        name: '',
        icon: '123',
        classification: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px',
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]
    }
  },
  methods: {
    add() {
      this.$fetch.post('http://localhost:9000/add', this.form).then(res => {
        console.log(res)
      })
      this.dialogFormVisible = false;//隐藏
    },
    handleAvatarSuccess(res, file) {
      this.form.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
}
</script>


<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
}

.avatar {
  width: 100px;
  height: 100px;
  display: block;
}
</style>
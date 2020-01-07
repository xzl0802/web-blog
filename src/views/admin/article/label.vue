<template>
  <div>
    <a-row class="search_content">
      <a-col :span="18"></a-col>
      <a-col :span="6" class="rightBtn">
        <a-button type="primary" @click="tabQuery">查询</a-button>
        <a-button type="primary" @click="labelAdd">新增</a-button>
        <a-button type="primary" @click="labelEdit">编辑</a-button>
        <a-button type="danger">删除</a-button>
      </a-col>
    </a-row>

    <a-table
      :columns="columns"
      :dataSource="data"
      :pagination="pagination"
      :loading="loading"
      @change="handleTableChange"
      bordered
    >
      <!-- <template slot="name" slot-scope="name">
      {{name.first}} {{name.last}}
      </template>-->
    </a-table>

    <a-modal
      :title="modalTitle"
      :visible="visible"
      okText="确定"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >
      <a-form :form="addForm">
        <a-form-item label="标签名称" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-input v-decorator="['name', { rules: [{ required: true, message: '请输入标签名称！' }] }]" />
        </a-form-item>
        <a-form-item label="描述" :label-col="{ span: 5 }" :wrapper-col="{ span: 12 }">
          <a-textarea placeholder="标签描述" :rows="4" v-decorator="['desc']" />
        </a-form-item>
      </a-form>
    </a-modal>
  </div>
</template>

<script>
import { getAllLabel, addLabel } from "@/api/admin";
export default {
  data() {
    return {
      data: [],
      columns: [
        {
          title: "序号",
          dataIndex: "id",

          align: "center"
        },
        {
          title: "标签名称",
          dataIndex: "name",
          align: "center"
        },
        {
          title: "描述",
          dataIndex: "description",

          align: "center"
        },
        {
          title: "创建者",
          dataIndex: "createdUser",

          align: "center"
        },
        {
          title: "创建时间",
          dataIndex: "createdTime",
          align: "center"
        },
        {
          title: "修改者",
          dataIndex: "updatedUser",
          align: "center"
        },
        {
          title: "修改事件",
          dataIndex: "updatedTime",
          align: "center"
        }
      ],
      pagination: {},
      loading: false,
      page: 1,
      limit: 10,
      modalTitle: "新增标签",
      visible: false,
      confirmLoading: false,
      labelId:null
    };
  },
  beforeCreate() {
    this.addForm = this.$form.createForm(this, { name: "form_in_modal" });
  },
  methods: {
    handleTableChange(pagination, filters, sorter) {
      //处理表格change事件
      const pager = { ...this.pagination };
      pager.current = pagination.current;
      this.pagination = pager;
      this.limit = pagination.pageSize;
      this.page = pagination.current;
      this.fetchData();
    },
    fetchData() {
      //获取数据
      this.loading = true;
      let params = {};
      params.page = this.page;
      params.limit = this.limit;
      getAllLabel(params).then(res => {
        const pagination = { ...this.pagination };
        pagination.total = res.data.total;
        this.loading = false;
        this.data = res.data.data;
        this.pagination = pagination;
      });
    },
    tabQuery() {
      //查询点击事件
      this.limit = 10;
      this.page = 1;
      this.fetchData();
    },
    labelAdd() {
      //添加点击事件
      this.modalTitle = "新增标签";
      this.visible = true;
    },
    labelEdit() {
      //编辑点击事件
      this.modalTitle = "编辑标签";
      this.visible = true;
    },
    handleOk(e) {
      const form = this.addForm;
      form.validateFields((err, values) => {
        if (err) {
          return;
        }
        this.confirmLoading = true;
        this.addHandle(form,values);
      });
    },
    addHandle(form,values){  //新增点击提交事件
         this.labelId=null;
         addLabel(values).then(res => {
          form.resetFields();
          this.visible = false;
          this.tabQuery();
          this.confirmLoading = false;
        
        });
    },
    updateHandle(values){
    
    },
    handleCancel(e) {
      this.visible = false;
    }
  },
  created() {},
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
</style>

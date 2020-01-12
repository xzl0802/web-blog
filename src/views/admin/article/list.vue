<template>
  <div>
    <a-row class="search_content">
      <a-col :span="18"></a-col>
      <a-col :span="6" class="rightBtn">
        <a-button type="primary" @click="tabQuery">查询</a-button>
        <a-button type="primary" @click="labelAdd">新增</a-button>
        <a-button type="primary" @click="labelEdit">编辑</a-button>
        <a-button type="danger" @click="labelDelete">删除</a-button>
      </a-col>
    </a-row>

    <a-table
     :rowSelection="{type:'radio',selectedRowKeys: selectedRowKeys, onSelect: onSelectChange,onChange: onTabChange}"
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
  </div>
</template>

<script>
import {getALlArticleList, addLabel,updateLabel,deleteLabel } from "@/api/admin";
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
          title: "标题",
          dataIndex: "title",
          align: "center"
        },
        {
          title: "文章标签",
          dataIndex: "labelName",

          align: "center"
        },
          {
          title: "是否发布",
          dataIndex: "is_show",
          align: "center"
        },
          {
          title: "置顶",
          dataIndex: "is_sticky",
          align: "center"
        },
            {
          title: "状态",
          dataIndex: "type",
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
          title: "修改时间",
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
      labelId: null,
      modeType: "add",
      selectedRowKeys:[],
      selectedRow:''
    };
  },
  computed: {
  },
  beforeCreate() {
    this.addForm = this.$form.createForm(this, { name: "form_in_modal" }); //创建表单
  },
  methods: {
    onTabChange(selectedRowKeys){
    this.selectedRowKeys = selectedRowKeys; 
    },
    onSelectChange(record, selected, selectedRows, nativeEvent){  //表格单选事件
     this.selectedRow = record;
    },
    handleTableChange(pagination, filters, sorter) {
      //表格分页事件处理
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
      getALlArticleList(params).then(res => {
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
    this.selectedRow ='';
    this.selectedRowKeys = [];
      this.fetchData();
 
    },
      labelAdd() { //添加文章跳转点击事件
    this.$router.push({path:'/admin/article/editor'})
    },
    labelEdit() {//编辑点击跳转事件
      if(!this.selectedRow){
         this.$message.warning('请选择需要编辑的标签');
         return false;
      } 
  
    this.$router.push({path:'/admin/article/editor', params:{userId: '123'}})

    },
    labelDelete(){ //删除点击事件
     if(!this.selectedRow){
         this.$message.warning('请选择需要删除的标签');
         return false;
      } 
      let  id  = this.selectedRow.id;
      let that = this;
     this.$confirm({
            title: '确认删除？',
            content: h => <div style="color:red;">确认删除此条标签？</div>,
            okText: '确认',
            cancelText: '取消',
            onOk() {
            deleteLabel({"id":id}).then(res => {
            that.tabQuery();      
      });  
            },
            onCancel() {
              
            },
          });
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

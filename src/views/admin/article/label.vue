<template>
  <div>
    <a-row class="search_content">
      <a-col :span="18"></a-col>
      <a-col :span="6" class="rightBtn">
        <a-button type="primary"  @click="tabQuery" >查询</a-button>
        <a-button type="primary"  @click="labelAdd" >新增</a-button>
            <a-button type="primary"  @click="labelEdit" >编辑</a-button>
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
    </template> -->
    </a-table>

      <a-modal
      :title="modalTitle"
      :visible="visible"
      @ok="handleOk"
      :confirmLoading="confirmLoading"
      @cancel="handleCancel"
    >

    </a-modal> 
  </div>
</template>

<script>
import { getAllLabel } from "@/api/admin";
export default {
  data() {
    return {
      data: [],
      columns: [
        {
          title: "序号",
          dataIndex: "id",
          key: "name",
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
          key: "address",
          align: "center"
        },
        {
          title: "创建者",
          dataIndex: "createdUser",
          key: "ip",
          align: "center"
        },
        {
          title: "创建时间",
          dataIndex: "createdTime",
          key: "createTime",
          align: "center"
        },
        {
          title: "修改者",
          dataIndex: "updatedUser",
          key: "updateTime",
          align: "center"
        }
        ,
        {
          title: "修改事件",
          dataIndex: "updatedTime",
          key: "updateTime",
          align: "center"
        }
      ],
      pagination: {},
      loading: false,
      page: 1,
      limit: 10,
      modalTitle:"新增标签",
      visible:false,
      confirmLoading:false
    };
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
    labelAdd(){  //添加点击事件
    this.modalTitle ='新增标签'
      this.visible = true;
    },
    labelEdit(){ //编辑点击事件
    this.modalTitle ='编辑标签'
      this.visible = true;
    },
    handleOk(e){ //模态框确认点击事件

    },
     handleCancel(e) {
    this.visible = false;
      },
  },
  created() {},
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>

</style>

<template>
  <div>
    <a-row class="search_content">
      <a-col :span="21"></a-col>
      <a-col :span="3" class="rightBtn">
        <a-button type="primary" @click="tabQuery">查询</a-button></a-col
      >
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
  </div>
</template>

<script>
import { getIpCounts } from "@/api/admin";
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
          title: "地址ID",
          dataIndex: "cid",
          align: "center"
        },
        {
          title: "地址",
          dataIndex: "cname",
          key: "address",
          align: "center"
        },
        {
          title: "IP",
          dataIndex: "cip",
          key: "ip",
          align: "center"
        },
        {
          title: "访问时间",
          dataIndex: "createTime",
          key: "createTime",
          align: "center"
        },
        {
          title: "修改时间",
          dataIndex: "updateTime",
          key: "updateTime",
          align: "center"
        }
      ],
      pagination: {},
      loading: false,
      page: 1,
      limit: 10
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
      getIpCounts(params).then(res => {
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
    }
  },
  created() {},
  mounted() {
    this.fetchData();
  }
};
</script>

<style scoped>
.search_content {
  margin-bottom: 10px;
}
.rightBtn{
  text-align: right;
}
</style>

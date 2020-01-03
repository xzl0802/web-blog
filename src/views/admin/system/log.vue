<template>
  <div>
  <a-table
    :columns="columns"
    :rowKey="record => record.login.uuid"
    :dataSource="data"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <!-- <template slot="name" slot-scope="name">
      {{name.first}} {{name.last}}
    </template> -->
  </a-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      columns: [
        {
          title: "Name",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "Age",
          dataIndex: "age",
          key: "age",
          width: "12%"
        },
        {
          title: "Address",
          dataIndex: "address",
          width: "30%"
        }
      ]
    };
  },
  methods:{
    
    
  },
  created(){

  }
};
</script>

<style></style>

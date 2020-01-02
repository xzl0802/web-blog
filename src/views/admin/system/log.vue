<template>
  <div>

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
  created(){

  }
};
</script>

<style></style>

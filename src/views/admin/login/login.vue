<template>
  <div class="login_main">
  <div class="login_content">
  <a-form :layout="formLayout" class="login_form">
      <a-form-item>
       <h1 class="loginTitle">{{login_title}}</h1>
      </a-form-item>
      <a-form-item
        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input placeholder="请输入用户名" >  <a-icon slot="prefix" type="user" /></a-input>
      </a-form-item>
      <a-form-item

        :wrapper-col="formItemLayout.wrapperCol"
      >
        <a-input placeholder="请输入密码" type="password" ><a-icon slot="prefix" type="lock" /></a-input>
      </a-form-item>
      <a-form-item :wrapper-col="buttonItemLayout.wrapperCol">
        <a-button type="primary" class="login_btn">
          登录
        </a-button>
      </a-form-item>
    </a-form>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formLayout: 'horizontal',
      login_title:"南城以北总控室"
    };
  },
  computed: {
    formItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 18, offset: 3 },
          }
        : {};
    },
    buttonItemLayout() {
      const { formLayout } = this;
      return formLayout === 'horizontal'
        ? {
            wrapperCol: { span: 18, offset: 3 },
          }
        : {};
    },
  },
  methods: {
   
  },
};
</script>
<style scoped>
.login_main{
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
   background: url("~@/assets/login_bg.jpg") center no-repeat;
   background-size: cover;
    display: -webkit-flex;
    box-sizing: border-box;
}
.login_content{
    width:450px;
    height: 400px;
    margin: auto;
    box-shadow:2px 5px 12px #000000;
  
}
.login_form{

  height: 300px;
   margin:0 0 20px 0;
}
.loginTitle{
  padding-top: 50px;
  text-align: center;
  color: #ffffff;
}
 .login_btn{
   width: 100%;
 }
</style>
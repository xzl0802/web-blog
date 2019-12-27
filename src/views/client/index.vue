<template>
<div class="main"> 
<div class="client_layout">
    <Progress />
    <menuSide />
<headClient/>

<div class="main_content">
<router-view></router-view>
</div>
   <ClientFooter/>
</div>
</div>
</template>

<script>
import HeadClient from   '@/components/client/header/index';  //头部组件
import menuSide from "@/components/client/menuSide";
import Progress from "@/components/client/progress"; //进度条组件
import ClientFooter from  "@/components/client/footer";
import {countIp} from "@/api/client"
    export default {
        components:{HeadClient,menuSide, Progress,ClientFooter},
        data(){
            return{
                 percent: 0,
            }
        },
        methods:{

        },mounted() {
      //等待js都加载完之后，调用countip方法
      window.onload=function (){
       if(process.env.NODE_ENV === 'development'){
         return false;  //当为开发环境时不记录访问Ip
       }
       if(!sessionStorage.getItem('accessView')){  //防止刷新界面 再次记录
        recondIp(returnCitySN).then(response => {
        sessionStorage.setItem('accessView',true)
        })
        .catch(err => {
      
        });
      } }
    },
    }
</script>
<style scoped>

.client_layout{
    width: 100%;    
    display: flex;
    display: -webkit-flex;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    flex-direction: column;
    background-color: #F4F8FB;
}

/* .main_content{
    min-height: 500px;
} */
</style>
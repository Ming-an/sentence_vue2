<template>
    <div class="register">
        <div class="reg-img">
            <div class="main">
                <span>欢迎注册好句分享</span>
                <div class="main-msg">
                    <input type="text" v-model="username" placeholder="请输入用户名"><br>
                    <input type="password" v-model="password" placeholder="请输入密码"><br>
                    <input type="password" v-model="rePwd" placeholder="请确认密码"><br>
                    <button type="submit" @click="registry">注册</button>
                </div>
                <div class="bottom">
                    <span @click.prevent="toLogin()">去登录</span>
                    <span @click.prevent="toHome()">去首页</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name:'Register',
    data(){
        return{
            username: '',
            password: '',
            rePwd: '',
        }
    },
    methods:{
        toLogin(){
            return this.$router.push({path:'/Login'});
        },
        toHome(){
            return this.$router.push({path:'/'});
        },
        registry() {
            const config = {
                headers: {  
                        'content-Type':  'application/x-www-form-urlencoded' // 设置请求体的内容类型   
                    }  
            };
            const pasreg = new RegExp('^.{6,16}$');

            // 首先验证密码和确认密码是否匹配  
            if(pasreg.test(this.password)){
                if (this.password === this.rePwd) {  
                // 创建一个包含所有注册信息的对象  
                const registrationData = {  
                    username: this.username, 
                    password: this.password,  
                };  
        
                // 发送POST请求到后端进行注册  
                axios.post(this.$httpUrl + '/user/register', registrationData, config)  
                    .then(response => {  
                        // 注册成功，处理响应  
                        console.log('注册成功', response.data);  
                        alert("注册成功");
                        // 根据需要更新前端状态或UI，比如跳转到登录页面或显示成功消息  
                        this.$router.push({path: '/Login'})
                    })  
                    .catch(error => {  
                        // 注册失败，处理错误  
                        console.error('注册失败', error);  
                        alert("注册失败，请输入6位密码");
                        // 显示错误消息给用户  
                        alert('注册失败，请检查您的输入或稍后重试');  
                    });  
            } else {  
                // 密码和确认密码不匹配  
                alert('密码和确认密码不一致，请重新输入');  
            }  
            }else{
                alert("请输入至少包含数字或字母的6-16位密码");
            }
        }
    }
}
</script>

<style scoped>
@import "../assets/reset.css";
@font-face {
            font-family: "情书字体";
            src: url('../assets/font/方正手迹.ttf');
        }
.register{
    width: 100%;
    height: 606px;
}
.register .reg-img{
    width: 100%;
    height: 100%;
    background-image: url('../assets/register.png');
    background-size: cover;
    display: flex;
}
.register .reg-img .main{
    width: 380px;
    height: 400px;
    background-color: rgba(240, 243, 242, 0.37);
    border-radius: 20px;
    box-shadow: 0 0 10px white;
    margin: auto;
    text-align: center;
    padding: 10px;
}
.main>span:nth-child(1){
    display: inline-block;
    margin-top: 10px;
    font-size: 40px;
    font-family: '情书字体';
    font-weight: bold;
    color: rgb(205, 155, 206);
    text-shadow: 0 0 10px skyblue;
}
.main-msg input{
    padding: 15px;
    margin-top: 20px;
    border-radius: 20px;
    width: 300px;
    background-color: white;
    opacity: 0.3;
    border: 1px solid rgb(228, 227, 227);
}
.main-msg button{
    margin-top: 20px;
    padding: 15px;
    font-size: 16px;
    color: white;
    background-color: #87cefadb;
    border-radius: 30px;
    width: 330px;
}
.bottom{
    margin-top: 15px;
    text-align: right;
    margin-right: 20px;
    margin-bottom: 0;
}
.bottom span{
    display: inline-block;
    margin-left: 10px;
    color: white;
    text-shadow: 0 0 10px skyblue;
    font-size: 16px;
}
.bottom span:hover{
    color: skyblue;
    cursor: pointer;
}
</style>
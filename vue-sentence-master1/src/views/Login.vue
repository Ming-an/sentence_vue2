<template>
    <div class="login-bacg">
        <div class="back-img">
            <div class="login-input">
                <div class="main"> 
                    <span>好句分享，让生活充满美好</span>
                    <div class="main-input">
                        <input v-model="user.username" type="text" placeholder="请输入用户名"><br>
                        <input v-model="user.password" type="password" placeholder="请输入密码">
                    </div>
                    <div class="main-login">
                        <button @click="submit" type="submit">登录</button>
                    </div>
                    <div class="bottom">
                        <span @click.prevent="toHome()">去首页</span>
                        <span @click.prevent="toRegister()">去注册</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import axios from 'axios';
// import { userTokenStore } from '@/stores/token.js';

export default {
    name:'Login',
    data(){
        return{
            user: {
                username: '',
                password: ''
            }
        }
    },
    methods:{
        submit() {
            // const tokenStore = userTokenStore();
            console.log(this.user)
            if (this.user.username != '' && this.user.password != '') {
                const config = {  
                    headers: {  
                        // 'Accept': 'application/json',
                        'content-Type':  'application/x-www-form-urlencoded' // 设置请求体的内容类型  
                        // 如果需要的话，还可以添加其他头部，比如认证令牌  
                        // 'Authorization': 'Bearer ' + localStorage.getItem('userToken')  
                    }  
                };  
                axios.post(this.$httpUrl + '/user/login', this.user, config).then(res => {
                    console.log(res);
                    if (res.data.code == 0) {
                        const token = res.data.data;
                        // tokenStore.setToken(token);
                        localStorage.setItem('userToken', JSON.stringify(token))
                        this.toHome();
                    }
                    
                }).catch(err => {
                    console.log('登录失败', err);
                    alert('登录失败！请检查你的用户名和密码')
                })
            } else {
                alert('请输入用户名和密码');
            }
        },
        toHome(){
            return this.$router.push({path:'/'});
        },
        toRegister(){
            return this.$router.push({path:'/Register'});
        }
    }
}
</script>

<style scope> 
@import "../assets/reset.css";
@font-face {
            font-family: "情书字体";
            src: url('../assets/font/方正手迹.ttf');
        }
.login-bacg{
    width: 100%;
    height: 606px;
}
/* 登录背景图 */
.login-bacg .back-img{
    width: 100%;
    height: 100%;
    background-image:url('../assets/back.png');
    background-size: cover;
    display: flex;
}
.login-bacg .back-img .login-input{
    width: 380px;
    height: 390px;
    background-color: rgba(240, 243, 242, 0.37);
    border-radius: 20px;
    border: 1px solid white;
    box-shadow: 0 0 10px rgb(239, 237, 237);
    margin: auto;

}
.main{
    padding: 10px;
}
.main>span:nth-child(1){
    display: inline-block;
    margin-top: 30px;
    font-size: 30px;
    text-align: center;
    font-weight: bold;
    color: rgb(205, 155, 206);
    text-shadow: 0 0 10px skyblue;
    font-family:'情书字体'
}
.main .main-input{
    margin-top: 30px;
    text-align: center
}
.main .main-input input{
    padding: 15px;
    width: 300px;
    margin-bottom: 10px;
    border-radius: 20px;
    background-color: white;
    opacity: 0.3;
    border: 1px solid rgb(228, 227, 227);
    display: inline-block;
}
.main .main-login{
    margin-top: 20px;
    text-align: center;
}
.main .main-login button{
    font-size: 20px;
    color: white;
    background-color: #87cefadb;
    padding: 15px;
    width: 320px;
    border-radius: 30px;
}
.main .bottom{
    margin-top: 15px;
    text-align: right;
    margin-right: 20px;
    margin-bottom: 0;
}
.main .bottom span{
    display: inline-block;
    margin-left: 10px;
    color: white;
    text-shadow: 0 0 10px skyblue;
    font-size: 16px;
}
.main .bottom span:hover{
    color: skyblue;
    cursor: pointer;
}
</style>
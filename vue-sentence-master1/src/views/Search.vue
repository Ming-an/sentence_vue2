<template>
    <div class="Search">
        <!-- 导航区 -->
        <div class="header-topbar">
        <div class="container clearfix" @click="toHome()">
            <img src="../assets/logo.png" alt="">
            <span>美好句子，一键收藏！</span>
            <ul class="rightfix clearfix">
                <li><a href="">名人</a></li>
                <li><a href="">书籍</a></li>
                <li><a href="">古诗词</a></li>
                <li><a href="">台词</a></li>
                <li v-if="!isLogin"> <a @click.prevent="toLogin()">登录</a></li>
                <li v-if="!isLogin"><a  @click.prevent="toRegister()">注册</a></li>
                <li v-else><a @click.prevent="toPersonCenter()" ><i class="iconfont icon-morentouxiang"></i></a></li>
            </ul>
        </div>
        </div>

        <!-- 用户发表的句子列表 -->
        <div class="Search-list">
            <div class="container clearfix">
                <div class="seList leftfix" @click="">
                    <span>句子列表</span>
                    <div class="seList-content" v-for="(item, index) in steList" :key="index">
                        <div class="seList-content-user clearfix">
                            <img src="../assets/item5.png" class="leftfix" />
                            <span class="leftfix">{{ item.nickname }}</span>
                        </div>
                        <div class="seList-content-title" @click="getArticleInfo(steList[index].id)">
                            <span>{{ item.title }}</span>
                        </div>
                    </div>
                </div>

                <div class="seList-right leftfix">
                    <ul>
                        <li>1.<a href="#">是谁已经预购好十二个月的浪漫</a></li>
                        <li>2.<a href="#">是谁已经预购好十二个月的浪漫</a></li>
                        <li>3.<a href="#">一些高级简单的短句（第一辑）</a></li>
                        <li>4.<a href="#">用一句话形容MBTI十六型人格</a></li>
                        <li>5.<a href="#">那些刻骨铭心意难平的be文学</a></li>
                        <li>6.<a href="#">句句不提想念，句句都是想念</a></li>
                        <li>7.<a href="#">五一劳动节文案大全</a></li>
                    </ul>
                </div>
            </div>
        </div>

                <!-- footer 底部 -->
                <div class="footer">
        <div class="foonter-main">
            <div class="footer-top">
                <div class="footer-item">
                    <span>句子</span>
                    <ul>
                        <li><a href="#">精选美剧</a></li>
                        <li><a href="#">小说摘抄</a></li>
                        <li><a href="#">电视剧台词</a></li>
                        <li><a href="#">动漫台词</a></li>
                        <li><a href="#">电影台词</a></li>
                        <li><a href="#">名人语录</a></li>
                    </ul>
                </div>
                <div class="footer-item">
                    <span>友情链接</span>
                    <ul>
                        <li><a href="#">来自百度</a></li>
                        <li><a href="#">来自搜狐</a></li>
                        <li><a href="#">新浪微博</a></li>
                        <li><a href="#">今日头条</a></li>
                        <li><a href="#">来自网易</a></li>
                    </ul>
                </div>
                <div class="footer-item">
                    <span>关注我们</span>
                    <ul>
                        <li><a href="#">新浪微博</a></li>
                        <li><a href="#">微信公众号</a></li>
                    </ul>
                </div>
                <div class="footer-item">
                    <span>点击下载</span>
                    <ul>
                        <li><a href="#">下载手机app</a></li>
                        <li><a href="#">下载pc端</a></li>
                    </ul>
                </div>
            </div>
            <div class="footer-bottom">
                <span>鄂ICP备HBUE144821号-8 项目进行经营许可证：鄂A2-20201264 © 2024 好句分享</span>
            </div>
        </div>
    </div>
    </div>
</template>


<script>
import router from '@/router';
import "@/assets/iconfont/iconfont";
import axios from 'axios';

export default {
    name: 'Search',
    data() {
        return {
            einput: '',
            searchIcon: require('../assets/search.png'),
            Tanme: '',
            steList: '',
            isLogin:false,
            user:{}
        }
    },
    methods: {
        toHome(){
            return this.$router.push({path:'/'}); 
        },
        toLogin(){
            return this.$router.push({path:'/Login'});
        },
        toRegister(){
            return this.$router.push({path:'/Register'});
        },
        getTname() {
            this.Tname = this.$route.query.paramsName;
            console.log(this.Tname);
            axios.get(this.$httpUrl + '/article/search', {params: { name: this.Tname }}).then(res => {
                console.log(res);
                this.steList = res.data.data;
            }).catch(err => {
                console.log(err);
            })
        },
        toPersonCenter(){
            return this.$router.push({path:'/PersonCenter'});
        },
        getArticleInfo(e) {
            console.log(e);
            this.$router.push({name: 'Detail', query: {articleId: e}})
        },
        //判断当前用户是否登录
        getUserInfo(){
            this.user = JSON.parse(localStorage.getItem('userToken'));
            if(this.user){
                this.isLogin = true;
            }
        }
    },
    created() {
        console.log(this.$route.query.paramsName);
        this.getTname();
        this.getUserInfo();
    }
}
</script>

<style scoped>
@import "../assets/reset.css";
@import "../assets/iconfont/iconfont.css";
@font-face {
            font-family: "情书字体";
            src: url('../assets/font/方正手迹.ttf');
        }
.container{
    width: 1190px;
    margin: 0 auto;
}
.iconfont {
  font-size: 40px;
  color: skyblue;
  font-style: normal;
}
/* #region 头部导航区 */

.header-topbar{
    width: 100%;
    height: 60px;
    background-color: #fff;
    border-bottom: 1px solid #d5d3d3;
    z-index: 4;
    position: fixed;
    top: 0;
}

.header-topbar img{
    float: left;
    width: 100px;
    margin-top: 15px;
    margin-right: 10px;
}
.header-topbar span{
    display: inline-block;
    line-height: 60px;
    font-size: 28px;
    font-weight: bold;
    font-family: '情书字体';
}
.header-topbar ul li{
    float: left;
}

.header-topbar ul li a{
    font-size: 18px;
    color: black;
    line-height: 60px;
    padding:0 20px;
    border-right: 1px solid black;
    transition: 0.1s linear;
}

.header-topbar ul li a:hover{
    cursor: pointer;
}
.header-topbar ul li:last-child a{
    border: 0;
}
.header-topbar ul li a:hover{
    color: skyblue;
}

.header-topbar-li-li  {
    display: none;
    background-image: url('../assets/flower1.jpg');

}
/* #endregion 头部导航区 结束*/

/* #region 用户发表的句子列表 */
.Search-list{
    padding-top: 100px;
    width: 100%;
    background-color: #fafafa;
}

.Search-list .seList{
    width: 780px;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
}
.Search-list .seList span{
    font-size: 16px;
    font-weight: bolder;
}
.Search-list .seList .seList-content{
    background-color: #fafafa;
    padding: 20px;
    border-radius: 20px;
    text-align: center;
    margin-bottom: 20px;
    border: 1px solid #fafafa;
}
.Search-list .seList .seList-content:hover{
    border: 1px solid skyblue;
}
.Search-list .seList .seList-content .seList-content-user img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.Search-list .seList .seList-content .seList-content-user span{
    font-size: 16px;
    margin-top: 10px;
    margin-left: 15px;
    color: black;
}

.Search-list .seList .seList-content .seList-content-title{
    font-size: 16px;
    font-weight: bold;
}
.Search-list .seList .seList-content .seList-content-title:hover{
    cursor: pointer;
}
.seList-right{
    box-sizing: border-box;
    padding: 20px;
    width: 340px;
    margin-left: 20px;
    border-radius: 20px;
    height: 400px;
    border: 1px solid #fafafa;
    background-color: white;
}
.seList-right ul li{
    padding-top: 10px;
    margin-top: 10px;
}
.seList-right ul li a{
    font-size: 16px;
    color: black;
    
}
.seList-right ul li a:hover{
    color: skyblue;
}
/* #endregion 用户发表的句子列表 */

/* #region footer  */
.footer{
    padding: 20px;
    background-color: #f9f9f9;
}
.footer .foonter-main{
    height: 300px;
    box-sizing: border-box;
    background-color: #f5f5f5;
    position: relative;
}
.footer .foonter-main .footer-top {
    display: flex;
    justify-content: space-evenly;
}
.footer .foonter-main .footer-top .footer-item{
    width: 90px;
    height: 200px;
    margin-top: 20px;
    box-sizing: border-box;
}
.footer .foonter-main .footer-top .footer-item span{
    font-size: 20px;
    font-weight: bold;
    color: black;
    cursor: pointer;
}
.footer .foonter-main .footer-top .footer-item ul li{
    padding-top: 10px;
}
.footer .foonter-main .footer-top .footer-item ul li a{
    font-size: 14px;
    color: black;
}
.footer .foonter-main .footer-top .footer-item ul li a:hover{
    color: skyblue;
}
.footer .foonter-main .footer-bottom{
    display: inline-block;
    text-align: center;
    width: 100%;
    position: absolute;
    bottom: 0;
}
.footer .foonter-main .footer-bottom span{
    text-align: center;
    color: black;
    font-size: 16px;
}
/* #endregion footer end */
</style>
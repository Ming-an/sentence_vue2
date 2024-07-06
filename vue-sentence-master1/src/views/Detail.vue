<template>
    <div class="Detail-all">
        <!-- 导航区 -->
        <div class="header-topbar">
        <div class="container clearfix">
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

        <!-- 句子内容详情 -->
        <div class="Detail-all-content clearfix">
            <div class="container">
                <div class="Detail-all-content-left leftfix">
                    <span>{{ this.articleInfoList.content }}</span>
                    <div class="pic clearfix">
                        <i class="iconfont icon-dianzan_huaban" @click="onlikeCount()"></i>{{ this.articleInfoList.likeCount }}
                        <i class="iconfont icon-shoucang" @click="oncollectCount()"></i>{{ this.articleInfoList.collectCount }}
                    </div>

                    <!-- 输入评论区 -->
                    <div class="comments">
                        <textarea type="text" placeholder="我也来说一句" class="comments-text" v-model="comments"></textarea>
                        <button class="comments-button" @click="upComment()">评论</button>
                    </div>

                    <!-- 其他用户评论区 -->
                    <div class="popular">
                        <h1 style="font-weight:bold">热门评论区</h1>
                        <div class="comments-list clearfix" v-for="(item, index) in commentsList" :key="index">
                            <!-- <div>{{ item.userPic }}</div> -->
                            <img src="../assets/item5.png" class="leftfix" />
                            <div class="nickName leftfix">{{ item.nickname }}</div>
                            <div class="userContent leftfix">{{ item.content}}</div>
                            <div class="commentTime leftfix">{{ item.commentTime.split('T')[0] }}</div>
                            <div class="commentTime leftfix">{{ item.commentTime.split('T')[1] }}</div>
                        </div>
                    </div>
                </div>
                <div class="Detail-all-content-right leftfix">
                    <h1>作者</h1>
                    <div class="user clearfix">
                        <div class="user-pic leftfix">
                            
                        </div>
                        <div class="username leftfix">
                            <span>{{ this.articleInfoList.nickname }}</span>
                        </div>   
                    </div>
                    <div class="recommend">
                        <h1>句子类别</h1>
                        <ul class="recommend-li">
                            <li>{{ this.articleInfoList.categoryName }}</li>
                        </ul>
                    </div>
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
    name:'Detail',
    data(){
        return{
            articleId: 0,
            isLogin:false,
            comments: '',
            articleInfoList: {},
            commentsList: {},
            isLike: false,
            isCollect: false,
            classify:["名人名言","书籍名句","小说摘抄","诗词","影视台词","动漫语录","祝福语","广告语",
                    "朋友圈文案","作文素材","个性签名","励志","伤感","温柔治愈","沙雕搞笑","哲理","浪漫情话","生命","优美"
                    
                    ],
            user:{}
        }
    },
    methods:{
        toPersonCenter(){
            return this.$router.push({path:'/PersonCenter'});
        },
         //判断当前用户是否登录
        getUserInfo(){
            this.user = localStorage.getItem('userToken');
            if(this.user){
                this.isLogin = true;
            }
        },
        toLogin(){
            return this.$router.push({path:'/Login'});
        },
        toRegister(){
            return this.$router.push({path:'/Register'});
        },
        getArticleInfo() {
            this.articleId = this.$route.query.articleId;
            console.log(this.articleId);
            axios.get(this.$httpUrl + '/article/findById', {params: {articleId: this.articleId}}).then(res => {
                console.log("得到句子详情里面的详细信息",res);
                this.articleInfoList = res.data.data;
                console.log(this.articleInfoList);
            }).catch(err => {
                console.log(err);
                
            })
        },
        getCommentsList() {
            this.articleId = this.$route.query.articleId;
            axios.get(this.$httpUrl + '/comment/list', {params: {articleId: this.articleId}}).then(res => {
                console.log(res);
                this.commentsList = res.data.data;
                console.log(this.commentsList);
                // let time = res.data.data[0].commentTime.split('T');
                // console.log(time[0])
            }).catch(err => {
                console.log(err);
            })
        },
        onlikeCount(){
            this.user = JSON.parse(localStorage.getItem('userToken'));
            if(this.user){
                this.isLogin = true;
                this.articleId = this.$route.query.articleId;
            const token = localStorage.getItem('userToken');
            axios.post(this.$httpUrl + '/like/add', {likeArticle: this.articleId},{
                headers: {
                    'Authorization': `${token}`,    
                    'Content-Type': 'application/json'
            }}).then(res => {
                console.log("点赞",res);
                if (res.data.code === 0) {
                    alert("点赞成功")
                } else {
                    alert("已点赞")
                }
                
            }).catch(err => {
                console.log(err);
            })
            }
            else{
                alert("请登录后点赞");
                return this.$router.push({path:'/Login'});
            }
        },
        oncollectCount(){
            this.user = JSON.parse(localStorage.getItem('userToken'));
            if(this.user){
                this.isLogin = true;
                this.articleId = this.$route.query.articleId;
            const token = localStorage.getItem('userToken');
            axios.post(this.$httpUrl + '/collect/add', {articleId: this.articleId},{
                headers: {
                    'Authorization': `${token}`,    
                    'Content-Type': 'application/json'
            }}).then(res => {
                console.log("收藏",res);
                if (res.data.code === 0) {
                    alert("收藏成功")
                } else {
                    alert("已收藏")
                }
                
            }).catch(err => {
                console.log(err);
            })
            }else{
                alert("请登录后收藏");
                return this.$router.push({path:'/Login'});
            }
        },

        upComment(){
            console.log(this.comments);
            this.user = JSON.parse(localStorage.getItem('userToken'));
            if(this.user){
                this.isLogin = true;
                if (this.comments == '') {
                alert("评论不能为空！")
            } else {
                const articleId = this.$route.query.articleId;
                const token = localStorage.getItem('userToken');
                axios.post(this.$httpUrl + '/comment/add', {
                    // 假设这里只需要传递需要更新的字段  
                    articleId: articleId,
                    content: this.comments
                }, {  
                    headers: {  
                        'Authorization': `${token}`,  
                        'Content-Type': 'application/json'  
                    }  
                }).then(res => {
                    console.log("评论发表", res);
                    alert("发表成功")
                }).catch(err => {
                    console.log("请求失败", err);
                })
            }
            }else{
                alert('请登录后评论')
                return this.$router.push({path:'/Login'});
            }
        },

    },
    created() {
        this.getArticleInfo();
        this.getCommentsList();
        this.getUserInfo();
    },
}
</script>

<style> 
@import "../assets/reset.css";
@import "../assets/iconfont/iconfont.css";

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
.comments .comments-button{
    padding: 10px;
    border-radius: 5px;
    color: white;
    width: 100px;
    margin-left: 630px;
    border: 1px solid skyblue;
    background-color: skyblue;
}

/* #endregion 头部导航区 结束*/


/* #region 句子详情 */
.Detail-all-content{
    background-color: #fafafa;
}
.Detail-all-content .Detail-all-content-left{
    margin-top: 90px;
    margin-left: 20px;
    width: 780px;
    /* height: 380px; */
    background-color: white;
    box-sizing: border-box;
    padding: 20px;
    border-radius: 20px;
    border:1px solid white;
}
.Detail-all-content .Detail-all-content-left span:nth-child(1){
    display: inline-block;
    margin-top: 30px;
    margin-left: 200px;
    width: 300px;
    height: 200px;
    text-overflow: ellipsis;
    font-size: 20px;
}

.Detail-all-content .Detail-all-content-left .pic{
    margin-left: 580px;
    
}
.Detail-all-content .Detail-all-content-left .pic .iconfont{
    margin-right: 10px;
}
.Detail-all-content .Detail-all-content-right{
    margin-top: 90px;
    box-sizing: border-box;
    margin-left: 20px;
    width: 340px;
    height: 380px;
    background-color: white;
    border-radius: 20px;
    padding: 20px;
}

.comments .comments-text{
    width: 100%;
    border: 1px solid skyblue;
    height: 100px;
    resize: vertical;
}

.comments  textarea{
    outline: none;
    font-size: 18px;
}

.popular .comments-list img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.popular .comments-list{
    margin-top: 10px;
    padding: 10px;
    margin-bottom: 10px;
    border-radius: 10px;
    border: 1px solid skyblue;
}
.popular .comments-list:hover{
    cursor: pointer;
}
.popular .comments-list .nickName{
    margin-top: 15px;
    margin-left: 10px;
    font-weight: bold;
}
.popular .comments-list .userContent{
    margin-left: 10px;
    margin-top: 15px;
}
.popular .comments-list  .commentTime{
    margin-left: 10px;
    margin-top: 15px;
}


.Detail-all-content-right h1{
    font-size: 20px;
    font-weight: bold;
}

.Detail-all-content-right .user .user-pic{
    margin-top: 10px;
    width: 50px;
    height: 50px;
    background-color: skyblue;
}
.Detail-all-content-right .user .username{
    font-size: 16px;
    margin-top: 20px;
    margin-left: 20px;
}

.Detail-all-content-right .recommend h1{
    margin-top: 20px;
    font-size: 20px;
    font-weight: 100;
}
.Detail-all-content-right .recommend .recommend-li{
    text-align: center;
    font-size: 16px;
    font-weight: 100;
    color: skyblue;
    width: 90px;
    height: 40px;
    line-height: 40px;
    border: 1px solid skyblue;
    border-radius: 10px;
}
/* #endregion 句子详情 */


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
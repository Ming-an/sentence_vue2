<template>
    <div class="home">
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
                <li><a><i class="iconfont icon-morentouxiang"></i></a></li>
            </ul>
        </div>
        </div>
        <!--个人资料展示 -->
        <div class="pre">
            <div class="container">
                <div class="pre-msg clearfix">
                    <!-- 头像 -->
                    <div class="avatar-div leftfix">
                        <div class="avatar" @click="uploadimg()">
                           
                        </div>
                    </div>
                    <!-- 左侧资料 -->
                    <div class="pre-msg-details leftfix clearfix">
                        <span>{{ this.userInfo.nickname }}</span>
                            <el-button @click="editPerson()">编辑个人中心</el-button>
                            <el-button @click="logout()">登出</el-button>
                        <!-- <ul>
                            <li>0 关注者</li>
                            <li>正在关注  0</li>
                            <li>收藏与喜欢  0</li>
                        </ul> -->
                    </div>
                </div>
            </div>
        </div>
        <!-- 个人内容展示 -->
        <div class="pre-main">
            <div class="container">
                <div class="pre-main-msg">
                    <div class="msg-top">
                        <ul class="clearfix">
                            <li v-for="(item, id) in msglist" :key="item.id"
                            @click="isActiveItem(item.id)"
                            :class="{ active: activeItem === item.id }"
                            :style="{ color: getActiveItem(item.id) ? 'skyblue' : 'black' }"
                            >
                                {{ item.text }}
                            </li>
                        </ul>
                    </div>
                    <!-- <div class="msg-bottom" >
                        <span>&#43;创建作品</span>
                    </div>  -->
                    <div v-show="isShow()">
                        <div v-if="isShow() === 1" class="myList clearfix">
                        <div class="msg-bottom leftfix">
                        <!-- Form -->
                    <el-button type="text" @click="dialogFormVisible = true" class="msg-bottom-el-button">+创建作品</el-button>
                    <el-dialog title="创建作品" :visible.sync="dialogFormVisible">
                        <el-form :model="form">
                            <el-form-item label="作品标题" :label-width="formLabelWidth">
                                <el-input v-model="form.title" autocomplete="off"></el-input>
                            </el-form-item>
                            <el-form-item label="作品类型" :label-width="formLabelWidth">
                                    <el-select v-model="form.categoryId" placeholder="请选择类型">
                                        <el-option 
                                        v-for="item in typeList"
                                        :label="item.categoryName" 
                                        :value="item.id"></el-option>
                                        <!-- <el-option label="区域二" value="beijing"></el-option> -->
                                    </el-select>
                            </el-form-item>

                            <el-form-item label="作品内容" :label-width="formLabelWidth" class="el-content-input">
                                <el-input
                                    type="textarea"
                                    :rows="5"
                                    placeholder="请输入内容"
                                    v-model="form.content">
                                </el-input>
                            </el-form-item>
                        </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button @click="reset">取 消</el-button>
                    <el-button type="primary" @click="submit">确 定</el-button>
                </div>
                </el-dialog>
                            </div>
                            <div class="msg-bottom2-1 leftfix">
                                <ul v-for="(item, index) in myList" :key="index" class="clearfix">  
                                    <!-- <li>{{ item.content }}</li> -->
                                    <!-- <li>{{ item.nickname }}的</li> -->
                                    <li  @click="toDetail(myList[index].id)">{{ item.title }}</li>
                                    <el-button @click="openUpdate(myList[index].id)" type="primary" size="mini">修改</el-button>
                                        <el-dialog title="修改句子" :visible.sync="updialogFormVisible">
                                            <el-form :model="form1">
                                                <el-form-item label="句子标题" :label-width="formLabelWidth">
                                                    <el-input v-model="form1.title" autocomplete="off"></el-input>
                                                </el-form-item>
                                                <el-form-item label="句子类型" :label-width="formLabelWidth">
                                                        <el-select v-model="form1.categoryId" placeholder="请选择类型">
                                                            <el-option 
                                                            v-for="item in typeList"
                                                            :label="item.categoryName" 
                                                            :value="item.id"></el-option>
                                                            <!-- <el-option label="区域二" value="beijing"></el-option> -->
                                                        </el-select>
                                                </el-form-item>

                                                <el-form-item label="句子内容" :label-width="formLabelWidth" class="el-content-input">
                                                    <el-input
                                                        type="textarea"
                                                        :rows="5"
                                                        placeholder="请输入内容"
                                                        v-model="form1.content">
                                                    </el-input>
                                                </el-form-item>
                                            </el-form>
                                            <div slot="footer" class="dialog-footer">
                                                <el-button @click="reset">取 消</el-button>
                                                <el-button type="primary" @click="updateArticle()">确 定</el-button>
                                            </div>
                                        </el-dialog>
                                    <el-button @click="deleteArticle(myList[index].id)" type="primary" size="mini">删除</el-button>
                                </ul>
                            </div>
                        </div>

                        <div v-if="isShow() === 2" class="msg-bottom2">
                            <!-- <span>点赞列表</span> -->
                            <ul v-for="(item, index) in likeList" :key="index" class="clearfix"> 
                                <!-- <li>{{ item.content }}</li> -->
                                <!-- <li>{{ item.nickname }}的</li> -->
                                <li @click="toDetail(likeList[index].id)">{{ item.title }}---{{item.nickname}}</li>
                                <el-button style="margin-top:18px" @click="deleteLike(likeList[index].id)" type="primary">取消喜欢</el-button>
                            </ul>
                        </div>
                        
                        <div v-if="isShow() === 3" class="msg-bottom2">
                            <!-- <span>收藏列表</span> -->
                            <ul v-for="(item, index) in collectList" :key="index" class="clearfix"> 
                                <!-- <li>{{ item.content }}</li> -->
                                <!-- <li>{{ item.nickname }}的</li> -->
                                <li @click="toDetail(collectList[index].id)">{{ item.title }}</li>
                                <el-button style="margin-top:18px" @click="deleteCollect(collectList[index].id)" type="primary">取消收藏</el-button>
                            </ul>
                        </div>
                        <!-- <div v-if="isShow() === 4" class="msg-bottom3">
                            <span>关注</span>
                        </div> -->
                        <div v-if="isShow() === 4" class="msg-bottom2">
                            <!-- <span>我的评论列表</span> -->
                            <ul v-for="(item, index) in myComList" :key="index" class="clearfix"> 
                                <!-- <li>{{ item.content }}</li> -->
                                <!-- <li>{{ item.nickname }}的</li> -->
                                <li @click="toDetail(myComList[index].articleId)">{{ item.title }}——{{ item.content }}</li>
                                <el-button style="margin-top:18px" @click="deleteCom(myComList[index].commentId)" type="primary">删除</el-button>
                            </ul>
                        </div>
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
import axios from "axios";


export default {
    name:'PersonCenter',
    data(){
        return{
            textarea: '',
            updialogFormVisible: false,
            dialogFormVisible: false,
            form1: {
                id: 0,
                title: '',
                categoryId: '',
                content: ''
            },
            form: {
                title: '',//创建的标题
                categoryId:'',//创建的类型
                content:'',//创建的内容
            },
            formLabelWidth: '120px',
            activeItem:1,
            getmessage:false,
            activeItem:1,
            likeList: [],
            collectList: [],
            myList: [],
            myComList: [],
            typeList: [],
            // [
            //     {id:0,title:'《生死疲劳》', article:'世事犹如书籍，一页页被翻过去。人要向前看，少翻历史旧账。',author:'莫言'},
            //     {id:1,title:'《生死疲劳》', article:'世事犹如书籍，一页页被翻过去。人要向前看，少翻历史旧账。',author:'莫言'},
            //     {id:2,title:'《生死疲劳》', article:'世事犹如书籍，一页页被翻过去。人要向前看，少翻历史旧账。',author:'莫言'},
            //     {id:3,title:'《生死疲劳》', article:'世事犹如书籍，一页页被翻过去。人要向前看，少翻历史旧账。',author:'莫言'}
            // ]
            
            userInfo: {},
            isShow_bottom:true,
            msglist: [
                { text: '作品' ,id:1},  
                { text: '喜欢',id:2 },  
                { text: '收藏' ,id:3},  
                // { text: '关注' ,id:4},  
                { text: '我的评论',id:4 }  
            ],
            // options: [{
            //         value: '选项1',
            //         label: '黄金糕'
            //     }, {
            //         value: '选项2',
            //         label: '双皮奶'
            //     }, {
            //         value: '选项3',
            //         label: '蚵仔煎'
            //     }, {
            //         value: '选项4',
            //         label: '龙须面'
            //     }, {
            //         value: '选项5',
            //         label: '北京烤鸭'
            //     }],
            value: 0
        }
    },
    methods:{
        toHome(){
            return this.$router.push({path:'/'}); 
        },
        // uploadimg(){
        //     console.log('上传头像');
        // },
        isActiveItem(id){
            console.log(id);
            this.activeItem = id;
        },
        getActiveItem(id){
            if(this.activeItem === id){
                return true;
            }
            return false;
        },
        editPerson(){
            this.$router.push({path:'/EditPerson'})
        },
        isShow(){
            return this.activeItem
        },
        getuserInfo() {
            const token = localStorage.getItem('userToken');
            axios.get(this.$httpUrl + '/user/userInfo', { headers: {'Authorization': `${token}`, 'Content-Type':  'application/json'}})
            .then(res => {
                console.log(res);
                this.userInfo = res.data.data;
                console.log(this.userInfo);
            }).catch(err => {
                console.log(err);
                alert('请求用户信息失败');
                this.$router.push({path:'/Login'})
            })
        },
        logout() {
            localStorage.clear();
            this.$router.push({path: '/Login'})
        },
        getLikes() {
            const token = localStorage.getItem('userToken');
            axios.get(this.$httpUrl + '/like/listByuserId', 
            { headers: {'Authorization': `${token}`, 'Content-Type':  'application/json'}})
            .then(res => {
                console.log(res);
                this.likeList = res.data.data;
                console.log(this.likeList);
            }).catch(err => {
                console.log(err);
                alert('请求错误');
            })
        },
        getCollects() {
            const token = localStorage.getItem('userToken');
            axios.get(this.$httpUrl + '/collect/listByuserId', 
            { headers: {'Authorization': `${token}`, 'Content-Type':  'application/json'}})
            .then(res => {
                console.log(res);
                this.collectList = res.data.data;
                console.log(this.collectList);
            }).catch(err => {
                console.log(err);
                alert('请求错误');
            })
        },
        getCom() {
            const token = localStorage.getItem('userToken');
            axios.get(this.$httpUrl + '/comment/listByuser', 
            { headers: {'Authorization': `${token}`, 'Content-Type':  'application/json'}})
            .then(res => {
                console.log(res);
                this.myComList = res.data.data;
                console.log(this.myComList);
            }).catch(err => {
                console.log(err);
                alert('请求错误');
            })
        },
        getMyarticle() {
            const token = localStorage.getItem('userToken');
            axios.get(this.$httpUrl + '/user/getMyArticle', 
            { headers: {'Authorization': `${token}`, 'Content-Type':  'application/json'}})
            .then(res => {
                console.log(res);
                this.myList = res.data.data;
                console.log(this.myList);
            }).catch(err => {
                console.log(err);
                alert('请求错误');
            })
        },
        createWorld(){
            this.getmessage = true;
        },
        closeDialog(){
            this.getmessage = false;
        },
        toDetail(e) {
            console.log(e);
            this.$router.push({name: 'Detail', query: {articleId: e}})
        },
        getTypeList() {
            axios.get(this.$httpUrl + '/category').then(res => {
                console.log("分类", res);
                this.typeList = res.data.data;
                console.log(this.typeList);
            }).catch(err => {
                alert("请重试！")
                console.log(err);
            })
        },
        reset() {
            this.dialogFormVisible = false;
            this.form = '';
        },
        submit() {
            console.log("新建句子列表",this.form);
            const token = localStorage.getItem('userToken');
            const config = {
                headers: {
                    'Authorization': `${token}`, 
                    'Content-Type':  'application/json'
                }
            };
            axios.post(this.$httpUrl + '/article/add', this.form, config).then(res => {
                console.log("新建句子",res);
                this.form = '';
                this.dialogFormVisible = false;
                // alert("新建句子成功")
            }).catch(err => {
                console.log(err);
                alert("请求失败！")
            })
        },
        deleteLike(e) {
            console.log(e);
            const token = localStorage.getItem('userToken');
            const url = this.$httpUrl + '/like/delete?likeArticle=' + encodeURIComponent(e);
            const config = {
                headers: {
                    'Authorization': `${token}`, 
                    'Content-Type':  'application/json'
                }
            };
            axios.delete(url, config).then(res => {
                console.log("取消点赞", res);
                alert("取消点赞成功");
            }).catch(err => {
                console.log("取消点赞请求失败", err);
            })
        },
        deleteCollect(e) {
            console.log(e);
            const token = localStorage.getItem('userToken');
            const url = this.$httpUrl + '/collect/delete?articleId=' + encodeURIComponent(e);
            const config = {
                headers: {
                    'Authorization': `${token}`, 
                    'Content-Type':  'application/json'
                }
            };
            axios.delete(url, config).then(res => {
                console.log("取消收藏", res);
                alert("取消收藏成功");
            }).catch(err => {
                console.log("取消收藏请求失败", err);
            })
        },
        deleteCom(e) {
            console.log(e);
            const token = localStorage.getItem('userToken');
            const url = this.$httpUrl + '/comment/delete?id=' + encodeURIComponent(e);
            const config = {
                headers: {
                    'Authorization': `${token}`, 
                    'Content-Type':  'application/json'
                }
            };
            axios.delete(url, config).then(res => {
                console.log("删除评论", res);
                alert("删除评论成功");
            }).catch(err => {
                console.log("删除操作失败", err);
            })
        },
        deleteArticle(e) {
            console.log(e);
            const token = localStorage.getItem('userToken');
            const url = this.$httpUrl + '/article/delete?id=' + encodeURIComponent(e);
            const config = {
                headers: {
                    'Authorization': `${token}`, 
                    'Content-Type':  'application/json'
                }
            };
            axios.delete(url, config).then(res => {
                console.log("删除句子", res);
                alert("删除句子成功！");
            }).catch(err => {
                console.log("删除操作失败", err);
            })
        },
        openUpdate(e) {
            console.log("修改句子",e);
            this.form1.id = e;
            this.updialogFormVisible = true;
        },
        updateArticle() {
            console.log("修改句子列表",this.form1);
            const token = localStorage.getItem('userToken');
            const config = {
                headers: {
                    'Authorization': `${token}`, 
                    'Content-Type':  'application/json'
                }
            };
            axios.put(this.$httpUrl + '/article/update', this.form1, config).then(res => {
                console.log("修改句子",res);
                this.form = '';
                this.updialogFormVisible = false;
            }).catch(err => {
                console.log(err);
                alert("请求失败！")
            })
        }
    },
    created() {
        this.getuserInfo();
        this.getLikes();
        this.getCollects();
        this.getCom();
        this.getMyarticle();
        this.getTypeList();
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
/* 基础设置 版心位置*/

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
/* #endregion 头部导航区 结束*/

/* #region 个人信息上部分 */
.pre{
    padding-top: 80px;
    background-color: #fafafa;
}
.pre-msg{
    width: 840px;
    height: 140px;
    margin: auto;
    background-color: white;
    box-sizing: border-box;
    border:1px solid white;
    border-radius: 5px;
}
.avatar-div{
    width: 180px;
    height: 100%;
    overflow: hidden;
}
.avatar-div .avatar{
    width: 130px;
    height: 130px;
    background-color: #fafafa;
    margin-left: 40px;
    margin-top: 5px;
    box-sizing: border-box;
    border-radius: 50%;
    background-image: url('../assets/flower4.jpg');
    background-size: cover;
}
.pre-msg-details{
    margin-left: 30px;
}
.pre-msg-details span:nth-child(1){
    font-size: 36px;
    font-weight: bold;
}
.pre-msg-details .el-button{
    display: inline-block;
    margin-top:0;
    position: relative;
    left: 20px;

}
.pre-msg-details span:hover{
    cursor: pointer;
}
.pre-msg-details ul{
    margin-top: 10px;
    font-size: 12px;
}
.pre-msg-details ul li{
    float: left;
    margin-right: 10px;
}
.pre-msg-details ul li:hover{
    cursor: pointer;
}
/* #endregion 个人信息上半部分 */

/* #region 个人信息下半部分 */
.pre-main{
    padding-top: 10px;
    background-color: #fafafa;
}
.pre-main .pre-main-msg{
    width: 840px;
    /* height: 360px; */
    background-color: white;
    border-radius: 5px;
    margin: auto;
}


/* #endregion 个人信息下半部分 */

/* #region 个人内容展示 */
.pre-main-msg{
    overflow: hidden;
}
.pre-main-msg .msg-top ul li {
    float: left;
    font-size: 14px;
    padding: 10px;
}

.pre-main-msg .msg-top ul li:nth-child(1){
    margin-left: 10px;
}
.pre-main-msg .msg-top ul li:hover{
    color: skyblue;
    cursor: pointer;
}
.pre-main-msg .msg-top ul {
    border-bottom: 1px solid #e4e7ed;
}

/* .myList{
    display: flex;

} */

.pre-main-msg .msg-bottom{
    margin-top: 10px;
    margin-bottom: 10px;
    margin-left: 10px;
    width: 300px;
    height: 298px;
    background-color: #f5f5f5;
    text-align: center;
    border-radius: 5px;
}
.pre-main-msg .msg-bottom{
    cursor: pointer;
}

.pre-main-msg .msg-bottom .msg-bottom-el-button{
    font-size: 20px;
    line-height: 270px;
}


.msg-bottom2{
    
    border-radius: 5px;
}
.msg-bottom2 ul{
    padding-left: 20px;
    font-size: 16px;
}
.msg-bottom2 ul li{
    float: left;
    padding: 10px;
    border: 1px solid skyblue;
    margin: 4px;
    margin-top: 15px;
    border-radius: 5px;
    background-color: white;
}
.msg-bottom2 ul li:hover{
    cursor: pointer;
}



.msg-bottom2-1 ul li{
    font-size: 16px;
    font-weight: 100;
    width: auto;
    float: left;
    padding: 6px;
    border: 1px solid skyblue;
    text-align: center;
    margin: 4px;
    border-radius: 5px;
}
.msg-bottom2-1 .el-button{
    margin-top: 10px;
    text-align: center;
    margin-right: 8px;
}
.msg-bottom2-1 ul li:hover{
    color: skyblue;
    cursor: pointer;
}
/* #endregion 个人内容展示 */


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
<template>
    <div class="home">
        <!-- 导航区 -->
        <div class="header-topbar" @click="toHome()">
        <div class="container clearfix">
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

        <!-- 个人中心内容修改设置 -->
        <div class="edit">
            <div class="container">
                <div class="edit-main clearfix">
                    <!-- 左侧导航栏 -->
                <div class="edit-main-left leftfix">
                    <ul v-for="(item) in  left_top_list" 
                    :key="item.id"
                    @click="isChoose(item.id)"
                    :class="{active:activeItemId === item.id }"
                    :style="{ color: isChooseItem(item.id) ? 'skyblue' : 'black' }"
                    > 
                        <li>{{ item.text }}</li>
                    </ul>
                </div>
                
                <!-- 右侧修改部分 -->
                <div v-show="isShow()">
                    <div  class="edit-main-right leftfix" v-if="isShow() == 1">
                    <div class="right-main">
                        <label class="clearfix">
                            <span class="leftfix">头像:</span>
                            <img  class="leftfix" src="../assets/flower4.jpg">
                        </label>
                        <label>
                            <span>用户名: </span>
                            <input type="text" v-model="userInfo.username">
                        </label>
                        <label>
                            <span>昵称: </span>
                            <input type="text" v-model="userInfo.nickname">
                        </label>
                        <!-- <label>
                            <span>签名:</span>
                            <textarea autocomplete="off" placeholder="设置个性签名，更好的展现自己" ></textarea>
                        </label> -->
                        <!-- <label class="clearfix">
                            <span class="leftfix">性别:</span>
                            <el-radio v-model="radio" label="1" class="leftfix">女</el-radio>
                            <el-radio v-model="radio" label="2" class="leftfix">男</el-radio>
                        </label> -->
                        <label>
                            <span>邮箱: </span>
                            <input type="text" v-model="userInfo.email" placeholder="请填写qq 可选填">
                        </label>
                        <!-- <label>
                            <span>微信:</span>
                            <input type="text" value="" placeholder="请填写微信号 可选填">
                        </label> -->
                        <div class="button_foor">
                            <el-button type="primary" @click="getUpdate">确认更新</el-button>
                            <!-- <el-button type="primary">重置</el-button> -->
                        </div>
                    </div>
                
                <div></div>
                
                    </div>
                    <div class=" edit-main-right leftfix" v-if="isShow() == 2">
                        <div class="right-main">
                            <div class="right-main-1 clearfix">
                                <span class="leftfix">职业标签:</span>
                                <ul v-for="(item, id) in tags_1" :key="item.id" class="leftfix">
                                    <li >{{ item.text }}</li>
                                </ul>
                            </div>
                            <div class="right-main-1 clearfix">
                                <span class="leftfix">年龄标签:</span>
                                <ul v-for="(item, id) in tags_2" :key="item.id" class="leftfix">
                                    <li>{{ item.age }}</li>
                                </ul>
                            </div>
                            <div class="right-main-1 clearfix">
                                <span class="leftfix">个性标签:</span>
                                <ul v-for="(item, id) in tags_3 " :key="item.id" class="leftfix">
                                    <li>{{ item.text }}</li>
                                </ul>
                            </div>
                            <div class="right-main-1 clearfix">
                                <span class="leftfix">文学标签:</span>
                                <ul v-for="(item, id) in tags_4 " :key="item.id" class="leftfix">
                                    <li>{{ item.text }}</li>
                                </ul>
                            </div>
                            <div class="right-main-1 clearfix">
                                <span class="leftfix">爱好标签:</span>
                                <ul v-for="(item, id) in tags_5 " :key="item.id" class="leftfix">
                                    <li>{{ item.text }}</li>
                                </ul>
                            </div>
                            <el-button type="primary" style="margin-top: 10px;">保存</el-button>
                        </div>

                    </div>
                    <div class=" edit-main-right leftfix" v-if="isShow() == 3">
                        <div class="right-main">
                            <div class="right-main_3">
                                <span>旧密码：</span>
                                <input type="password" v-model="old_pwd" placeholder="请输入之前的密码">
                            </div>
                            <div class="right-main_3">
                                <span>新密码：</span>
                                <input type="paaword" v-model="new_pwd" placeholder="请输入要设置的密码">
                            </div>
                            <div class="right-main_3">
                                <span>重复密码：</span>
                                <input type="password" v-model="re_pwd" placeholder="重新输入密码，请保持一致">
                            </div>
                            <div class="right-main_3">
                                <el-button @click="updatePwd">确认修改</el-button>
                                <el-button @click="getClear">取消</el-button>
                            </div>
                        </div>
                    </div>
                    <div class=" edit-main-right leftfix" v-if="isShow() == 4">
                        <div class="right-main">
                            <h2 style="font-size: 30px;">尽情期待~</h2>
                        </div>
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
import axios from 'axios';

export default {
    name:'EditPerson',
    data(){
        return{
            userInfo: {},
            old_pwd: '',
            new_pwd: '',
            re_pwd: '',
            radio: '1',
            activeItemId:1,
            tags_1:[
                {id:1, text:'学生'},
                {id:2, text:'小编'},
                {id:3, text:'导演'},
                {id:4, text:'自媒体'},
                {id:5, text:'文学创作者'},
                {id:6, text:'青年'},
                {id:7, text:'打工人'},
                {id:8, text:'匿名'},
            ],
            tags_2:[
                {id:1, age:'80后'},
                {id:2, age:'90后'},
                {id:3, age:'00后'},
                {id:4, age:'10后'}
            ],
            tags_3:[
                {id:1, text:'爱猫'},
                {id:2, text:'爱狗'},
                {id:3, text:'奋斗'},
                {id:4, text:'乐观'},
                {id:5, text:'单身狗'},
                {id:6, text:'宅'},
                {id:7, text:'游戏'},
                {id:8, text:'爱生活'}
            ],
            tags_4:[
                {id:1, text:'台词'},
                {id:2, text:'话剧'},
                {id:3, text:'歌词'},
                {id:4, text:'诗词'},
                {id:5, text:'诗歌'},
                {id:6, text:'散文'},
                {id:7, text:'小说'}
            ],
            tags_5:[
                {id:1, text:'电影'},
                {id:2, text:'唱歌'},
                {id:3, text:'电视剧'},
                {id:4, text:'动漫'},
                {id:5, text:'综艺'},
                {id:6, text:'科技'},
                {id:7, text:'小说'},
                {id:8, text:'游戏'},
                {id:9, text:'购物'},
                {id:10, text:'养猫'},
                {id:11, text:'养狗'},
                {id:12, text:'运动'},
                {id:13, text:'旅游'}
            ],
            left_top_list:[
                {id:1, text:'基本信息'},
                {id:2, text:'标签设置'},
                {id:3, text:'更改密码'},
                {id:4, text:'更多设置'}
            ]
        };
    },
    methods:{
        toHome(){
            return this.$router.push({path:'/'}); 
        },
        isChoose(id){
            // console.log(id);
            this.activeItemId = id
        },
        isChooseItem(id){
            if(id === this.activeItemId){
                return true
            }
            return false
        },
        isShow(){
            return this.activeItemId
        },
        getUserInfo() {
            const token = localStorage.getItem('userToken');
            axios.get(this.$httpUrl + '/user/userInfo', { headers: {'Authorization': `${token}`, 'Content-Type':  'application/json'}})
            .then(res => {
                console.log(res);
                this.userInfo = res.data.data;
                console.log(this.userInfo);
            }).catch(err => {
                console.log(err);
                alert('请求用户信息失败');
            })
        },
        getUpdate() {
            // const token = localStorage.getItem('userToken');  
            if (!this.userInfo) {  
                console.error('userInfo is null or undefined');  
                return;  
            }  
            console.log(this.userInfo.username);
            console.log(this.userInfo.nickname);  
            console.log(this.userInfo.email);  
            axios.put(this.$httpUrl + '/user/update', {  
                // 假设这里只需要传递需要更新的字段  
                id: this.userInfo.id,
                username: this.userInfo.username,
                nickname: this.userInfo.nickname,
                email: this.userInfo.email
                
            }, {  
                headers: {  
                    // 'Authorization': `${token}`,  
                    'Content-Type': 'application/json'  
                }  
            })  
            .then(res => {  
                console.log(res); 
                alert("用户信息更新完成") 
                // 确保响应数据存在且格式正确  
                // if (res.data && res.data.data) {  
                //     this.userInfo = res.data.data;  
                //      console.log(this.userInfo);  
                // } else {  
                //     console.error('Unexpected response format', res.data);  
                // }  
            }).catch(err => {  
                console.log(err);  
                alert('请求用户信息失败');  
            });  
        },
        updatePwd() {
            console.log(this.old_pwd);
            console.log(this.new_pwd);
            console.log(this.re_pwd);
            const token = localStorage.getItem('userToken');
            axios.patch(this.$httpUrl + '/user/updatePwd', {
                // 假设这里只需要传递需要更新的字段  
                old_pwd: this.old_pwd,
                new_pwd: this.new_pwd,
                re_pwd: this.re_pwd,
            }, {  
                headers: {  
                    'Authorization': `${token}`,  
                    'Content-Type': 'application/json'  
                }  
            }).then(res => {
                console.log(res);
                alert("密码更新，请重新登录")
                localStorage.clear();
                this.$router.push({path:'/Login'})
            }).catch(err => {
                console.log(err);
            })
        },
        getClear() {
            this.old_pwd = '',
            this.new_pwd = '',
            this.re_pwd = ''
        }
    },
    created() {
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

/* #region 个人修改中心内容 */
.edit{
    padding-top:90px;
    background-color: #fafafa;
}
.edit .edit-main{
    width: 750px;
    height: 680px;
    background-color: white;
    border-radius: 10px;
    margin: auto;
}

.edit .edit-main .edit-main-left{
    width: 130px;
    height: 100%;
    background-color: white;
    border-radius: 10px;
}
.edit .edit-main .edit-main-right{
    width: 620px;
    height: 100%;
    /* background-color: purple; */
    border-radius: 10px;
}
.edit-main-left ul{
    text-align: center;
    border-right: 1px solid #f9f9f9;
}
.edit-main-left ul li {
    font-size: 15px;
    font-weight: 500;
    padding: 10px;
}
.edit-main-left ul li:nth-child(1){
    padding-top: 20px;
}
.edit-main-left ul li:hover{
    cursor: pointer;
    color: skyblue;
}

.edit-main-right .right-main{
    width: 470px;
    height: 625px;
    /* background-color: skyblue; */
    margin-left: 40px;
    margin-top: 30px;
}
/* .right-main span{
    font-size: 18px;
    font-weight: 700;
} */
.right-main img{
    width: 100px;
    height: 100px;
    display: inline-block;
    margin-left: 20px;
    background-size: cover;
}
.right-main label:nth-child(1){
    display: inline-block;
    margin-top: 20px;
    font-size: 18px;
    font-weight: 700;
    color: #606266;
}
.right-main label{
    display: block;
}
.right-main label:nth-child(2){
    font-size: 18px;
    font-weight: 700;
    color: #606266;
}
.right-main label:nth-child(2) input{
    color: black;
    padding: 8px;
    margin-left: 20px;
}
.right-main label:nth-child(3){
    font-size: 18px;
    font-weight: 700;
    color: #606266;
}
.right-main label:nth-child(3) textarea{
    overflow: auto;
    width: 300px;
    height: 50px;
    margin-top: 20px;
    margin-left: 20px;
}
.right-main label:nth-child(3) textarea:hover{
    border-color: skyblue;
}
.right-main label:nth-child(3) textarea:focus{
        border-color:  skyblue;
        outline: none;
}
.right-main label:nth-child(4){
    font-size: 18px;
    font-weight: 700;
    color: #606266;
    margin-top: 15px;

}
.right-main label:nth-child(4) .el-radio{
    margin-left: 20px;
    font-size: 14px;
    margin-top: 20px;
    font-weight: normal;
    color: black;
}
.right-main label:nth-child(n) span{
    font-size: 18px;
    font-weight: 700;
    color: #606266;
    margin-top: 15px;
}
.right-main label:nth-child(5) input{
    margin-left: 26px;
    font-size: 12px;
    color: #606266;
    padding: 10px;
    margin-top: 10px;
    width: 200px;
}
.right-main label:nth-child(6) input{
    margin-left: 20px;
    color: #606266;
    font-size: 12px;
    margin-top: 10px;
    padding: 10px;
    width: 200px;
}
.button_foor{
    margin-top: 60px;
    margin-left: 200px;
}
.right-main .right-main-1 span{
    font-size: 18px;
    font-weight: bolder;
    color: #606266;
    margin-top: 10px;
}
.right-main .right-main-1 ul li{
    font-size: 14px;
    padding: 7px;
    border-radius: 10px;
    color: rgb(104, 106, 106);
    margin:6px;
    border: 1px solid skyblue;
    transition: 0.1s linear;
}
.right-main .right-main-1 ul li:hover{
    cursor: pointer;
    color: skyblue;
}

.right-main_3 span{
    display: inline-block;
    margin-top: 20px;
    font-size: 16px;

}
.right-main_3 input{
    font-size: 12px;
    color: #606266;
    padding: 13px;


}
.right-main_3  .el-button{
    margin-top: 20px;
}
/* #endregion 个人修改中心内容 */


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
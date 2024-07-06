<template>
    <div class="home">
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
    <!-- 搜索区 -->
    <div class="search">
        <div class="search-con">
            <el-input v-model="einput" placeholder="请输入内容">
            </el-input>
            <el-button @click="$router.push({name: 'Search', query: { paramsName: einput }})" type="primary" round>搜索</el-button>
        </div>
    </div>

    <!-- 主导航栏区 -->
    <div class="main-nav">
        <div class="container clearfix">
            <!-- 左侧分类区 -->
            <div class="main-nav-left leftfix">
                <ul class="main-nav-left-ul clearfix">
                    <li>热门分类</li>
                    <li><a href="#">查看更多&gt;</a></li>
                </ul>
                <ul class="main-nav-left-classify clearfix">
                    <li v-for="(item, index) in classify" :key="index" @click="getCName(classify[index])">{{item}}</li>
                </ul>
            </div>
            <!-- 右侧热门区 -->
            <div class="main-nav-right rightfix">
                <ul class="main-nav-right-ul clearfix">
                    <li>最新文章</li>
                    <li><a href="">查看更多&gt;</a></li>
                </ul>
                <ul class="main-nav-right-classfiy" v-for="(item, index) in newsArticle" :key="index">
                    <li @click="$router.push({name: 'Detail', query: { articleId: newsArticle[index].id }})">{{ index+1 }}.<a>{{ item.title }}</a></li>
                    <!-- <li>2.<a href="#">是谁已经预购好十二个月的浪漫XXXXXXXXXX XXXXXXXXXX</a></li>
                    <li>3.<a href="#">一些高级简单的短句（第一辑）</a></li>
                    <li>4.<a href="#">用一句话形容MBTI十六型人格XXXXXXXXXXXXXXXXX</a></li>
                    <li>5.<a href="#">那些刻骨铭心意难平的be文学XXXXXXXXXXXXXXX</a></li>
                    <li>6.<a href="#">句句不提想念，句句都是想念XXXXXXXXXXXXXXXX</a></li>
                    <li>7.<a href="#">五一劳动节文案大全###########XXXXXXXXXX</a></li> -->
                </ul>
            </div>
        </div>
    </div>

    <!-- 楼层一 -->
    <div class="main-content">
        <div class="container">
            <!-- 第一个楼层一整块 -->
            <div class="main-content_1">
                <!-- 上半部分 -->
                <div class="content_1_top">
                    <ul><li>精选推荐</li></ul>
                </div>
                <!-- 下面四个小板块 -->
                <div class="content_1_bottom">
                    <div class="item1">
                        <div class="img1">电影台词</div>
                        <ul v-for="(item, index) in dyList" :key="index">
                            <li @click="toDetail(dyList[index].id)"><a>{{ item.title }}</a></li>
                            <!-- <li><a href="#">《肖申克的救赎》中的经典台词</a></li>
                            <li><a href="#">《心灵奇旅》中的经典台词</a></li>
                            <li><a href="#">《闪灵》中的经典台词</a></li>
                            <li><a href="#">《苏州河》中的经典台词</a></li>
                            <li><a href="#">《热辣滚烫》中的经典台词</a></li>
                            <li><a href="#">《第二十条》中的经典台词</a></li> -->
                        </ul>
                    </div>
                    <div class="item1">
                        <div class="img1">书籍摘录</div>
                        <ul v-for="(item, index) in sjList" :key="index">
                            <li @click="toDetail(sjList[index].id)"><a>{{ item.title }}</a></li>
                            <!-- <li><a href="#">《月亮和六便士》的摘抄</a></li>
                            <li><a href="#">《活着》的摘抄</a></li>
                            <li><a href="#">《云雀叫了一整天》的摘抄</a></li>
                            <li><a href="#">《撒哈拉的故事》的摘抄</a></li>
                            <li><a href="#">《局外人》的摘抄</a></li>
                            <li><a href="#">《十四行诗》的摘抄</a></li> -->
                        </ul>
                    </div>
                    <div class="item1">
                        <div class="img1">问候祝福</div>
                        <ul v-for="(item, index) in whList" :key="index">
                            <li @click="toDetail(whList[index].id)"><a>{{ item.title }}</a></li>
                            <!-- <li><a href="#">不落俗套的新年问候</a></li>
                            <li><a href="#">诗词里的祝福短句</a></li>
                            <li><a href="#">写给自己的生日祝福语</a></li>
                            <li><a href="#">可以写在卡片上的祝福短句</a></li>
                            <li><a href="#">意境绝美的毕业致谢文案</a></li> -->
                        </ul>
                    </div>
                    <div class="item1">
                        <div class="img1">品牌文案</div>
                        <ul v-for="(item, index) in ppwaList" :key="index">
                            <li @click="toDetail(ppwaList[index].id)"><a>{{ item.title }}</a></li>
                            <!-- <li><a href="#">48条品牌写的冬日文案</a></li>
                            <li><a href="#">那些深入人心的品牌文案</a></li>
                            <li><a href="#">【Kindle】20句超经典广告语</a></li>
                            <li><a href="#">富有东方美学的品牌文案</a></li>
                            <li><a href="#">创意满分的品牌文案</a></li> -->
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- <div class="seList" @click="">
        <div style="font-size: 16px;margin-left: 5px;font-weight: bold; border-bottom: 1px solid gray;">句子列表</div>
        <div style="width: 600px; margin-left: 300px;
                /* background-color: aliceblue; */
                margin-top: 20px;
                background-color: #fff" 
                v-for="(item, index) in articleVague.items" :key="index">
            <div style="border-bottom: 1px solid gray; 
                    /* background-color: red;  */
                    /* width: 100px;  */
                    /* height: 30px; */
                    margin-left: 400px;
                    /* margin-top: 30px; */
                    margin-bottom: 30px;
                    display: flex;
                    padding: 10px 20px;">
                <img style="width: 40px; height: 40px;" src="../assets/item5.png" />
                <span style="font-size: 20px; padding-left: 10px;">{{ item.nickname }}</span>
            </div>
            <div style="border-bottom: 1px solid #f9f9f9; margin-bottom: 10px;">
                <span style="display: flex; 
                        align-items: center; 
                        justify-content: center;
                        height: 200px;
                        font-size: 20px;
                        padding: 100px 100px;" @click="getSteDetail(articleVague.items[index].id)">{{ item.title }}</span>
            </div>
        </div>
    </div> -->

    <!-- 楼层二 -->
    <div class="main-content2">
        <div class="container">
            <!-- 楼层二一整块 -->
            <div class="main-content_2">
                <!-- 左侧 -->
                <div class="content-2-left">
                    <!-- 左侧上边缘 -->
                    <div class="content-2-left-top">
                        <ul class="clearfix">
                            <li>专辑</li>
                            <li><a href="#">查看更多&gt;</a></li>
                        </ul>
                    </div>
                    <!-- 左侧下边缘 -->
                    <div class="content-2-left-bottom">
                        <div class="item">
                            <div class="img_2">
                            </div>
                            <div class="text_2">
                                <span>名人笔下的情话语录</span>
                                <ul>
                                    <li>来自名人作家笔下的惊艳情话，句句浪漫，令人心动💓</li>
                                </ul>
                            </div>
                        </div>
                        <div class="item">
                            <div class="img_2">
                            </div>
                            <div class="text_2">
                                <span>思恋语录</span>
                                <ul>
                                    <li>来自名人作家笔下的惊艳情话，句句浪漫，令人心动💓</li>
                                </ul>
                            </div>
                        </div>
                        <div class="item">
                            <div class="img_2">
                            </div>
                            <div class="text_2">
                                <span>人民日报金局摘抄</span>
                                <ul>
                                    <li>冰山露出海面的仅仅是一角，而绝大部分隐没于海面之下。</li>
                                </ul>
                            </div>
                        </div>
                        <div class="item">
                            <div class="img_2">
                            </div>
                            <div class="text_2">
                                <span>陪你走过人生低谷的句子</span>
                                <ul>
                                    <li>总有一些文字，可以触动到你内心最柔软的角落。那些无人在意的时光，总能在日复一日的努力下，开出花来。</li>
                                </ul>
                            </div>
                        </div>
                        <div class="item">
                            <div class="img_2">
                            </div>
                            <div class="text_2">
                                <span>文艺宝藏短句</span>
                                <ul>
                                    <li>与人间寥寥月色，长眠一场。</li>
                                </ul>
                            </div>
                        </div>
                        <div class="item">
                            <div class="img_2">
                            </div>
                            <div class="text_2">
                                <span>诗词摘抄</span>
                                <ul>
                                    <li>秋水共长天一色，落霞与孤鹜齐飞</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- 右侧部分 -->
                <div class="content-2-right">
                    <div class="content-2-right-top">
                        <ul>
                            <li>最新动态</li>
                        </ul>
                    </div>
                    <div class="content-2-right-bottom" v-for="(item, index) in newsList" :key="index">
                        <span>0{{ index+1 }}. {{ item.title }}</span>
                        <ul class="clearfix">
                            <li class="leftfix">{{ item.nickname }}喜欢了该句子</li>
                            <li class="rightfix">{{ item.likeTime }}</li>
                        </ul>
                        <!-- <span>02.你聚焦目标，你就只会遇到目标上的问</span>
                        <ul class="clearfix">
                            <li class="leftfix">天生财迷921喜欢了该句子</li><li class="rightfix">11-24</li>
                        </ul>
                        <span>03.青春少年的代名词，不是堕落，颓废，摆</span>
                        <ul class="clearfix">
                            <li class="leftfix">天生财迷921喜欢了该句子</li><li class="rightfix">11-24</li>
                        </ul>
                        <span>04.不想让你为难左右 我不做以爱之名的凶手</span>
                        <ul class="clearfix">
                            <li class="leftfix">天生财迷921喜欢了该句子</li><li class="rightfix">11-24</li>
                        </ul>
                        <span>05.我们之间 帧帧瞬间</span>
                        <ul class="clearfix">
                            <li class="leftfix">天生财迷921喜欢了该句子</li><li class="rightfix">11-24</li>
                        </ul> -->
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- 楼层三 -->
    <div class="main-content3">
        <div class="container">
            <div class="main-content3-body">
                <!-- 上半部分 -->
                <div class="content3-top">
                    <ul class="clearfix">
                        <li>名人</li>
                        <li><a href="#">查看更多&gt;</a></li>
                    </ul>
                </div>
                <!-- 下半部分 -->
                <div class="content3-bottom">
                    <ul class="clearfix">
                        <li v-for="(item, index) in classify_3" :key="index">{{item}}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- 楼层四 -->
    <div class="main-content4">
        <div class="container">
            <div class="main-content4-body">
                <div class="content4-top">
                    <ul>
                        <li>经典语录推荐</li>
                    </ul>
                </div>
                <div class="content4-bottom">
                    <ul class="clearfix">
                        <li v-for="(item, index) in classfiy_4" :key="index">{{ item }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <!-- footer 页脚 -->
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
    
    name:'Home',
    data(){
        return{
            user: {},
            pageSize: 100,
            pageNum: 1,
            articleVague: {},
            isLogin:false,
            einput: '',
            searchIcon: require('../assets/search.png'),
            classify: [],
            newsArticle: {},
            dyList: {},
            sjList: {},
            ppwaList: {},
            whList: {},
            newsList: {},
            classify_3:["路遥","简嫃","汪曾祺","村上春树","白落梅","莎士比亚","王尔德","宫崎骏","贾平凹","钱钟书","泰戈尔","毛姆",
                        "史铁生","罗曼罗兰","毕淑敏","张爱玲","尼采","余秋雨","南派三叔","王小波","三毛","北岛","鲁迅","木心",
                        "东野圭吾","徐志摩","余光中","林徽因","新海诚","郭沫若","莫言",],
            classfiy_4:["关于情感的句子","关于自由的句子","关于时光的句子","关于智慧的句子","关于爱国的句子","关于少年的句子",
                        "关于历史的句子","关于景物的句子","关于失眠的句子","关于离别的句子","关于温暖的句子","关于孤独的句子","关于正念的句子",
                        "关于佛系的句子","关于耐心的句子","关于迷茫的句子","关于鼓励的句子","关于情商的句子","关于童年的句子","关于爱自己的句子",
                        "关于高考的句子","关于目标的句子","关于人间清醒的句子","关于旅行的句子","关于婚姻的句子","关于意难平的句子","关于单身的句子",
                        "关于减肥的句子"
                    ]
        }
    },
    methods:{
        // getInfo() {
        //     // console.log(this.einput);
        //     return this.$router.push({ name: 'Search', params: {paramsName: this.einput} })
        // },
        toLogin(){
            return this.$router.push({path:'/Login'});
        },
        toRegister(){
            return this.$router.push({path:'/Register'});
        },
        toPersonCenter(){
            console.log('去个人中心');
            return this.$router.push({path:'/PersonCenter'});
        },
        islogin() {
            this.user = JSON.parse(localStorage.getItem('userToken'));
            console.log(this.user);
            this.isLogin = this.user != null;
            console.log(this.isLogin);
        },
        //分类
        getCategory() {
            const token = localStorage.getItem('userToken');
            const headers = token ? {
                'Authorization': `Bearer ${token}`
            } : {};
            axios.get(this.$httpUrl + '/category', { headers: headers }).then(res => {
                console.log(res);
                res.data.data.forEach(item => {
                    this.classify.push(item.categoryName);
                });
                console.log(this.classify);
            }).catch(err => {
                alert('请求失败！')
            })
        },
        getArticleVague() {
            const params = {
                pageSize: this.pageSize, 
                pageNum: this.pageNum
            }
            axios.get(this.$httpUrl + '/article', {params: params}).then(res => {
                console.log(res);
                this.articleVague = res.data.data;
                console.log(this.articleVague);
            }).catch(err => {
                console.log(err);
                alert('请求失败')
            })
        },
        getnewArticle() {
            axios.get(this.$httpUrl + '/article/articlebynew').then(res => {
                console.log(res);
                this.newsArticle = res.data.data;
                console.log(this.newsArticle);
            }).catch(err => {
                console.log(err);
                alert('请求失败');
            })
        },
        getdy() {
            axios.get(this.$httpUrl + '/article/getdy').then(res => {
                console.log(res);
                this.dyList = res.data.data;
                console.log(this.dyList);
            }).catch(err => {
                alert('请求失败')
            })
        },
        getsj() {
            axios.get(this.$httpUrl + '/article/getsj').then(res => {
                console.log(res);
                this.sjList = res.data.data;
                console.log(this.sjList);
            }).catch(err => {
                alert('请求失败')
            })
        },
        getppwa() {
            axios.get(this.$httpUrl + '/article/getppwa').then(res => {
                console.log(res);
                this.ppwaList = res.data.data;
                console.log(this.ppwaList);
            }).catch(err => {
                alert('请求失败')
            })
        },
        getwh() {
            axios.get(this.$httpUrl + '/article/getwh').then(res => {
                console.log(res);
                this.whList = res.data.data;
                console.log(this.whList);
            }).catch(err => {
                alert('请求失败')
            })
        },
        getnews() {
            axios.get(this.$httpUrl + '/like/list').then(res => {
                console.log(res)
                this.newsList = res.data.data;
                console.log(this.newsList);
            }).catch(err => {
                alert('请求失败')
                console.log(err);
            })
        },
        getCName(e) {
            console.log(e);
            this.$router.push({ name: 'Search', query: { paramsName: e}})
        },
        toDetail(e) {
            console.log(e);
            this.$router.push({name: 'Detail', query: {articleId: e}})
        }
        // refresh() {
        //     localStorage.clear();
        // }
    },
    created() {
        this.islogin();
        this.getCategory();
        this.getArticleVague();
        this.getnewArticle();
        this.getdy();
        this.getsj();
        this.getppwa();
        this.getwh();
        this.getnews();
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

.header-topbar-li-li  {
    display: none;
    background-image: url('../assets/flower1.jpg');

}
/* #endregion 头部导航区 结束*/

/* #region 搜索框 */

.search{
    padding-top: 96px;
    text-align: center;
    padding-bottom: 9px;
    background-color:#f9f9f9;
}
.search-con {
    margin: 0 auto;
    display: flex;
    width: 400px;
}
::v-deep .search .el-input__inner{
    width: 300px;
    border-radius: 30px;
    display: inline-block;
}
/* #endregion搜索框 */


/* #region 主导航栏区 */
.main-nav{
    background-color: #f9f9f9;
}
.main-nav .main-nav-left{
    width: 840px;
    height: 300px;
    background-color: #fff;
    padding: 10px;
    border-radius: 10px;
    box-sizing: border-box;
}
.main-nav-left-ul{
    border-bottom:1px solid #c5c1c1;
}
.main-nav-left-ul li{
    float: left;
    font-size: 16px;
    font-weight: bold;

}
.main-nav-left-ul li:nth-child(2){
    float: right;
    font-size: 12px;
    color: gray;
}
.main-nav-left-classify li{
    cursor: pointer;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    margin: 5px;
    font-weight: 500;
    color: #444;
    padding: 6px 16px;
    border-radius: 4px;
    border: 1px solid #e6e8ea;
    float: left;
}
.main-nav-left-classify li:hover{
    color: skyblue;
    border-color: skyblue;
}
.main-nav .main-nav-right{
    width: 340px;
    height: 300px;
    padding: 10px;
    border-radius: 10px;
    background-color: white;
    box-sizing: border-box;
}
.main-nav-right-ul li{
    float:left;
    font-size: 16px;
    font-weight: bold;
}
.main-nav-right-ul li:nth-child(2){
    float: right;
    font-size: 12px;
    color: gray;
}
.main-nav-right-ul{
    
    border-bottom:1px solid #c5c1c1;
}
.main-nav-right-classfiy{
    display: flex;
    /* 变换主轴方向 让元素向下排列 */
    flex-direction: column;
}
.main-nav-right-classfiy li{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    margin-top: 12px;

}
.main-nav-right-classfiy li a{
    color:#444;
    font-size: 14px;
    transition: 0.1s linear;
}
.main-nav-right-classfiy li:hover a{
    color: skyblue;
    cursor: pointer;
}
/* #endregion 主导航栏区 */

/* #region 楼层一 */
.main-content{
    padding-top: 10px;
    background-color: #fafafa;
}
.main-content .main-content_1 .content_1_top ul li{
    font-size: 14px;
    font-weight: bold;
    border-bottom: 1px solid #c5c1c1;
}
.main-content_1{
    width: 1170px;
    height: 400px;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
    background-size: cover;
    
}
.main-content_1 .content_1_bottom{
    margin:10px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.main-content_1 .content_1_bottom .item1{
    width: 270px;
    height: 378px;
    border-radius: 10px;
    border: 1px solid skyblue;
    box-shadow: 0px 0px 10px skyblue;
    background-color: #fff;
    display: flex;
    flex-direction:column;
    align-items: center;
}
.main-content_1 .content_1_bottom .item1 ul li{
    padding-top: 6px;
    text-overflow: ellipsis;
}
.main-content_1 .content_1_bottom .item1 ul li a{
    align-items: flex-start;
    font-size: 16px;
    color: #444;
    transition: 0.2s linear;
}
.main-content_1 .content_1_bottom .item1 ul li a:hover{
    color: skyblue;
}
.main-content_1 .content_1_bottom .item1:nth-child(n) .img1:hover{
    font-size: 56px;
    text-shadow: 0px 0px 20px black;
}
.main-content_1 .content_1_bottom .item1:nth-child(1) .img1{
    margin: 10px 10px;
    width: 250px;
    height: 140px;
    border-radius: 10px;
    background-size: cover;
    background-image: url('../assets/flower4.jpg');
    font-size: 48px;
    font-weight: bolder;
    text-align: center;
    line-height: 140px;
    color: white;
    cursor: pointer;
    transition: 0.2s linear;
    font-family: "情书字体";
}
.main-content_1 .content_1_bottom .item1:nth-child(2) .img1{
    margin: 10px 10px;
    width: 250px;
    height: 140px;
    border-radius: 10px;
    background-size: cover;
    background-image: url('../assets/flower1.jpg');
    font-size: 48px;
    font-weight: bolder;
    text-align: center;
    line-height: 140px;
    color: white;
    cursor: pointer;
    transition: 0.2s linear;
    font-family: "情书字体";
}
.main-content_1 .content_1_bottom .item1:nth-child(3) .img1{
    margin: 10px 10px;
    width: 250px;
    height: 140px;
    border-radius: 10px;
    background-size: cover;
    background-image: url('../assets/flower3.jpg');
    font-size: 48px;
    font-weight: bolder;
    text-align: center;
    line-height: 140px;
    color: white;
    cursor: pointer;
    transition: 0.2s linear;
    font-family: "情书字体";
}
.main-content_1 .content_1_bottom .item1:nth-child(4) .img1{
    margin: 10px 10px;
    width: 250px;
    height: 140px;
    border-radius: 10px;
    background-size: cover;
    background-image: url('../assets/flower2.jpg');
    font-size: 48px;
    font-weight: bolder;
    text-align: center;
    line-height: 140px;
    color: white;
    cursor: pointer;
    transition: 0.2s linear;
    font-family: "情书字体";
}
/* #endregion 楼层二 */

/* #region 楼层二 */
.main-content2{
    padding-top: 10px;
    background-color: #fafafa;
}
.main-content2 .main-content_2{
    display: flex;
    justify-content: flex-start;

}
.main-content2 .content-2-left{
    width: 840px;
    height: 416px;
    padding: 10px;
    border-radius: 10px;
    background-color: #fff;
}
.content-2-left .content-2-left-top ul{
    border-bottom: 1px solid #c5c1c1;
}
.content-2-left .content-2-left-top ul li{
    font-size: 16px;
    font-weight: bold;
    float: left;
    padding: 6px;
}
.content-2-left .content-2-left-top ul li:nth-child(2){
    font-size: 12px;
    font-weight: bold;
    float: right;
}
.main-content_2 .content-2-left .content-2-left-bottom{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-content: space-evenly;
}
.main-content_2 .content-2-left .content-2-left-bottom .item:hover{
    box-shadow: 0px 0px 10px skyblue;
    transform: scale(1.02);
}
.main-content_2 .content-2-left .content-2-left-bottom .item{
    width: 400px;
    height: 110px;
    border: 1px solid skyblue;
    border-radius: 10px;
    margin-right: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    background-color: #fff;
    display: flex;
    justify-content: flex-start;
    cursor: pointer;
    transition: 0.2s linear;

}
.main-content_2 .content-2-left .content-2-left-bottom .item:nth-child(2n){
    margin-right: 0;
}
.main-content_2 .content-2-left .content-2-left-bottom .item:nth-child(1) .img_2{
    width: 100px;
    height: 100%;
    display: inline-block;
    border-radius: 10px;
    background-size: cover;
    background-image: url('../assets/item1.jpg');
}
.main-content_2 .content-2-left .content-2-left-bottom .item:nth-child(2) .img_2{
    width: 100px;
    height: 100%;
    display: inline-block;
    border-radius: 10px;
    background-size: cover;
    background-image: url('../assets/item2.jpg');
}
.main-content_2 .content-2-left .content-2-left-bottom .item:nth-child(3) .img_2{
    width: 100px;
    height: 100%;
    display: inline-block;
    border-radius: 10px;
    background-size: cover;
    background-image: url('../assets/item3.jpg');
}
.main-content_2 .content-2-left .content-2-left-bottom .item:nth-child(4) .img_2{
    width: 100px;
    height: 100%;
    display: inline-block;
    border-radius: 10px;
    background-size: cover;
    background-image: url('../assets/flower1.jpg');
}
.main-content_2 .content-2-left .content-2-left-bottom .item:nth-child(5) .img_2{
    width: 100px;
    height: 100%;
    display: inline-block;
    border-radius: 10px;
    background-size: cover;
    background-image: url('../assets/item5.png');
}
.main-content_2 .content-2-left .content-2-left-bottom .item:nth-child(6) .img_2{
    width: 100px;
    height: 100%;
    display: inline-block;
    border-radius: 10px;
    background-size: cover;
    background-image: url('../assets/item6.png');
}
.content-2-left-bottom .text_2{
    margin-left: 10px;
    width: 280px;
    height: 100px;
}
.content-2-left-bottom .text_2 span{
    font-size: 16px;
    font-weight: bold;
}
.content-2-left-bottom .text_2 ul{
    margin-top: 10px;
    font-size: 14px;
}

.main-content2 .content-2-right{
    width: 340px;
    height: 436px;
    margin-left: 10px;
    padding: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    background-color: #fff;
}
.main-content2 .content-2-right .content-2-right-top ul{
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #c5c1c1;
}
.main-content2 .content-2-right .content-2-right-bottom{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
}
.main-content2 .content-2-right .content-2-right-bottom span{
    font-size: 16px;
    font-weight: bold;
}
.main-content2 .content-2-right .content-2-right-bottom span:hover{
    cursor: pointer;
}
.main-content2 .content-2-right .content-2-right-bottom ul{
    padding-top: 5px;
    height: 50px;
    border-bottom: 2px dashed #c5c1c1;

}
.main-content2 .content-2-right .content-2-right-bottom ul:last-child{
    border: 0;
}
.main-content2 .content-2-right .content-2-right-bottom ul li{
    line-height: 50px;
}
.main-content2 .content-2-right .content-2-right-bottom ul:hover{
    cursor: pointer;
}
/* #endregion 楼层二结束 */

/* #region 楼层三 */
.main-content3{
    padding-top: 10px;
    background-color: #fafafa;
}

.main-content3 .main-content3-body{
    width: 100%;
    background-color: #fff;
    box-sizing: border-box;
    border-radius: 10px;
    padding: 10px;
    height: 210px;
}

.main-content3 .main-content3-body .content3-top ul{
    border-bottom: 1px solid #c5c1c1;
}
.main-content3 .main-content3-body .content3-top ul li{
    float: left;
    font-size: 16px;
    font-weight: bold;
}
.main-content3 .main-content3-body .content3-top ul li:last-child{
    font-size: 14px;
    float: right;
}
.main-content3 .main-content3-body .content3-bottom ul li{
    float: left;
    padding: 10px 16px;
    font-size: 14px;
    margin: 8px;
    border-radius: 4px;
    border: 1px solid #e6e8ea;
}
.main-content3 .main-content3-body .content3-bottom ul li:hover{
    color: skyblue;
    border-color: skyblue;
    cursor: pointer;
}
/* #endregion 楼层三 end*/

/* #region 楼层四 */
.main-content4{
    padding-top: 10px;
    background-color: #fafafa;
}

.main-content4 .main-content4-body{
    width: 100%;
    height: 300px;
    box-sizing: border-box;
    padding: 10px;
    background-color: #fff;
    border-radius: 10px;
}
.main-content4 .main-content4-body .content4-top ul{
    font-size: 16px;
    font-weight: bold;
    border-bottom: 1px solid #c5c1c1;
}
.main-content4 .main-content4-body .content4-bottom ul li{
    float: left;
    font-size: 14px;
    margin: 10px 13px;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #e6e8ea;
    cursor: pointer;
}
.main-content4 .main-content4-body .content4-bottom ul li:hover{
    border-color: skyblue;
    color: skyblue;
}
/* #endregion 楼层四结束 */

/* #region footer  */
.footer{
    padding: 20px;
    background-color: #f9f9f9;
}
.footer .foonter-main{
    height: 300px;
    box-sizing: border-box;
    background-color: #343434;
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
    color: white;
    cursor: pointer;
}
.footer .foonter-main .footer-top .footer-item ul li{
    padding-top: 10px;
}
.footer .foonter-main .footer-top .footer-item ul li a{
    font-size: 14px;
    color: white;
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
    color: white;
    font-size: 16px;
}
.seList {
    width: 1200px;
    height: 100%;
    /* background-color: pink; */
    margin: 20px 140px;
    /* border: 1px solid gray; */
    background-color: #f9f9f9;
}
/* #endregion footer end */
</style>
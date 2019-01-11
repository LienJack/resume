<template>
  <article>
    <div class="wrap" id="wrap">

      <!-- item-1 -->

      <div class="item item-1">
        <canvas id="starCanvas" class="canvas-star"></canvas>
        <div class="box">
          <img class="img-alice float-down" src="static/alice.png">
          <div class="float-down">
            <h2>lien</h2>
            <h4>个人简历</h4>
          </div>
          <footer class="float-up">
            <p>邮箱 <span>1947568044@qq.com</span></p>
            <p>电话 <span>18819467289</span></p>
          </footer>
        </div>
      </div>

      <!-- item-2 -->

      <div class="item item-2">
        <div class="box column">
          <img src="static/school.svg" class="school float-down">
          <img src="static/cloud1.svg" class="cloud1 fade">
          <img src="static/cloud2.svg" class="cloud2 fade">
          <div class="column">
            <div class="float-up">
              <h3 class="title-h2">教育背景</h3>
              <h4 class="title-h3">华南农业大学（本科）</h4>
              <h4 class="title-h3">电子信息工程</h4>
              <h4 class="title-h3">2013-2017</h4>
            </div>
          </div>
        </div>
      </div>
  
      <div class="item item-3">
        <div class="box">
          <div class="column company float-up">
            <div class="company-logo">
              <img src="static/xingfuLogo.png">
            </div>
            <div class="company-job">
              <h4>幸福网络-前端工程师</h4>
              <div>时间：2018年4月-至今</div>
                <ol>
                  <li>
                    <a href="">四川公安出入境</a>、
                    <a href="">泸州公安</a>、
                    <a href="">四川邮政EMS</a> 等公众号的功能迭代和维护。
                  </li>
                  <li>将旧项目jQuery用Vue重构</li>
                  <li>编写公共组件。
                    <router-link to="/comGroup">点击查看</router-link>
                  </li>
                </ol>
            </div>
          </div>

          <div class="column company float-up delay-1">
            <div class="company-logo">
              <img src="static/ccLogo.png" >
            </div>
            <div class="company-job">
              <h4>网易游戏CC语音-直播运营</h4>
              <p>时间:2016年4月-2017年4月</p>
              <div>
                <ol>
                  <li>
                    活动视频前期拍摄，后期剪辑、调色和特效的视频制作<strong>共53部视频</strong>
                  </li>
                  <li>
                    电竞比赛的分镜脚本、舞台搭建、现场舞台控制、后期活动视频回顾剪辑<strong>8场大型活动和87场小型活动</strong>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- <div class="item item-4">
              <div class="box column">
                  <div>基本技能</div>
                  <div id="echarts-tree" style="height:80vh; width:100vw"></div>
              </div>
          </div> -->
  
      <div class="item item-4">
        <div class="box column">
          <h3 class="float-down">专业技能</h3>
          <div id="echarts-radar" style="height:300px; width:300px;" class="float-down delay-1" ></div>
          <div class="float-up delay-2">
            <ul>
              <li>具有扎实的JavaScript基础，熟练使用ES6+，喜欢分享，可见<a href="https://lienjack.github.io/Blog/">个人知识库</a>。</li>
              <li>喜欢挑战挑战自己、刻意练习。有阅读源码和模仿造轮子的习惯。</li>
            </ul>
          </div>
        </div>
      </div>
  
      <div class="item item-5">
        <div class="box column">
          <p class="float-up">点击左上角<i class="material-icons" style="font-size:18px;">settings</i>查看</p>
          <ul>
            <li class="float-up">
              <h4>组件库</h4>
              <p>个人编写的公用的vue组件</p>
            </li>
            <li class="float-up delay-1">
              <h4>知识库</h4>
              <p>个人的blog，里面有对JS,编写组件的心得</p>
            </li>
            <li class="float-up delay-2">
              <h4>个人经历</h4 >
              <p>过去个人的心路历程，可以更深了解我。</p>
            </li>
            <li class="float-up delay-3">
              <h4>小游戏</h4>
              <p>用canvas简单模拟了FlyBird</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="item item-6">
        <div class="box">
          <h3 class="float-up">联系方式</h3>
          <ul>
            <li class="float-up delay-1">
              <h4>微信</h4>
              <img src="static/weixin.png" alt="">
            </li>
            <li class="float-up delay-2"> 
              <h4>qq</h4>
              <img src="static/qq.png" alt="">
            </li>
            <li class="float-up delay-3">
              <h4>邮箱</h4>
              <p>1947568044@qq.com</p>
            </li>
            <li class="float-up delay-4">
              <h4>电话</h4>
              <p>18819467289</p>
            </li>
          </ul>
        </div>
        
      </div>
    </div>
  
  </article>
</template>

<script>
  // import 'assets/css/resume.css'
  
  import iSlider from "assets/frame/scroll";
  
  import showCanvas from "./canvas.js";
  
  import {
  
    radarOption,
  
    treeOption
  
  } from "config/echart.config.js";
  
  
  
  var echarts = require("echarts");
  
  export default {
  
    mounted() {
  
      // 滑动
  
      var that = this;
  
      var myslider = new iSlider({
  
        wrap: "#wrap",
  
        item: ".item",
  
        onslide: function(index) {
  
          that.updateEchart(index);
  
        }
  
      });
  
  
  
      this.updateEchart(myslider.index);
  
    },
  
    data() {
  
      return {
  
        isShowSlide: true,
  
        myslider: null
  
      };
  
    },
  
    methods: {
  
      showRadar() {
  
        var radar = echarts.init(document.getElementById("echarts-radar"));
  
        radar.setOption(radarOption);
  
      },
  
      showTree() {
  
        var tree = echarts.init(document.getElementById("echarts-tree"));
  
        tree.setOption(treeOption);
  
      },
  
      updateEchart(index) {
  
        index === 0 && showCanvas();
  
        // index === 3 && this.showTree()
  
        index === 3 && this.showRadar();
  
      }
  
    }
  
  };
</script>
<style scoped>
  @import url("./main.css");
</style>






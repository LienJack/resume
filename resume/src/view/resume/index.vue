<template>
  <article>
    <div class="wrap" id="wrap">
        <div class="item item-1">
            <canvas id="starCanvas" class="canvas-star"></canvas>
            <div class="box column">
               <img class="img-alice float-down" src="static/alice.png" alt="" srcset="">
               <div class="title float-down">
                    <h1>lien</h1>
                    <h3>个人简历</h3>
               </div>
            <footer class="float-up">
                <p>邮箱 <span>1947568044@qq.com</span></p>
                <p>微信 <span>blackofsnow</span></p>
            </footer>
            </div>
           
        </div>

        <div class="item item-2">
            <div class="box">
                <h1 class="hide">救星驾到 秒变高富帅秘诀 </h1>
                <div class="mod_container">
                    <p class="sprite text_1"></p>
                    <p class="sprite text_2"></p>
                    <div class="sprite scene"></div>
                </div>
            </div>
        </div>


    </div>

    <!-- 加载提示 _S -->
    <div class="global">
        <div class="slider"><span class="sprite_global"></span></div>
    </div>
    <div class="mod_loading" id="loading" style="display:none">
        <div class="content">
            <div class="progress"><span id="progress_bg" style="width:0;"></span></div>
            <p>Loading...</p>
        </div>
    </div>
    <!-- 加载提示 _E -->
    <audio autoplay="" style="height:0;width:0;display:none" ></audio>
    <!-- 播放状态 _S -->
    <!-- btn_pause为暂停状态 -->
    <div class="sprite_global btn_play" id="J_btnMusic" style="display:none"><i class="sprite_global"></i></div>
    <!-- 播放状态 _E -->
    <!-- 滑块 _E -->
    <div class="m_share" style="display:none;" id="shareLayer">
     
        <!--这里的箭头指向要做判断，不同的平台指向不同-->
        <!--箭头向上-->
        <!-- <img id="shareimgup" src="http://imgcache.qq.com/mediastyle/mobile/event/20140318_ceremony_live/img/share_top.png?max_age=2592000" class="top" alt="点击上方分享按钮分享"/> -->
        <!--箭头向下-->
        <!-- <img id="shareimgdown" src="http://imgcache.qq.com/mediastyle/mobile/event/20140318_ceremony_live/img/share_bottom.png?max_age=2592000" class="bottom" alt="点击下方分享按钮分享"  style="display:none;"/> -->
    </div>
   
  </article>
</template>

<script>
// import 'assets/css/resume.css'
import iSlider from 'assets/frame/scroll'
import showCanvas from './canvas.js'
export default {
  mounted () {
    var myslider=new iSlider({
    wrap:'#wrap',
    item:'.item',
    onslide:function (index) {
        if (index == 2) {
            document.getElementById('J_joinNum').innerHTML=parseInt(Math.random()*10000);
        }
    }
});
// console.info(myslider)
showCanvas()
  },
  data() {
      return {
          isShowSlide: true
      }
  },
  methods: {
    //   showSlideToggle() {
    //       this.isShowSlide = !this.isShowSlide
    //       console.log("1")
    //   }
  }
}
</script>
<style scoped>
article{
  height: 100vh;
}

.box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    position: relative;
}
.float-down {
    opacity: 0;
    transform: translate3d(0,-30px,0)
}
.play .float-down {
    opacity: 1;
    transform: translate3d(0,-0,0);
    transition: all 1s ease-out;
}
.float-up {
    opacity: 0;
    transform: translate3d(0,30px,0)
}
.play .float-up {
    opacity: 1;
    transform: translate3d(0,0,0);
    transition: all 1s ease-out;
}
.img-alice {
    width: 300px;
    /* opacity: 0;
    transform: translate3d(0, -20%, 0) */
}
.play .img-alice {
    /* opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: all 1.5s ease-out; */
}
.canvas-star{
    position: absolute;
    width: 100%;
    height: 100%;
    /* background-color: #143568; */
}
.column {
    flex-direction: column;
}
.show-slide-btn {
    position: absolute;
    top: 20px;
    left: 20px;
}
.item-1 .title {
    margin-top: 30px;
    text-align: center;
    color: aliceblue;
    
}
.item-1 .title h1 {
    font-size: 35px;
    line-height: 1;
}
.item-1.play .title h1 {
    transition-delay: 0.6s
}
.item-1 .title h3 {
    margin-top: 10px;
    font-size: 20px;
}
.item-1.play .title h3 {
    transition-delay: 0.8s
}
.item-1 footer {
    position: absolute;
    bottom: 35px;
    display: flex;
    flex-direction: column;
    color: aliceblue;
    text-align: center;
}
.item-1 footer  p {
    line-height: 1.5;
}

.item-1 {background: #143568;}
.item-2 {background: #349b66;}
.item-3 {background: #e05365;}
.item-4 {background: #44a7cb;}
.item-5 {background: #fc9590;}
.item-6 {background: #d487b4;}
</style>






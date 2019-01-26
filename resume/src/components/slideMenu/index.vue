<template>
 <div class="wrap">
   <transition name="slide">
    <aside v-show="isShow">
      <header>
        <div class="user"> 
          <div class="user-img">
            <img src="static/touxiang.jpg">
        </div>
          <h3>lien</h3>
        
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <router-link to="/index">
              <i class="material-icons">portrait</i>
              <!-- <p>个人简历</p> -->
              <p>首页</p>
            </router-link>
          </li>
          <li>
            <a href="https://lienjack.github.io/alice-ui-demo/">
              <i class="material-icons">card_travel</i>
              <p>组件库</p>
            </a >
          </li>
          <li>
            <a href="https://lienjack.github.io/Blog/">
              <i class="material-icons">chrome_reader_mode</i>
              <p>知识库</p>
            </a>
          </li>
          <li>
            <a href="https://lienjack.github.io/Blog/about/">
              <i class="material-icons">grade</i>
              <p>个人经历</p>
            </a>
          </li>
          <!-- <li>
            <a href="./static/bird/index.html" >
              <i class="material-icons">gamepad</i>
              <p>垃圾游戏</p>
            </a >
          </li> -->
           <li>
            <div @click="close">
              <i class="material-icons">reply</i>
              <p>返回</p>
            </div>
          </li>
        </ul>
      </nav>
    </aside>
   </transition >
   <transition name="mask-fade">
    <div class="mask" v-show="isShow" @click.self="close"></div>
  </transition>
 </div>
</template>
<script>
export default {
  props: {
    value: {
      type:Boolean,
      default: true,
    }
  },

  data() {
    return {
      isShow: false
    }
  },
  methods:{
    close() {
      this.isShow = false
      this.$emit('input', false)
    },
    show() {
      this.isShow = true
      this.$emit('input', true)
    }
  },
  watch: {
    value: function(val) {
      this.isShow = val
    }
  }
}
</script>

<style scoped>
@import url('./main.css');
</style>


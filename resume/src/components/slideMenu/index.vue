<template>
 <div class="wrap">
   <transition name="slide">
    <aside v-show="isShow">
      <header>
        <div class="user"> 
          <div class="user-img">

        </div>
        <h3>lien</h3>
        
        </div>
      </header>
      <nav>
        <ul>
          <li>
            <router-link to="/index" tag="div">
              <i class="material-icons">portrait</i>
              <p>个人简历</p>
            </router-link>
          </li>
          <li>
            <router-link to="/comGroup" tag="div">
              <i class="material-icons">card_travel</i>
              <p>组件库</p>
            </router-link >
          </li>
          <li>
            <div>
              <i class="material-icons">chrome_reader_mode</i>
              <p>知识库</p>
            </div>
          </li>
          <li>
            <div>
              <i class="material-icons">grade</i>
              <p>个人爱好</p>
            </div>
          </li>
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
.mask {
  position:absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: black;
  opacity: 0.3;
}
aside {
  width: 250px;
  top: 0;
  bottom: 0;
  background-color: white;
  position: absolute;
  z-index: 100;
}
aside header {
  height: 200px;
  background-color: steelblue;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
}
.user {
  margin-left: 20px;
}
.user-img {
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: skyblue;
}
.user h3 {
  font-size: 20px;
  line-height: 1.5;
  text-align: center;
  color: white;
}

nav ul div {
  height: 50px;
  padding: 10px;
  display: flex;
  align-items: center;
}
nav ul div p {
  padding-left: 10px;
}


.mask-fade-enter-active , .mask-fade-leave-active {
  opacity: 0;
}
.mask-fade-enter, .mask-fade-leave-to {
  transition: all 1s;
}
</style>


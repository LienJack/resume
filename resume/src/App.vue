<template>
  <div id="app">
    <router-view/>
     <div class="show-slide-btn">
        <button @click="()=>isShowSlide=!isShowSlide">☰</button>
    </div>
    <slideMemu v-model="isShowSlide" ref="slide"/>
  </div>
</template>

<script>
import slideMemu from 'components/slideMenu/index'
export default {
  created() {
    this.$router.afterEach((to, from)=> {
      this.$refs.slide.close()
    })
  },
  components: {slideMemu },
  name: 'App',
  // watch: {
  //   $route(to,from){
  //     this.$refs.slide.close()
  //   }
  // },
   data() {
    return {
      isShowSlide: false
    }
  },
  methods: {

  }
}
</script>

<style scoped>
.show-slide-btn {
    position: fixed;
    top: 10px;
    left: 15px;
    z-index: 1800;
}
.show-slide-btn button {
  color: rgb(7, 92, 177);
  background-color: deepskyblue;
  border: none;
  border-radius: 5px;
  opacity: 0.6;
  width: 25px;
  height: 25px;
  z-index: 2000;
}
</style>

<template>
  <div id="app">
    <router-view/>
      <i @click="()=>isShowSlide=!isShowSlide" class="material-icons show-slide-btn">settings</i>
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
    left: 10px;
    z-index: 1800;
}
.show-slide-btn  {
  color: deepskyblue;
  opacity: 0.6;
  font-size:160%;
  z-index: 2000;
  cursor:pointer;
}
</style>

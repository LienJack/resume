<template>
  <div id="app">
    <router-view/>
     <div class="show-slide-btn">
        <button @click="()=>isShowSlide=!isShowSlide">show</button>
    </div>
    <slideMemu v-model="isShowSlide" ref="slide"/>
  </div>
</template>

<script>
import slideMemu from 'components/slideMenu/index'
export default {
  components: {slideMemu },
  name: 'App',
  watch: {
    $route(to,from){
      this.$refs.slide.close()
    }
  },
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
    position: absolute;
    top: 20px;
    left: 20px;
}
</style>

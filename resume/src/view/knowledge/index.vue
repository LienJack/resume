<template>
  <article>
    <van-nav-bar 
      title="knowledge"
      right-text="返回"
      @click-right="onClickLeft"
    />
    <!-- <keep-alive> -->
      <router-view/>
    <!-- </keep-alive> -->
  </article>
</template>
<script>
export default {
  methods:{
    onClickLeft() {
      this.$router.push('/knowledge/index')
    }
  }
}
</script>
<style scoped>
</style>



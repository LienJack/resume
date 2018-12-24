<template>
  <article>
      <van-nav-bar
      title="popup"
      left-text="返回"
      @click-left="onClickLeft"
    />
  <section>
    
  </section>
  </article>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
  }
}
</script>

<template>
  <article>
      <van-nav-bar
      title="popup"
      right-text="返回"
      @click-right="onClickLeft"
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

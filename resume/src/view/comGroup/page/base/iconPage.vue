<template>
  <article>
      <van-nav-bar
      title="icon"
      right-text="返回"
      @click-right="onClickLeft"
    />
  <section>
    <van-icon name="chat" />
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

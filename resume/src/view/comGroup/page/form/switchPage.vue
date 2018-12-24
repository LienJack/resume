<template>
  <article>
      <van-nav-bar
      title="switch"
      left-text="返回"
      @click-left="onClickLeft"
    />
   <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">基础用法</h2>
      <van-switch v-model="checked" />
  </section>
   <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">禁用状态</h2>
      <van-switch v-model="checked"  disabled/>
  </section>
   <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">加载状态</h2>
      <van-switch v-model="checked" loading />
  </section>
   <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">自定义颜色</h2>
      <van-switch 
        v-model="checked"
        active-color="#4b0"
        inactive-color="#f44" />
  </section>
  </article>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
  },
   data() {
    return {
      checked: true
    };
  }
}
</script>
<template>
  <article>
      <van-nav-bar
      title="pick"
      left-text="返回"
      @click-left="onClickLeft"
    />
  <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">选择器的用法</h2> 
      <van-picker :columns="columns" />
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
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州']
    };
  },
}
</script>
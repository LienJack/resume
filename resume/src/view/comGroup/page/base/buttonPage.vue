<template>
  <article>
      <van-nav-bar
      title="button"
      left-text="返回"
      @click-left="onClickLeft"
    />
  <section class="van-doc-demo-block">
    <h2 class="van-doc-demo-block__title">按钮类型</h2>
    <div class="demo-button-row">
      <van-button type="default">默认按钮</van-button>
      <van-button type="primary">主要按钮</van-button>
    </div>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    </section>
    <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">按钮类型</h2>
      <div class="demo-button-row">
        <van-button disabled type="primary">禁用状态</van-button>
        <van-button disabled type="danger">禁用状态</van-button>
      </div>
    </section>
    <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">按钮形状</h2>
      <div class="demo-button-row">
        <van-button square type="primary">方形按钮</van-button>
        <van-button round type="danger">圆形按钮</van-button>
      </div>
    </section>
    <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">按钮尺寸</h2>
      <van-button size="large">大号按钮</van-button>
      <div class="demo-button-row">
        <van-button size="normal">普通按钮</van-button>
        <van-button size="small">小型按钮</van-button>
        <van-button size="mini">迷你按钮</van-button>
      </div>
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
<style >

</style>

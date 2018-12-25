<template>
  <article>
      <van-nav-bar
      title="cell"
      right-text="返回"
      @click-right="onClickLeft"
    />
    <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">基础用法</h2> 
      <van-cell-group>
      <van-cell title="单元格" value="内容" />
      <van-cell title="单元格" value="内容" label="描述信息" />
    </van-cell-group>
    </section>
    <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">展示箭头</h2> 
      <van-cell title="单元格" is-link />
      <van-cell title="单元格" is-link value="内容" />
      <van-cell title="单元格" is-link arrow-direction="down" value="内容" />
    </van-cell-group>
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

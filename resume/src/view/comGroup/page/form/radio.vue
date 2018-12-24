<template>
  <article>
      <van-nav-bar
      title="radio"
      left-text="返回"
      @click-left="onClickLeft"
    />
  <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">基础用法</h2>
      <van-radio-group v-model="radio">
        <van-radio name="1">单选框 1</van-radio>
        </br>
        <van-radio name="2">单选框 2</van-radio>
      </van-radio-group> 
  </section>
  </article>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    data() {
      return {
        radio: '1'
      }
    }
  }
}
</script>
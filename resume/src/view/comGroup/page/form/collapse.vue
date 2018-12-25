<template>
  <article>
      <van-nav-bar
      title="collapse"
      right-text="返回"
      @click-right="onClickLeft"
    />
  <section class="van-doc-demo-block">
    <h2 class="van-doc-demo-block__title">折叠的基本用法</h2> 
    <van-collapse v-model="activeNames">
      <van-collapse-item title="JavaScript" name="1">
        红砖头书
      </van-collapse-item>
      <van-collapse-item title="css" name="2">
        css世界
      </van-collapse-item>
      <van-collapse-item title="html" name="3">
        html5
      </van-collapse-item>
    </van-collapse>
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
      activeNames: ['1']
    };
  }
}
</script>
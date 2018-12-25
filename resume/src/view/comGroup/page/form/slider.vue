<template>
  <article>
      <van-nav-bar
      title="slider"
      right-text="返回"
      @click-right="onClickLeft"
    />
   <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">复选框</h2> 
      <van-slider v-model="value" @change="onChange" />
  </section>
  </article>
</template>
<script>
export default {
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onChange(value) {
      this.$toast('当前值：' + value);
    }
  },
   data() {
    return {
      value: 50
    };
  },
}
</script>
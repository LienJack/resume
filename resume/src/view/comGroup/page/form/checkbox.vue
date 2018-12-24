<template>
  <article>
      <van-nav-bar
      title="checkbox"
      left-text="返回"
      @click-left="onClickLeft"
    />
   <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">复选框</h2> 
      <van-checkbox-group v-model="result">
        <van-checkbox
            v-for="(item, index) in list"
            :key="item"
            :name="item"
          >
            复选框 {{ item }}
            </br>
          </van-checkbox>
      </van-checkbox-group>
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
      list: ['a', 'b', 'c'],
      result: ['a', 'b']
    };
  }
}
</script>
<style scoped>
.van-checkbox{
  margin: 10px 0;
}
</style>

<template>
  <article>
  <div class="panel">
    <van-collapse v-model="activeNames" >
       <van-collapse-item title="JS知识" name="1">
          <van-cell title="闭包" is-link  to="/knowledge/article/closure"/>
          <van-cell title="原型链" is-link to="/knowledge/article/prototype"/>
          <van-cell title="异步处理" is-link to="/knowledge/article/async"/>
          <van-cell title="事件循环" is-link />
        </van-collapse-item>
        <van-collapse-item title="组件心得" name="2">
          <van-cell title="Checkbox 复选框" is-link />
          <van-cell title="Radio 单选框" is-link />
          <van-cell title="Switch 开关" is-link />
          <van-cell title="Field 输入框" is-link />
          <van-cell title="Slider 滑块" is-link />
          <van-cell title="Collapse 折叠面板" is-link />
          <van-cell title="Picker 选择器" is-link/>
        </van-collapse-item>
        <van-collapse-item title="网络" name="3">
          <van-cell title="tcp" is-link />
          <van-cell title="http" is-link />
          <van-cell title="https" is-link /> 
        </van-collapse-item>
    </van-collapse>
  </div>
  
  </article>
</template>
<script>
export default {
  data() {
    return {
      activeNames: [],
      isShowSlide: false
    };
  },
    methods: {
      showSlideToggle() {
          this.isShowSlide = !this.isShowSlide
      }
  }
};
</script>

<style scoped>
.panel {
  margin-top: 20px;
  overflow-y: auto;
}
.show-slide-btn {
    position: absolute;
    top: 20px;
    left: 20px;
}
</style>



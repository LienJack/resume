<template>
  <article>
  <div class="panel">
    <van-collapse v-model="activeNames" >
      <van-collapse-item title="基础组件" name="1">
        <van-cell title="Button 按钮" is-link  to="/baseCom/button"/>
        <van-cell title="Cell 单元格" is-link to="/baseCom/cell"/>
        <van-cell title="Icon 图标" is-link to="/baseCom/icon"/>
        <van-cell title="popUp" is-link to="/baseCom/popup"/>
      </van-collapse-item>
      <van-collapse-item title="表单组件" name="2">
        <van-cell title="Checkbox 复选框" is-link to="/formCom/checkbox"/>
        <van-cell title="Radio 单选框" is-link to="/formCom/radio"/>
        <van-cell title="Switch 开关" is-link to="/formCom/switch"/>
        <van-cell title="Field 输入框" is-link to="/formCom/field"/>
        <van-cell title="Slider 滑块" is-link to="/formCom/slider"/>
        <van-cell title="Collapse 折叠面板" is-link to="/formCom/collapse"/>
        <van-cell title="Picker 选择器" is-link to="/formCom/picker"/>
      </van-collapse-item>
      <van-collapse-item title="反馈组件" name="3">
        <van-cell title="Dialog 弹出框" is-link />
        <van-cell title="Loading 加载" is-link />
        <van-cell title="Notify 消息提示" is-link />
        <van-cell title="Field 输入框" is-link />
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
article{
  height: 100%;
}
.panel {
  margin-top: 60px;
  overflow-y: auto;
}
.show-slide-btn {
    position: absolute;
    top: 20px;
    left: 20px;
}
</style>



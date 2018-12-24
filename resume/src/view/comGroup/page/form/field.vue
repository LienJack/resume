<template>
  <article>
      <van-nav-bar
      title="field"
      left-text="返回"
      @click-left="onClickLeft"
    />
   <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">基础用法</h2> 
      <van-cell-group>
        <van-field  placeholder="请输入用户名" />
      </van-cell-group>
  </section>
  <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">自定义类型</h2> 
      <van-cell-group>
        <van-field
          required
          clearable
          label="用户名"
          icon="question-o"
          placeholder="请输入用户名"
          @click-icon="$toast('question')"
        />

        <van-field
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
        />
      </van-cell-group>
  </section>
    <section class="van-doc-demo-block">
      <h2 class="van-doc-demo-block__title">错误提示</h2> 
      <van-cell-group>
        <van-field
          v-model="username"
          label="用户名"
          placeholder="请输入用户名"
          error
        />
        <van-field
          v-model="phone"
          label="手机号"
          placeholder="请输入手机号"
          error-message="手机号格式错误"
        />
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
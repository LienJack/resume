<template>
  <div class="editor">
    <van-button type="primary" size="large" @click="useMd">markdown编辑器</van-button>
    <transition name="fade">
    <mavon-editor
    defaultOpen="preview"
    :toolbarsFlag="toolbarsFlag"
    :value="value"
    :subfield="subfield"
    :editable="editable"
    @change="show"
    v-show="!isLoading"
      />
    </transition>  
  </div>
</template>
<script>
import closure from './md/closure.md'
import prototype from './md/prototype.md'
import asyncMd from './md/async.md'
const list = new Map()
list.set('closure' ,closure)
list.set('prototype',prototype)
list.set('async',asyncMd)

export default {
  created() {
    this.isLoading = true
    let title = this.$route.params.title
    if(title && list.has(title)) {
      this.value = list.get(`${title}`)
    }
  },
  beforeDestroy() {
     document.getElementsByTagName('body')[0].style.overflowY= ""
  },
  data() {
    return {
      value: '# 404没有找到文章',
      isLoading: false,
      toolbarsFlag: false,
      subfield: false,
      editable: false,
    }
  },
  methods:{
    show(value,render) {
      if(render) {
        this.isLoading = false
        document.getElementsByTagName('body')[0].style.overflowY= "scroll"
      }
    },
    useMd() {
      this.toolbarsFlag = !this.toolbarsFlag
      this.subfield = !this.subfield
      this.editable = !this.editable
    }
  },
}
</script>
<style scoped>
.editor {
  min-height: 150vh;
}
</style>



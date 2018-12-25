<template>
  <div class="editor">
    <mavon-editor
    defaultOpen="preview"
    :toolbarsFlag="false"
    :value="value"
    :subfield="false"
    :editable="false"
    @change="show"
      />
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
    }
  },
  methods:{
    show(value,render) {
      if(render) {
        document.getElementsByTagName('body')[0].style.overflowY= "scroll"
      }
    }
  },
}
</script>
<style scoped>
.editor {
  min-height: 150vh;
}
</style>



<template>
  <div class="editor">
    <mavon-editor
    defaultOpen="preview"
    :toolbarsFlag="false"
    :value="value"
    :subfield="false"
    :editable="false"
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
  data() {
    return {
      value: '# 404没有找到文章',
    }
  },
}
</script>


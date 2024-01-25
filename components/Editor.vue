<template>
  <div class="w-[1440px] mx-auto my-8 bg-white shadow-sm rounded-sm">
    <bubble-menu
    :editor="editor"
    :tippy-options="{ duration: 100 }"
    v-if="editor"
    class="list"
  >
    <button class="item" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
      加粗
    </button>
    <button class="item" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
      斜体
    </button>
    <button class="item" @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
      删除线
    </button>
  </bubble-menu>
    <div class="p-4 prose lg:prose-md">
      <TiptapEditorContent :editor="editor" />
    </div>
  </div>
</template>
  
<script setup>
import StarterKit from "@tiptap/starter-kit";
import { BubbleMenu} from '@tiptap/vue-3'


const editor = useEditor({
  content: "<p>I'm running Tiptap with Vue.js. 🎉</p>",
  extensions: [StarterKit],
});

onMounted(() => {
  console.log(unref(editor).getHTML())
})
</script>

<style lang="less">
.list {
  @apply bg-slate-900 text-white flex items-center p-2 rounded-md;
  .item {
    @apply bg-white text-sm text-zinc-700 border-r p-2 rounded-sm mx-1;
  }
}
</style>
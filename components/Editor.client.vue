<template>
  <div class="editor flex items-center min-h-[100vh] p-8">
    <div class="w-[1200px] mx-auto bg-white shadow-sm rounded-md" style="min-height: calc(100vh - 64px);">
      <bubble-menu
        :editor="editor"
        :tippy-options="{ duration: 100 }"
        v-if="editor"
        class="bubble-list"
      >
        <button class="item" @click="editor.chain().focus().toggleBold().run()" :class="{ 'is-active': editor.isActive('bold') }">
          <Icon name="bi:type-bold" size="12"></Icon>
        </button>
        <button class="item" @click="editor.chain().focus().toggleItalic().run()" :class="{ 'is-active': editor.isActive('italic') }">
          <Icon name="bi:type-italic" size="12"></Icon>
        </button>
        <button class="item" @click="editor.chain().focus().toggleStrike().run()" :class="{ 'is-active': editor.isActive('strike') }">
          <Icon name="bi:type-strikethrough" size="12"></Icon>
        </button>
        <button class="item" @click="editor.chain().focus().toggleCodeBlock().run()" :class="{ 'is-active': editor.isActive('codeBlock') }">
          <Icon name="bi:code-slash" size="12"></Icon>
        </button>
        <button class="item" @click="editor.chain().focus().toggleCode().run()" :class="{ 'is-active': editor.isActive('code') }">
          <Icon name="bi:code" size="12"></Icon>
        </button>
        <button class="item" @click="editor.chain().focus().toggleBlockquote().run()" :class="{ 'is-active': editor.isActive('blockquote') }">
          <Icon name="bi:chat-left-quote" size="12"></Icon>
        </button>
      </bubble-menu>
      <floating-menu :editor="editor" :tippy-options="{ duration: 100 }" v-if="editor" class="floating-list left-20">
        <button class="item" @click="editor.chain().focus().toggleHeading({ level: 2 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }">
          <Icon name="bi:type-h2" size="11"></Icon>
        </button>
        <button class="item" @click="editor.chain().focus().toggleHeading({ level: 3 }).run()" :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }">
          <Icon name="bi:type-h3" size="11"></Icon>
        </button>
        <button class="item" @click="editor.chain().focus().toggleBulletList().run()" :class="{ 'is-active': editor.isActive('bulletList') }">
          <Icon name="bi:list-ul" size="11"></Icon>
        </button>
        <button class="item" @click="editor.chain().focus().toggleOrderedList().run()" :class="{ 'is-active': editor.isActive('orderedList') }">
          <Icon name="bi:list-ol" size="11"></Icon>
        </button>

      </floating-menu>
      <div class="p-8 prose lg:prose-md max-w-full">
        <TiptapEditorContent :editor="editor"/>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import StarterKit from "@tiptap/starter-kit";
import { BubbleMenu, FloatingMenu } from '@tiptap/vue-3'


const editor = useEditor({
  content: `<div contenteditable="true" translate="no" class="tiptap ProseMirror" tabindex="0"><h1><strong>她从山中来</strong></h1><p>十二月初收到友人邀请，约我圣诞节之前去她家里坐坐。由于并不熟知对方喜好，想到平常德国人喜欢送蝴蝶兰，挑上一盆做拜访礼物总归不会错。</p><p>闲逛时偶然看到一种花型酷似蝴蝶兰，但茎杆又似盆景的兰花，吊牌上的名字显示Dendrobiu，栽培种名为'Polar Fire'，意为北极火焰。它的植株和花型都很美，白色花瓣由内到外渲出程度不一的紫色。而我的这位友人举止文雅，人淡如菊，和人交往虽不显热情，却又总记得交谈中某一个小细节，不经意间地提供力所能及的帮助。不知怎的，我感觉那株兰花和她很搭。</p><p><br><br>作者：三儿王屿<br>链接：https://www.jianshu.com/p/7976e190e1cf<br>来源：简书<br>著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p></div>`,
  extensions: [StarterKit],
})


onMounted(() => {
  watch(() => unref(editor).getHTML(), (html) => {
    console.log(html)
  })
})
</script>

<style lang="less">
.editor {
  .ProseMirror {
    outline: none;
  }

  .bubble-list {
    @apply bg-white text-zinc-700 flex items-center p-2 rounded-3xl border-zinc-200 shadow-2xl;
    .item {
      @apply flex items-center text-sm border-r p-2 rounded-sm mx-1 border-none;
      &.is-active {
        @apply bg-slate-200;
      }
    }
  }

  .floating-list {
    @apply bg-white text-zinc-700 flex items-center p-2 rounded-md;
    .item {
      @apply flex items-center bg-slate-900 text-white text-sm border-r p-2 rounded-sm mx-1;
    }
  }
}
</style>
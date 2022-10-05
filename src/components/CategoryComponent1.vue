<template>
    <div id="categoryComponent1" class="pt-sm">
        <h3 class="borderB-dot font-medium">카테고리 관리</h3>
        <ul class="component-list">
          <li>- addcategory() 함수로 새 카테고리 추가</li>
          <li>- checkCategory() 함수:</li>
          <li>- 새 카테고리 등록 후 다른 새 카테고리 생성가능 </li>
          <li>-> 새 카테고리 등록여부 체크</li>
        </ul>
    </div>
    <div v-if="editor" class="editor">
        <editor-content :editor="editor" />
    </div>
</template>
  
  <script>
  import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
  import Document from '@tiptap/extension-document'
  import Paragraph from '@tiptap/extension-paragraph'
  import Text from '@tiptap/extension-text'
  import { Editor, EditorContent } from '@tiptap/vue-3'
  import css from 'highlight.js/lib/languages/css'
  import js from 'highlight.js/lib/languages/javascript'
  import ts from 'highlight.js/lib/languages/typescript'
  import html from 'highlight.js/lib/languages/xml'
  import { lowlight } from 'lowlight'
  
  lowlight.registerLanguage('html', html)
  lowlight.registerLanguage('css', css)
  lowlight.registerLanguage('js', js)
  lowlight.registerLanguage('ts', ts)
  
  export default {
    components: {
      EditorContent,
    },
  
    data() {
      return {
        editor: null,
      }
    },
  
    mounted() {
      this.editor = new Editor({
        extensions: [
          Document,
          Paragraph,
          Text,
          CodeBlockLowlight.configure({
            lowlight,
          }),
        ],
        content: `<pre><code class="language-javascript">
    addCategory(category) {
      category = 카테고리 대, 중, 소분류 구분
      this.errorMsg = ''
      if (this.isCategory === false) {
        if (category === 1) { // 대분류 카테고리
          this.categoryBigList.push({
            auto_number: -1,
            category_big: '새 카테고리',
            active: 1
          })
          this.categoryBig = -1
        }
        .
        .
        // 중, 소분류 생략
        this.active = 1
      } else {
        this.errorMsg = '추가된 새 카테고리를 등록해주세요'
      }

      this.isCategory = true
    },
    checkCategory() {
      // 새 카테고리 찾기
      // 새 카테고리가 있으면 새 카테고리 추가 불가
      const checkBig = this.categoryBigList.findIndex((x) => x.auto_number === -1)
      .
      .
      if (checkBig === -1 && checkMiddle === -1 && checkSmall === -1) {
        this.isCategory = false
      } else this.isCategory = true
    },
</code>
</pre>
        `,
        editable: false 
      })
    },
  
    beforeUnmount() {
      this.editor.destroy()
    },
  }
  </script>
  
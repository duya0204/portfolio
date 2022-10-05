<template>
    <div id="categoryComponent2" class="pt-md">
        <ul class="component-list">
          <li>- moveItem(val, category) 함수:</li>
          <li> - 카테고시 순서 변경</li>
          <li> - Val : 맨위, 위, 아래, 맨아래 구분 </li>
          <li> - Category: 대, 중, 소분류 카테고리 구분 </li>
          <li> - Api 데이터 전송</li>
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
    async moveItem(val, category) {
      this.errorMsg = ''
      let list = [] // 카테고리 리스트
      let model = null // 선택된 카테고리의 value
      const moveList = []

      // switch문으로 변수 값 변경
      switch (category) {
        case 1:
          list = this.categoryBigList
          model = this.categoryBig
          break
          .
          .
        default:
          list = []
          model = null
      }
      if (model === -1) {
        this.errorMsg = '새 카테고리 등록 후 순서변경 가능합니다.'
        this.showNotifi()
      } else {
        const idx = list.findIndex((x) => x.auto_number === model)
        const up = idx - 1
        const down = idx + 1
        const move = list.splice(idx, 1)
        moveList.push(move[0])
        for (let i = 0; i < moveList.length; i += 1) {
          if (val === 1) list.splice(0, 0, moveList[i]) // 맨위
          if (val === 2) list.splice(up, 0, moveList[i]) // 위
          if (val === 3) list.splice(down, 0, moveList[i]) // 아래
          if (val === 4) list.splice(list.length, 0, moveList[i]) // 맨아래
        }
        // 순서 서버 바로 저장
        if (category === 1) await categoryAPI.modifyCagetoryBigList({ list })
        else if (category === 2) await categoryAPI.modifyCagetoryMiddleList({ list })
        else if (category === 3) await categoryAPI.modifyCagetorySmallList({ list })
      }
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
  
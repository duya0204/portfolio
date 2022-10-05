<template>
    <div id="submitComponent" class="pt-md">
        <img src="" alt="">
        <h3 class="borderB-dot font-medium">파트너스 페이지 데이터 전송</h3>
        <ul class="component-list">
            <li>- 필수 데이터 체크 후 알림 메세지, focus()</li>
            <li>- form 객체에 데이터 추가</li>
            <li>- Axios 로 form 데이터 전송</li>
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
    async submit() {
      try {
        this.feedbackOn = true

        // form data 생성
        const form = new FormData()

        // 필수 항목 공백 체크
        if (!this.applicantName) {
          this.feedback = this.$t('partners.feedback.applicantName')
          document.getElementById('applicantName').focus()
          return
        }
        else if (!this.position) {
          this.feedback = this.$t('partners.feedback.position')
          document.getElementById('position').focus()
          return
        }
        else if (!this.phoneNumber) {
          this.feedback = this.$t('partners.feedback.phoneNumber')
          document.getElementById('phoneNumber').focus()
          return
        }
        .
        .

        // form data 객체 추가
        form.append('type', this.partnersTab)
        form.append('applicantName', this.applicantName)
        form.append('position', this.position)
        form.append('phoneNumber', this.phoneNumber)
        .
        .

        // data 전송
        const res = await this.$axios.$post('/applicant/', form, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        if (res) {
          this.submit = true
        }
        else {
          this.feedback = this.$t('partners.feedback.fail')
        }
      }
      catch (e) {
        // console.error(e)
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
  
<template>
    <div id="mapComponent" class="pt-sm">
        <img src="" alt="">
        <h3 class="borderB-dot font-medium">kakao map API</h3>
        <ul class="component-list">
            <li>- kakao map 여러개 사용</li>
            <li>- tab 활성화시 map load</li>
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
mounted() {
  // kakao map load
  window.kakao && window.kakao.maps ? this.initMap() : this.addScript()
},
methods: {
  // kakao map function  
  initMap(val) {
    let mapcontainer
    let mapoptions
    // kakao map 여러개 사용 val로 변수 값 변경
    switch (val) {
      case 0:
        mapcontainer = document.getElementById('map')
        mapoptions = { center: new kakao.maps.LatLng( 지도 좌표 ), level: 3 }
        break
      case 1:
        mapcontainer = document.getElementById('map1')
        mapoptions = { center: new kakao.maps.LatLng( 지도 좌표), level: 3 }
        break
            .
            .
        default: return
    }
    
    // tab 활성화시 map load
    if (this.$t('contact.content')[val].show) {
        mapcontainer.style.display = 'block'
        const map = new kakao.maps.Map(mapcontainer, mapoptions)
        map.relayout()
        const marker = new kakao.maps.Marker({ map, position: map.getCenter() })
        marker.setMap(map)
    }
    else {
        mapcontainer.style.display = 'none'
    }
  },
  // kakao map 추가
  addScript() {
    const script = document.createElement('script')
    /* global kakao */
    script.onload = () => kakao.maps.load(this.initMap); script.src = 'api key here'
    document.head.appendChild(script)
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
  
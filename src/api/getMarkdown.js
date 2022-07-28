import {marked} from 'marked'
import Prism from 'prismjs'
import '../assets/prism-one-dark.css'

export function getMarkdown(markdown) {
  marked.setOptions({
    breaks: true,
    renderer: new marked.Renderer(),
    highlight: function (code) {
      return Prism.highlight(code, Prism.languages.javascript, 'javascript')
    }
  })

  return marked(markdown)
}

import { Editor } from '@tiptap/react'
import './Sidebar.less'
import { Icon } from '../Icon/Icon'

type SidebarProps = {
  editor: Editor | null
}
export const Sidebar = ({ editor }: SidebarProps) => {
  if (!editor) return null
  const isSelectedText = () => {
    const { view, state } = editor
    const { from, to } = view.state.selection
    const text = state.doc.textBetween(from, to, '')
    return !!text
  }
  const formattingButtonClass = (formatName: string) => {
    return `sidebar__button ${(editor.isActive(formatName) || isSelectedText()) && editor.isFocused ? 'is-active' : ''}`
  }
  return (
    <aside className='sidebar'>
      <div className='sidebar__text-formatters'>
        <button
          className={formattingButtonClass('bold')}
          title='Bold'
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Icon id='bold' />
        </button>
        <button
          className={formattingButtonClass('underline')}
          title='Underline'
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Icon id='underline' />
        </button>
        <button
          className={formattingButtonClass('italic')}
          title='Italic'
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Icon id='italic' />
        </button>
        <button
          className={formattingButtonClass('strike')}
          title='Strike'
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Icon id='strike' />
        </button>
        <button
          className={formattingButtonClass('codeBlock')}
          title='Code Block'
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <Icon id='code-block' />
        </button>
      </div>
    </aside>
  )
}

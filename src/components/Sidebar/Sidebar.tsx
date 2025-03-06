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
  return (
    <aside className='sidebar'>
      <div className='sidebar__text-formatters'>
        <button
          className={`sidebar__button ${(editor.isActive('bold') || isSelectedText()) && editor.isFocused ? 'is-active' : ''}`}
          title='Bold'
          onClick={() => editor.chain().focus().toggleBold().run()}
        >
          <Icon id='bold' />
        </button>
        <button
          className={`sidebar__button ${(editor.isActive('underline') || isSelectedText()) && editor.isFocused ? 'is-active' : ''}`}
          title='Underline'
          onClick={() => editor.chain().focus().toggleUnderline().run()}
        >
          <Icon id='underline' />
        </button>
        <button
          className={`sidebar__button ${(editor.isActive('italic') || isSelectedText()) && editor.isFocused ? 'is-active' : ''}`}
          title='Italic'
          onClick={() => editor.chain().focus().toggleItalic().run()}
        >
          <Icon id='italic' />
        </button>
        <button
          className={`sidebar__button ${(editor.isActive('strike') || isSelectedText()) && editor.isFocused ? 'is-active' : ''}`}
          title='Strike'
          onClick={() => editor.chain().focus().toggleStrike().run()}
        >
          <Icon id='strike' />
        </button>
        <button
          className={`sidebar__button ${(editor.isActive('codeBlock') || isSelectedText()) && editor.isFocused ? 'is-active' : ''}`}
          title='Code Block'
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        >
          <Icon id='code-block' />
        </button>
      </div>
    </aside>
  )
}

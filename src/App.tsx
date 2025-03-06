import { useEditor } from '@tiptap/react'
import './App.less'
import { Sidebar } from './components/Sidebar/Sidebar'
import StarterKit from '@tiptap/starter-kit'
import { ChatWindow } from './components/ChatWindow/ChatWindow'
import { ChatInput } from './components/ChatInput/ChatInput'
import Underline from '@tiptap/extension-underline'

const extensions = [StarterKit, Underline]
function App() {
  const editor = useEditor({
    extensions,
    content: '',
  })
  return (
    <main className='main'>
      <Sidebar editor={editor} />
      <div className='main__content-container'>
        <ChatWindow />
        <div className='main__footer'>
          <ChatInput editor={editor} />
        </div>
      </div>
    </main>
  )
}

export default App

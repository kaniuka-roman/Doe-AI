import { Editor, EditorContent } from '@tiptap/react'
import './ChatInput.less'
import { MagicMenuButton } from '../MagicMenuButton/MagicMenuButton'
import { Icon } from '../Icon/Icon'
import { SendButton } from '../SendButton/SendButton'

type ChatInputProps = {
  editor: Editor | null
}

export const ChatInput = ({ editor }: ChatInputProps) => {
  if (!editor) return null
  return (
    <div className='chat-input'>
      <MagicMenuButton />
      <EditorContent editor={editor} />
      <div className='chat-input__controls controls'>
        <button className='controls__copy'>
          <Icon id='copy' />
        </button>
        <button className='controls__microphone'>
          <Icon id='microphone' />
        </button>
        <SendButton />
      </div>
    </div>
  )
}

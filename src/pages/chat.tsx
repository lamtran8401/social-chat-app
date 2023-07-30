import ChatProfile from '@/components/ui/chat-profile'
import Conversation from '@/components/ui/conversation'
import MessageBox from '@/components/ui/message-box'

const ChatPage = () => {
  return (
    <>
      <Conversation className="flex-1 md:w-80 lg:w-96" />
      <MessageBox className="flex-1 invisible hidden md:block md:visible" />
      <ChatProfile />
    </>
  )
}

export default ChatPage

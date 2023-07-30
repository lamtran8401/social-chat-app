import { cn } from '@/lib/utils'
import {
  EllipsisVerticalIcon,
  PaperAirplaneIcon,
  PhoneIcon,
  VideoCameraIcon,
} from '@heroicons/react/24/outline'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Input } from './input'

interface MessageBoxProps extends React.HTMLAttributes<HTMLDivElement> {}

const MessageBox = ({ className }: MessageBoxProps) => {
  return (
    <div className={cn('mt-4 mb-4 mr-2 bg-white rounded-xl', className)}>
      <div className="flex flex-col h-full">
        <div className="flex items-center gap-4 p-2">
          <Avatar className="w-12 h-12">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-between">
            <div className="font-medium text-gray-700">John Doe</div>
            <div className="text-sm font-light text-gray-400">Online</div>
          </div>
          <PhoneIcon className="w-10 h-10 p-2 ml-auto text-gray-500 transition-all cursor-pointer hover:text-gray-800" />
          <VideoCameraIcon className="w-10 h-10 p-2 text-gray-500 transition-all cursor-pointer hover:text-gray-800" />
          <EllipsisVerticalIcon className="w-10 h-10 p-2 text-gray-500 transition-all cursor-pointer hover:text-gray-800" />
        </div>
        <div className="flex items-center justify-between flex-1 p-2 ml-2 mr-2 bg-stone-50 rounded-xl"></div>
        <div className="m-2">
          <Input
            size="md"
            maxWidth
            name="message"
            placeholder="Type your message"
            className="max-w-none"
            suffix={
              <PaperAirplaneIcon className="w-10 h-10 p-2 text-white transition-all rounded-md cursor-pointer bg-primary hover:bg-primary/80" />
            }
          />
        </div>
      </div>
    </div>
  )
}

export default MessageBox

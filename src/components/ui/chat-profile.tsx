import { cn } from '@/lib/utils'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'

interface ChatProfileProps extends React.HtmlHTMLAttributes<HTMLDivElement> {}

const ChatProfile = ({ className }: ChatProfileProps) => {
  return (
    <div
      className={cn(
        'invisible hidden p-3 mt-4 mb-4 mr-4 bg-white w-80 rounded-xl xl:block xl:visible',
        className
      )}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col items-center gap-2">
          <img
            className="w-full h-auto rounded-lg shadow-lg"
            src="https://wallpapers.com/wp-content/themes/wallpapers.com/src/splash-n.jpg"
            alt="wallpaper"
          />
          <Avatar className="w-16 h-16 -mt-10 ring-white ring-4">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="flex flex-col justify-between">
            <div className="font-medium text-gray-700">John Doe</div>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <div className="text-sm font-light text-center text-gray-500 text-balance">
            Lorem ipsum dolor sit amet consetur adipisicing elit.
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatProfile

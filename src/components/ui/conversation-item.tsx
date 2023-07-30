import { cn } from '@/lib/utils'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Badge } from './badge'

export interface ConversationItemItemProps extends React.HTMLAttributes<HTMLDivElement> {}

const ConversationItem = React.forwardRef<HTMLDivElement, ConversationItemItemProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          className,
          'transition-all w-full flex items-center p-3 rounded-lg hover:cursor-pointer hover:bg-slate-100'
        )}
        {...props}>
        <Avatar className="w-10 h-10 mr-4">
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col justify-between w-[calc(100%-3.5rem)] gap-1">
          <div className="flex items-center justify-between w-full overflow-hidden">
            <div className="flex items-center gap-x-2">
              <div className="font-medium text-gray-700">John Doe</div>
            </div>
            <div className="text-sm font-light text-gray-400">2:00 PM</div>
          </div>
          <div className="flex items-center justify-between w-full overflow-hidden">
            <span
              className={cn(
                'text-sm font-light text-gray-400 ellipsis-line',
                'w-[calc(80%)]'
              )}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              voluptatum.
            </span>
            <Badge className="inline-block ml-2 select-none">2</Badge>
          </div>
        </div>
      </div>
    )
  }
)

ConversationItem.displayName = 'ConversationItem'

export default ConversationItem

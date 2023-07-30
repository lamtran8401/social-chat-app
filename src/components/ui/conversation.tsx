import { cn } from '@/lib/utils'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'
import ConversationItem from './conversation-item'
import { Input } from './input'

export interface InboxProps extends React.HTMLAttributes<HTMLDivElement> {}

const Conversation = React.forwardRef<HTMLDivElement, InboxProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={cn(className, 'flex flex-col py-4 h-full mr-2')}
        ref={ref}
        {...props}>
        <div className="w-full mb-6">
          <Input
            className="w-full"
            icon={<MagnifyingGlassIcon className="w-5 h-5 text-gray-400" />}
            name="search"
            maxWidth
            placeholder="Search"
          />
        </div>
        <div className="flex flex-col flex-1 gap-2 p-2 bg-white rounded-xl">
          <ConversationItem />
          <ConversationItem />
          <ConversationItem />
        </div>
      </div>
    )
  }
)
Conversation.displayName = 'Conversation'

export default Conversation

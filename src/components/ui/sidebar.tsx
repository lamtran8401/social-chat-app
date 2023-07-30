import { cn } from '@/lib/utils'
import {
  ChatBubbleOvalLeftEllipsisIcon,
  HomeIcon,
  PhoneIcon,
  UsersIcon,
} from '@heroicons/react/24/outline'
import { DialogClose } from '@radix-ui/react-dialog'
import * as React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './avatar'
import { Button } from './button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './dialog'
import { Nav, NavItem } from './navbar'

export interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  logo?: string
}

const Sidebar = React.forwardRef<HTMLDivElement, SidebarProps>(
  ({ logo, className, ...props }, ref) => {
    const [dialogOpen, setDialogOpen] = React.useState(false)

    return (
      <aside
        ref={ref}
        className={cn('bg-background flex flex-col items-center', className)}
        {...props}>
        <div className="flex flex-col items-center justify-center w-full p-4">
          <img src={logo} alt="logo" className="object-cover w-auto h-12" />
        </div>
        <Nav>
          <NavItem icon={<HomeIcon className="w-6 h-6" />} />
          <NavItem active icon={<ChatBubbleOvalLeftEllipsisIcon className="w-6 h-6" />} />
          <NavItem icon={<UsersIcon className="w-6 h-6" />} />
          <NavItem icon={<PhoneIcon className="w-6 h-6" />} />
        </Nav>

        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTrigger asChild>
            <Avatar className="w-10 h-10 mb-4 cursor-pointer">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Are you sure absolutely sure?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. Are you sure you want to permanently delete
                this file from our servers?
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose asChild>
                <Button type="submit">Confirm</Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </aside>
    )
  }
)

Sidebar.displayName = 'Sidebar'

export default Sidebar

import Sidebar from '@/components/ui/sidebar'
import { cn } from '@/lib/utils'
import React from 'react'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  const sidebarRef = React.useRef<HTMLDivElement>(null)

  return (
    <div className="grid items-start gap-x-4 grid-cols-main bg-gray-50">
      <Sidebar
        ref={sidebarRef}
        className="fixed top-0 left-0 z-50 w-auto h-screen shadow-md"
        logo="logo-chat.png"
      />
      <div
        className={cn(
          // sidebarRef.current && `w-[${sidebarRef.current.clientWidth}px]`,
          'flex justify-center h-screen row-span-1'
        )}></div>
      <main className="flex h-screen row-span-2 gap-2">
        <Outlet />
      </main>
    </div>
  )
}

export default MainLayout

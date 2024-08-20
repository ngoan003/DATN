import { Menu } from 'antd'
import Sider from 'antd/es/layout/Sider'
import { useLocation } from 'react-router-dom'
import { Menuitems } from '../Menu/Menu'

interface SidebarProps {
  collapsed: boolean
  setCollapsed: (arg: boolean) => void
}
export default function Sidebar({ collapsed, setCollapsed }: SidebarProps) {
  const { pathname } = useLocation()

  const currentPath = pathname.split('/').pop()

  return (
    <Sider
      className={`overflow-auto`}
      collapsible
      width={255}
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
    >
      <div className='demo-logo-vertical pb-5'>
        {/* <h2 className='p-5 text-2xl text-white'>Sneaker Store</h2> */}
        <img src='./logo.png' alt='' className='h-16 w-full object-cover' />
      </div>

      <Menu
        theme='dark'
        defaultSelectedKeys={[`${currentPath}`]}
        defaultOpenKeys={['manager']}
        mode='inline'
        items={Menuitems}
      />
    </Sider>
  )
}

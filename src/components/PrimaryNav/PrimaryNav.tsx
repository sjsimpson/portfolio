import { useState } from 'react'
import { useNavigate, useMatch } from 'react-router-dom'
import {
  Drawer,
  DrawerItem,
  IconVariants,
  SideNav,
  SideNavItem,
  TopNav,
  TopNavItem,
} from 'm3-react'

export interface INavLink {
  location: string
  label: string
  icon: IconVariants.IconStyles
  strictMatch: boolean
}

const PrimaryNav = () => {
  const [showDrawer, setShowDrawer] = useState<boolean>(false)
  // const [showModal, setShowModal] = useState<boolean>(false)
  const navigate = useNavigate()

  // const openModal = () => {
  //   setShowModal(true)
  // }

  // const closeModal = () => {
  //   setShowModal(false)
  // }

  const match = (path: string, activeOnlyWhenExact: boolean = false) =>
    !!useMatch({
      path,
      end: activeOnlyWhenExact,
    })

  const navLinks: INavLink[] = [
    {
      location: '/',
      label: 'About',
      icon: IconVariants.IconStyles.info,
      strictMatch: true,
    },
    {
      location: '/projects',
      label: 'Projects',
      icon: IconVariants.IconStyles.palette,
      strictMatch: false,
    },
    {
      location: '/resume',
      label: 'Resume',
      icon: IconVariants.IconStyles.list,
      strictMatch: false,
    },
    // {
    //   location: '/contact',
    //   label: 'Contact',
    //   icon: IconVariants.IconStyles.info,
    //   strictMatch: false,
    // },
  ]

  return (
    <>
      {/* Displays when screen size is UNDER 768px */}
      <TopNav
        leftSection={
          <TopNavItem
            icon={
              showDrawer
                ? IconVariants.IconStyles.menuOpen
                : IconVariants.IconStyles.menu
            }
            onClick={() => setShowDrawer(true)}
          />
        }
        rightSection={<></>}
      />

      {/* Displays when screen size is OVER 768px */}
      <SideNav
        topSection={
          <>
            {navLinks.map((link: INavLink) => (
              <SideNavItem
                match={match(link.location, link.strictMatch)}
                onClick={() => navigate(link.location)}
                icon={link.icon}
                label={link.label}
              />
            ))}
          </>
        }
        bottomSection={<></>}
      />

      {/* Nav drawer */}
      <Drawer
        isOpen={showDrawer}
        handleCloseDrawer={() => setShowDrawer(false)}
        drawerContentTop={
          <>
            <div
              className="close-drawer-button-container"
              style={{ marginLeft: '6px', marginBottom: '8px' }}
            >
              <TopNavItem
                icon={
                  showDrawer
                    ? IconVariants.IconStyles.menuOpen
                    : IconVariants.IconStyles.menu
                }
                onClick={() => setShowDrawer(false)}
              />
            </div>
            {navLinks.map((link: INavLink) => (
              <DrawerItem
                icon={link.icon}
                label={link.label}
                onClick={() => {
                  navigate(link.location)
                  setShowDrawer(false)
                }}
                match={match(link.location, link.strictMatch)}
              />
            ))}
          </>
        }
      />
    </>
  )
}

export default PrimaryNav

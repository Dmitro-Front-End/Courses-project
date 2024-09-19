// React Imports
import { useState } from 'react'
import type { ReactNode } from 'react'

// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// MUI Imports
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'

// Third-party Imports
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Types Imports
import type { Email, EmailState } from '@/types/apps/emailTypes'
import type { ThemeColor } from '@core/types'
import type { Locale } from '@/configs/i18n'


// Util Imports
import { getLocalizedUrl } from '@/utils/i18n'

// Styles Imports
import styles from './styles.module.css'

type Props = {
  store: EmailState
  isBelowLgScreen: boolean
  isBelowMdScreen: boolean
  isBelowSmScreen: boolean
  sidebarOpen: boolean
  setSidebarOpen: (value: boolean) => void
  uniqueLabels: string[]
  folder?: string
  label: string
}

type LabelColor = {
  color: ThemeColor
  colorClass: string
}

type NavigationType = {
  key : string,
  value ? : string
}

// Constants

export const labelColors: { [key: string]: LabelColor } = {
  personal: { color: 'success', colorClass: 'text-success' },
  company: { color: 'primary', colorClass: 'text-primary' },
  important: { color: 'warning', colorClass: 'text-warning' },
  private: { color: 'error', colorClass: 'text-error' }
}

const ScrollWrapper = ({ children, isBelowLgScreen }: { children: ReactNode; isBelowLgScreen: boolean }) => {
  if (isBelowLgScreen) {
    return <div className='bs-full overflow-y-auto overflow-x-hidden'>{children}</div>
  } else {
    return <PerfectScrollbar options={{ wheelPropagation: false }}>{children}</PerfectScrollbar>
  }
}

const navigations : NavigationType[] = [
  {key : 'Dashboard', value : "tabler-chevron-right"},
  {key : 'Lessons'},
  {key : 'Images & Files'},
  {key : 'Insights'},
  {key : 'Chat'}
]

const SidebarLeft = (props: Props) => {
  // Props
  const {
    store,
    isBelowLgScreen,
    isBelowMdScreen,
    isBelowSmScreen,
    sidebarOpen,
    setSidebarOpen,
    uniqueLabels,
    folder,
    label
  } = props;
  console.log(folder)

  // Hooks
  const { lang: locale } = useParams()


  return (
    <>
      <Drawer
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        className={'bs-full ' + styles.sidebarLeft_cont}
        variant={!isBelowMdScreen ? 'permanent' : 'persistent'}
        ModalProps={{ disablePortal: true, keepMounted: true }}
        sx={{
          zIndex: isBelowMdScreen && sidebarOpen ? 11 : 10,
          position: !isBelowMdScreen ? 'static' : 'absolute',
          background :'transparent',
          boxShadow : 'none',
          border : "none",
          '& .MuiDrawer-paper': {
            border : "none",
            background :'transparent',
            boxShadow: 'none',
            overflow: 'hidden',
            width: '260px',
            position: !isBelowMdScreen ? 'static' : 'absolute'
          }
        }}
      >

        <ScrollWrapper isBelowLgScreen={isBelowLgScreen}>
          <div className='flex flex-col gap-1 plb-4'>
            {navigations.map(({key, value}) => (
              <Link
                key={key}
                href={getLocalizedUrl(`/apps/email/${key}`, locale as Locale)}
                prefetch
                className={classnames('flex items-center justify-between plb-1 pli-6 gap-2.5 min-bs-8 cursor-pointer', {
                  [styles.activeSidebarListItem]: key === folder && !label
                })}
              >
                <div className={'flex items-center gap-2.5 ' + styles.navigate_container}>
                
                  <Typography className='capitalize' color='inherit'>
                    {key}
                  </Typography>
                  { value && <i className={classnames(value, 'text-xl')} />}
                </div>
              </Link>
             ))} 
          </div>
        </ScrollWrapper>
      </Drawer>
    </>
  )
}

export default SidebarLeft

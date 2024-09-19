'use client'

// React Imports
import { useEffect, useMemo, useRef, useState } from 'react'

// MUI Imports
// import Backdrop from '@mui/material/Backdrop'
import useMediaQuery from '@mui/material/useMediaQuery'
import type { Theme } from '@mui/material/styles'

// Third-party Imports
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'

// Type Imports
import type { RootState } from '@/redux-store'

// Slice Imports
// import { getActiveUserData } from '@/redux-store/slices/chat'

// Component Imports
import {OpenStudents} from './OpenStudents'
// import SidebarLeft from './SidebarLeft'
// import ChatContent from './ChatContent'

// Styles Imports
import styles from './styles.module.css'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'
import { TopNavigate } from './TopNavigate'

// Util Imports
import { commonLayoutClasses } from '@layouts/utils/layoutClasses'

import SidebarLeft from './SidebarLeft'
import { Backdrop } from '@mui/material'
import MailContent from './MailContent'

const Students = ({folder, label}: { folder?: string; label?: string }) => {
  // States
  const [backdropOpen, setBackdropOpen] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)
  // const [activeUser, setActiveUser] = useState(false)

  // Refs
  const messageInputRef = useRef<HTMLDivElement>(null)
  const isInitialMount = useRef(false)

  // Hooks
  const { settings } = useSettings()
  const emailStore = useSelector((state: RootState) => state.emailReducer)
  const studentsStore = useSelector((state: RootState) => state.studentsReducer)
  const chatStore = useSelector((state: RootState) => state.chatReducer)
  const dispatch = useDispatch()
  const isBelowMdScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))
  const isBelowSmScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'))
  const isBelowLgScreen = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'))
  // Get active user’s data
  // const activeUser = (id: number) => {
  //   dispatch(getActiveUserData(id))
  // }

  const {profileUser, lessons, courses} = useMemo(() => studentsStore, [studentsStore])

  // Vars
  const uniqueLabels = [...new Set(emailStore.emails.flatMap(email => email.labels))];



  // Focus on message input when active user changes
  useEffect(() => {
    if (chatStore.activeUser?.id !== null && messageInputRef.current) {
      messageInputRef.current.focus()
    }
  }, [chatStore.activeUser])


  // Close backdrop when sidebar is open on below md screen
  useEffect(() => {
    if (!isBelowMdScreen && backdropOpen && sidebarOpen) {
      setBackdropOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBelowMdScreen])

  // Open backdrop when sidebar is open on below sm screen
  useEffect(() => {
    if (!isBelowSmScreen && sidebarOpen) {
      setBackdropOpen(true)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isBelowSmScreen])

  // Close sidebar when backdrop is closed on below md screen
  useEffect(() => {
    if (!backdropOpen && sidebarOpen) {
      setSidebarOpen(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [backdropOpen])

  // Handle backdrop on click
  const handleBackdropClick = () => {
    setSidebarOpen(false)
    setBackdropOpen(false)
  }

  return (
    <div style={{width : '100%'}}>
      <div style={{width : '100%'}}>
      <TopNavigate userName={profileUser.fullName}/>
      <OpenStudents />
      </div>

      <div
      className={classnames(commonLayoutClasses.contentHeightFixed, styles.contentContainer ,'flex is-full gap-5 overflow-hidden rounded relative', {
        border: settings.skin === 'bordered',
        'shadow-md': settings.skin !== 'bordered'
      })}
    >
      <SidebarLeft
        store={emailStore}
        isBelowLgScreen={isBelowLgScreen}
        isBelowMdScreen={isBelowMdScreen}
        isBelowSmScreen={isBelowSmScreen}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        folder={'Lessons'}
        uniqueLabels={uniqueLabels}
        label={label || ''}
      />
      <Backdrop 
        open={backdropOpen} 
        onClick={handleBackdropClick} 
        className='absolute z-10' />
      <MailContent
        courses={courses}
        lessons={lessons}
        store={emailStore}
        dispatch={dispatch}
        folder={folder}
        label={label}
        uniqueLabels={uniqueLabels}
        isInitialMount={isInitialMount.current}
        setSidebarOpen={setSidebarOpen}
        isBelowLgScreen={isBelowLgScreen}
        isBelowMdScreen={isBelowMdScreen}
        isBelowSmScreen={isBelowSmScreen}
        setBackdropOpen={setBackdropOpen}
      />
    </div>
    
      {/* <SidebarLeft
        chatStore={chatStore}
        getActiveUserData={activeUser}
        dispatch={dispatch}
        backdropOpen={backdropOpen}
        setBackdropOpen={setBackdropOpen}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        isBelowLgScreen={isBelowLgScreen}
        isBelowMdScreen={isBelowMdScreen}
        isBelowSmScreen={isBelowSmScreen}
        messageInputRef={messageInputRef}
      /> */}

      {/* <ChatContent
        chatStore={chatStore}
        dispatch={dispatch}
        backdropOpen={backdropOpen}
        setBackdropOpen={setBackdropOpen}
        setSidebarOpen={setSidebarOpen}
        isBelowMdScreen={isBelowMdScreen}
        isBelowLgScreen={isBelowLgScreen}
        isBelowSmScreen={isBelowSmScreen}
        messageInputRef={messageInputRef}
      />

      <Backdrop open={backdropOpen} onClick={() => setBackdropOpen(false)} className='absolute z-10' /> */}
    </div>
  )
}

export default Students

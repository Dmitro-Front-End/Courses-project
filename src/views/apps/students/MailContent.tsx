// React Imports
import { useState } from 'react'
import type { MouseEvent } from 'react'

// Types Imports
import type { AppDispatch } from '@/redux-store'
import type { EmailState } from '@/types/apps/emailTypes'
import type { LessonsType } from '@/types/apps/studentsTypes'

// Slice Imports
import { moveEmailsToFolder, deleteTrashEmails, toggleReadEmails, toggleStarEmail } from '@/redux-store/slices/email'

// Component Imports
// import MailContentSearch from './MailContentSearch'
import MailContentActions from './MailContentActions'
import MailContentList from './MailContentList'
import MailDetails from './MailDetails'

type Props = {
  lessons: LessonsType[]
  courses : string[],
  folder?: string
  label?: string
  store: EmailState
  dispatch: AppDispatch
  uniqueLabels: string[]
  isInitialMount: boolean
  setSidebarOpen: (value: boolean) => void
  isBelowLgScreen: boolean
  isBelowMdScreen: boolean
  isBelowSmScreen: boolean
  setBackdropOpen: (value: boolean) => void,
 
}

const MailContent = (props: Props) => {
  // Props
  const {
    folder,
    courses,
    label,
    store,
    dispatch,
    uniqueLabels,
    isInitialMount,
    setSidebarOpen,
    isBelowLgScreen,
    isBelowMdScreen,
    isBelowSmScreen,
    setBackdropOpen,
    lessons,
    
  } = props

  // States
  const [selectedEmails, setSelectedEmails] = useState<Set<number>>(new Set())
  const [drawerOpen, setDrawerOpen] = useState<boolean>(false)
  const [reload, setReload] = useState<boolean>(false)
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false)
  const [searchTerm, setSearchTerm] = useState<string>('')

  // Vars
  const emails = store.filteredEmails;
  // const emails = store.filteredEmails
  const currentEmail = emails.find(email => email.id === store.currentEmailId)

  const areFilteredEmailsNone = lessons.length === 0;

  
  // Toggle for change modal
  const changeModal = () => setIsOpenModal(!isOpenModal)

  // Action for deleting single email
  const handleSingleEmailDelete = (e: MouseEvent, emailId: number) => {
    e.stopPropagation()
    setSelectedEmails(prevSelectedEmails => {
      const newSelectedEmails = new Set(prevSelectedEmails)

      newSelectedEmails.delete(emailId)

      return newSelectedEmails
    })

    if (folder === 'trash') {
      dispatch(deleteTrashEmails({ emailIds: [emailId] }))
    } else {
      dispatch(moveEmailsToFolder({ emailIds: [emailId], folder: 'trash' }))
    }
  }

  // Toggle read status for single email
  const handleToggleIsReadStatus = (e: MouseEvent, id: number) => {
    e.stopPropagation()
    dispatch(toggleReadEmails({ emailIds: [id] }))
  }

  // Toggle star for single email
  const handleToggleStarEmail = (e: MouseEvent, id: number) => {
    e.stopPropagation()
    dispatch(toggleStarEmail({ emailId: id }))
  }

  return (
    <div className='flex flex-col items-center justify-center is-full bs-full relative overflow-hidden bg-backgroundPaper'>
     
      <MailContentActions
        changeModal={changeModal}
        dispatch={dispatch}
        isOpenModal={isOpenModal}
        courses={courses}
      />

      <MailContentList
        lessons={lessons}
        isInitialMount={isInitialMount}
        isBelowSmScreen={isBelowSmScreen}
        isBelowLgScreen={isBelowLgScreen}
        reload={reload}
        areFilteredEmailsNone={areFilteredEmailsNone}
        searchTerm={searchTerm}
        selectedEmails={selectedEmails}
        dispatch={dispatch}
        store={store}
        emails={emails}
        folder={folder}
        setSelectedEmails={setSelectedEmails}
        setDrawerOpen={setDrawerOpen}
        handleToggleStarEmail={handleToggleStarEmail}
        handleSingleEmailDelete={handleSingleEmailDelete}
        handleToggleIsReadStatus={handleToggleIsReadStatus}
        
      />
      {/* <MailDetails
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        isBelowSmScreen={isBelowSmScreen}
        isBelowLgScreen={isBelowLgScreen}
        currentEmail={currentEmail}
        emails={emails}
        folder={folder}
        label={label}
        dispatch={dispatch}
        handleSingleEmailDelete={handleSingleEmailDelete}
        handleToggleIsReadStatus={handleToggleIsReadStatus}
        handleToggleStarEmail={handleToggleStarEmail}
      /> */}
    </div>
  )
}

export default MailContent

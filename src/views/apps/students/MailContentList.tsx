// React Imports
import type { Dispatch, MouseEvent, ReactNode, SetStateAction } from 'react'

// MUI Imports
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Backdrop from '@mui/material/Backdrop'
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

// Third-party Imports
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'

// Type Imports
import type { AppDispatch } from '@/redux-store'
import type { Email, EmailState } from '@/types/apps/emailTypes'
import type { LessonsType, StatusStudentType } from '@/types/apps/studentsTypes'

// Styles Imports
import styles from './styles.module.css'


type Props = {
  lessons: LessonsType[]
  isInitialMount: boolean
  isBelowSmScreen: boolean
  isBelowLgScreen: boolean
  reload: boolean
  areFilteredEmailsNone: boolean
  searchTerm: string
  selectedEmails: Set<number>
  dispatch: AppDispatch
  store: EmailState
  emails: Email[]
  folder?: string
  setSelectedEmails: Dispatch<SetStateAction<Set<number>>> // This type has been written to solve type error in this file
  setDrawerOpen: (value: boolean) => void
  handleToggleStarEmail: (e: MouseEvent, id: number) => void
  handleSingleEmailDelete: (e: MouseEvent, id: number) => void
  handleToggleIsReadStatus: (e: MouseEvent, id: number) => void
}

type stylesStatysType = { color: string, background: string }

const ScrollWrapper = ({ children, isBelowLgScreen }: { children: ReactNode; isBelowLgScreen: boolean }) => {
  if (isBelowLgScreen) {
    return <div className='bs-full overflow-y-auto overflow-x-hidden relative'>{children}</div>
  } else {
    return <PerfectScrollbar options={{ wheelPropagation: false }}>{children}</PerfectScrollbar>
  }
}

const getDateString = (date: Date): string => {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: '2-digit'
  };

  return date.toLocaleDateString('en-US', options);
}

const getStatusStyle = (status: StatusStudentType): stylesStatysType => {
  switch (status) {
    case "Requested": return { color: 'purple', background: 'rgba(228, 217, 255, 1)' };
    case "Booked": return { color: 'orange', background: 'rgba(255, 227, 209, 1)' };
    case "Done": return { color: 'blue', background: 'rgba(211, 229, 255, 1)' };
    case "Completed": return { color: 'green', background: 'rgba(214, 255, 220, 1)' };
    case "Canceled": return { color: 'red', background: 'rgba(199, 11, 11, 1)' }
    default: return { color: 'red', background: '' }
  }
}

const MailContentList = (props: Props) => {
  // Props
  const {
    lessons,
    isInitialMount,
    isBelowLgScreen,
    reload,
    areFilteredEmailsNone
  } = props

  return isInitialMount ? (
    <div className={'flex items-center justify-center gap-2 grow is-full ' + styles.studetsContentLoading}>
      <CircularProgress />
      <Typography>Loading...</Typography>
    </div>
  ) : areFilteredEmailsNone ? (
    <div className='relative flex justify-center gap-2 grow is-full bg-backgroundPaper'>
      <Typography className='m-3'>No lessons found!</Typography>
      {reload && (
        <Backdrop open={reload} className='absolute text-white z-10 bg-textDisabled'>
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
    </div>
  ) : (
    <div className='relative overflow-hidden grow is-full'>
      <ScrollWrapper isBelowLgScreen={isBelowLgScreen}>
        <div className='flex flex-col'>
          <div className={classnames('p-4 cursor-pointer', styles.studentList)} >
            <div className={styles.colTitleName}>NAME</div>
            <div className={styles.colTitleName + ' ' + styles.colTitleNameBorder}>DATE</div>
            <div className={styles.colTitleName + ' ' + styles.colTitleNameBorder}>STATUS</div>
          </div>
        </div>

        <div className='flex flex-col'>
          {lessons
            .map(lesson => (
              <div
                key={lesson.id}
                className={classnames('p-4 cursor-pointer', styles.studentList)}
              >
                <div className={styles.colTitleName + ' ' + styles.colText}>{lesson.fullName}</div>
                <div className={styles.colTitleName + ' ' + styles.colText}>{getDateString(lesson.date)}</div>
                <div className={styles.colTitleName} >
                  <p className={styles.colStatus} style={getStatusStyle(lesson.status)}>{lesson.status}</p>
                </div>

              </div>
            ))}
        </div>
        <div className={styles.paginationCont}>
          <div>
          Showing 1 to 10 of {lessons.length} lessons
          </div>
        <Stack spacing={2}>
          <Pagination count={6} showFirstButton showLastButton />
        </Stack>

        </div>
      </ScrollWrapper>
      {reload && (
        <Backdrop open={reload} className='absolute text-white z-10 bg-textDisabled'>
          <CircularProgress color='inherit' />
        </Backdrop>
      )}
    </div>
  )
}

export default MailContentList

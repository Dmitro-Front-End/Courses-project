// MUI Imports
import { Button } from '@mui/material'

// Type Imports
import type { AppDispatch } from '@/redux-store'

import {StudentsModal} from './StudentsModal'


type Props = {
  dispatch: AppDispatch
  changeModal: () => void
  isOpenModal : boolean,
  courses : string[]
}

const MailContentActions = (props: Props) => {
  // Props
  const {
    changeModal,
    dispatch,
    isOpenModal,
    courses
  } = props


  return (
    <div className='flex items-center justify-end gap-4 max-sm:gap-0.5 is-full pli-4 plb-2 border-be'>
      <Button color='primary' variant='contained' onClick={changeModal}>
        Request Lab
      </Button> 

     <StudentsModal courses={courses} dispatch={dispatch} isOpen={isOpenModal} changeModal={changeModal}/>
    </div>
  )
}

export default MailContentActions

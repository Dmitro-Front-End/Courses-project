// Styles Imports
import { addNewCourses } from '@/redux-store/slices/students';
import styles from './styles.module.css'
import { AppDispatch } from '@/redux-store';



type Props = {
  changeModal: () => void
  courses : string[]
  isOpen: boolean
  dispatch: AppDispatch
}

export const StudentsModal = (props: Props) => {
  const { changeModal, isOpen, dispatch, courses } = props;

  
  
  if (!isOpen) return null

  
  const addCourses = (fullName: string) => dispatch(addNewCourses({
    fullName,
    id: Math.random(),
    status: 'Requested',
    date: new Date(new Date().getTime() - 24 * 60 * 60 * 1000)
  }))


  return (
    <div className={styles.modalGlobal}>


      <div className={styles.StudentsModal}>

        <div className={styles.ModalTop}>
          <button onClick={changeModal} className={styles.bntCloseModal}>x</button>
          <h2>Request New Lesson</h2>
          <span className={styles.sp}>Please select the lesson you want to request for the student</span>
          <div className={styles.inputSearchDiv}>
            <input type='text' placeholder='Search' />
            <i className='tabler-search tabler-lupa'></i>
          </div>
        </div>

        <div className={styles.modalOptionsBlock}>
          <h2>Options</h2>
          <div>
          {courses.map((el : string) => {
              return <div key={el} className={styles.modalOptionsBox}>
                  <input type='checkbox' checked={true}/>
                  <p>{el}</p>
              </div>
          })}
          </div>
        </div>

        <div className={styles.modalCloseandSendBlock}>
          <button className={styles.btnClose}>Close</button>
          <button className={styles.btnSend}>Send</button>
        </div>

      </div>
    </div>
  )
}

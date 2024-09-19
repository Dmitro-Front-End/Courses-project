import styles from './styles.module.css'

type TopNavigateType = {
    userName : string
  }

export const TopNavigate = ({userName} : TopNavigateType ) => {
  return (
          <div className={styles.mainDiv}>
            <i className="tabler-chevron-left"></i>

            <div className={styles.divStudents}>
            <i className="tabler-users"></i>
            <p className={styles.pElem}>Students</p>
            </div>
            <span  className={styles.topNavigateSlesh}>/</span>
            <div className={styles.divUsername}>
            <i className="tabler-user"></i>
            <p className={styles.pElem}>{userName}</p>
        </div>
        
       
        </div>
  )
}

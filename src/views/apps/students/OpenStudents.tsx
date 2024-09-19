import styles from './styles.module.css'

// React Imports
import Image from 'next/image'


export const OpenStudents = () => {
  return (
    <div className={styles.blockStudents}>
      <Image src={'/images/students/Avatar.png'} alt='foto' width={100} height={100}/>
      <div className={styles.divStudentsData}>
            <h1>Kristin Watson</h1>
            <div>
                <span>
                Registration Date:
                </span>
                <p>
                03.07.2024
                </p>
            </div>
            <button>Ongoing Educational Program</button>
      </div>
    </div>
  )
}

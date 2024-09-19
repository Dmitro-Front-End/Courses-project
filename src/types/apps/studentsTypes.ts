export type StatusStudentType = 'Requested' | 'Booked' | 'Done' | 'Completed' | 'Canceled'

export type ProfileUserType = {
  id: number
  role: string
  about: string
  avatar: string
  fullName: string
  settings: {
    isNotificationsOn: boolean
    isTwoStepAuthVerificationEnabled: boolean
  }
}

export type LessonsType = {
  id: number
  fullName: string
  date: Date
  status: StatusStudentType
}



export type StudentsDataType = {
  profileUser: ProfileUserType
  lessons : LessonsType[],
  courses : string[]
}


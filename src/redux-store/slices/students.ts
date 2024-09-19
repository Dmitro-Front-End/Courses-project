// Third-party Imports
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Type Imports
import type { LessonsType } from '@/types/apps/studentsTypes'

// Data Imports
import { db } from '@/fake-db/apps/students'

export const studentsSlice = createSlice({
  name: 'students',
  initialState: db,
  reducers: {
    toggleStarLessons: (state, action: PayloadAction<LessonsType[]>) => {
      state.lessons = action.payload;
  },
  addNewCourses : (state, action: PayloadAction<LessonsType>) => {
    state.lessons.push(action.payload)
  }
  }
})

export const { toggleStarLessons, addNewCourses} = studentsSlice.actions

export default studentsSlice.reducer

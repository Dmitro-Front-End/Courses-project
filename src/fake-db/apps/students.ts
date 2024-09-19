// Type Imports
import type { StudentsDataType } from '@/types/apps/studentsTypes'

const previousDay = () => new Date(new Date().getTime() - 24 * 60 * 60 * 1000)

export const db: StudentsDataType = {
  profileUser: {
    id: 1,
    avatar: '/images/avatars/1.png',
    fullName: 'John Doe',
    role: 'Admin',
    about:
      'Dessert chocolate cake lemon drops jujubes. Biscuit cupcake ice cream bear claw brownie brownie marshmallow.',
    settings: {
      isTwoStepAuthVerificationEnabled: true,
      isNotificationsOn: false
    }
  },
  lessons: [
    {
      id: 1,
      fullName: 'Obstetrics and Gynecology',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 2,
      fullName: 'Endocrinology Basics',
      status: 'Requested',
      date : previousDay()
    },
    {
      id: 3,
      fullName: 'Cardiovascular System Studies',
      status: 'Done',
      date : previousDay()
    },
    {
      id: 4,
      fullName: 'Renal Physiology',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 5,
      fullName: 'Hematology',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 6,
      fullName: 'Immunology Fundamentals',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 7,
      fullName: 'Advanced Cardiopulmonary Systems',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 8,
      fullName: 'Dermatology and Skin Disorders',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 9,
      fullName: 'Orthopedics and Musculoskeletal Health',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 10,
      fullName: 'Psychiatry and Behavioral Health',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 11,
      fullName: 'Endocrinology Basics',
      status: 'Requested',
      date : previousDay()
    },
    {
      id: 12,
      fullName: 'Cardiovascular System Studies',
      status: 'Done',
      date : previousDay()
    },
    {
      id: 13,
      fullName: 'Renal Physiology',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 14,
      fullName: 'Hematology',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 15,
      fullName: 'Immunology Fundamentals',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 16,
      fullName: 'Advanced Cardiopulmonary Systems',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 17,
      fullName: 'Dermatology and Skin Disorders',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 18,
      fullName: 'Orthopedics and Musculoskeletal Health',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 19,
      fullName: 'Psychiatry and Behavioral Health',
      status: 'Booked',
      date : previousDay()
    },{
      id: 20,
      fullName: 'Endocrinology Basics',
      status: 'Requested',
      date : previousDay()
    },
    {
      id: 21,
      fullName: 'Cardiovascular System Studies',
      status: 'Done',
      date : previousDay()
    },
    {
      id: 22,
      fullName: 'Renal Physiology',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 23,
      fullName: 'Hematology',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 24,
      fullName: 'Immunology Fundamentals',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 25,
      fullName: 'Advanced Cardiopulmonary Systems',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 26,
      fullName: 'Dermatology and Skin Disorders',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 27,
      fullName: 'Orthopedics and Musculoskeletal Health',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 28,
      fullName: 'Psychiatry and Behavioral Health',
      status: 'Booked',
      date : previousDay()
    },{
      id: 29,
      fullName: 'Endocrinology Basics',
      status: 'Requested',
      date : previousDay()
    },
    {
      id: 30,
      fullName: 'Cardiovascular System Studies',
      status: 'Done',
      date : previousDay()
    },
    {
      id: 31,
      fullName: 'Renal Physiology',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 32,
      fullName: 'Hematology',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 33,
      fullName: 'Immunology Fundamentals',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 34,
      fullName: 'Advanced Cardiopulmonary Systems',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 35,
      fullName: 'Dermatology and Skin Disorders',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 36,
      fullName: 'Orthopedics and Musculoskeletal Health',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 37,
      fullName: 'Psychiatry and Behavioral Health',
      status: 'Booked',
      date : previousDay()
    },{
      id: 38,
      fullName: 'Endocrinology Basics',
      status: 'Requested',
      date : previousDay()
    },
    {
      id: 39,
      fullName: 'Cardiovascular System Studies',
      status: 'Done',
      date : previousDay()
    },
    {
      id: 40,
      fullName: 'Renal Physiology',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 41,
      fullName: 'Hematology',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 42,
      fullName: 'Immunology Fundamentals',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 43,
      fullName: 'Advanced Cardiopulmonary Systems',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 44,
      fullName: 'Dermatology and Skin Disorders',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 45,
      fullName: 'Orthopedics and Musculoskeletal Health',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 46,
      fullName: 'Psychiatry and Behavioral Health',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 47,
      fullName: 'Immunology Fundamentals',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 48,
      fullName: 'Advanced Cardiopulmonary Systems',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 49,
      fullName: 'Dermatology and Skin Disorders',
      status: 'Booked',
      date : previousDay()
    },
    {
      id: 50,
      fullName: 'Orthopedics and Musculoskeletal Health',
      status: 'Booked',
      date : previousDay()
    },
  ],
  courses : [
    'Immunology Fundamentals',
    'Hematology',
    'Orthopedics and Musculoskeletal Health',
    'Obstetrics and Gynecology',
    'Cardiovascular System Studies',
    'Renal Physiology',
    'Endocrinology Basics',
    'Immunology Fundamentals',
    'Advanced Cardiopulmonary Systems',
  ]
}

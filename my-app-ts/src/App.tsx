import React from 'react'

interface CoursePartBase {
  name: string
  exerciseCount: number
  type: string
}

interface CourseNormalPart extends CoursePartBase {
  type: 'normal'
}

interface CourseProjectPart extends CoursePartBase {
  type: 'groupProject'
  groupProjectCount: number
}

interface CourseSubmissionPart extends CoursePartBase {
  type: 'submission'
  exerciseSubmissionLink: string
}

interface CourseCombinePart extends CoursePartBase {
  type: 'normal' | 'submission'
  description: string
  exerciseSubmissionLink?: string
}

interface CourseBackendPart extends CoursePartBase {
  type: 'special'
  requirements: string[]
  description: string
}

type CoursePart =
  | CourseNormalPart
  | CourseProjectPart
  | CourseSubmissionPart
  | CourseCombinePart
  | CourseBackendPart

const Part = ({ coursepart }: { coursepart: CoursePart }) => {
  switch (coursepart.type) {
    case 'normal':
      return (
        <>
          {coursepart.name} {coursepart.type} {coursepart.exerciseCount}
        </>
      )
    case 'groupProject':
      return (
        <>
          {coursepart.name} {coursepart.type} {coursepart.exerciseCount}{' '}
          {coursepart.groupProjectCount}
        </>
      )
    case 'submission':
      return (
        <>
          {coursepart.name} {coursepart.type} {coursepart.exerciseCount}{' '}
          {coursepart.exerciseSubmissionLink}
        </>
      )
    case 'special':
      return <>special</>
    default:
      return <></>
      break
  }
}

const Header = ({ courseName }: { courseName: string }) => <h1>{courseName}</h1>
const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <>
      {courseParts.map((item) => (
        <p key={item.name}>
          <Part coursepart={item} />
        </p>
      ))}
    </>
  )
}
const Total = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <p>
      Number of exercises{''}
      {courseParts.reduce((carry, part) => carry + part.exerciseCount, 0)}
    </p>
  )
}

const App: React.FC = () => {
  const courseName = 'Half Stack application development'
  const courseParts: CoursePart[] = [
    {
      name: 'Fundamentals',
      exerciseCount: 10,
      description: 'This is the leisured course part',
      type: 'normal',
    },
    {
      name: 'Advanced',
      exerciseCount: 7,
      description: 'This is the harded course part',
      type: 'normal',
    },
    {
      name: 'Using props to pass data',
      exerciseCount: 7,
      groupProjectCount: 3,
      type: 'groupProject',
    },
    {
      name: 'Deeper type usage',
      exerciseCount: 14,
      description: 'Confusing description',
      exerciseSubmissionLink: 'https://fake-exercise-submit.made-up-url.dev',
      type: 'submission',
    },
    {
      name: 'Backend development',
      exerciseCount: 21,
      description: 'Typing the backend',
      requirements: ['nodejs', 'jest'],
      type: 'special',
    },
  ]

  return (
    <div>
      <Header courseName={courseName} />
      <Content courseParts={courseParts} />
      <Total courseParts={courseParts} />
    </div>
  )
}

export default App

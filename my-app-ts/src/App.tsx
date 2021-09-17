import React from 'react'

interface CoursePartBase {
  name: string
  exerciseCount: number
  type: string
}

interface CourseNormalPart extends CoursePartBase {
  type: 'normal'
  description: string
}

interface CourseProjectPart extends CoursePartBase {
  type: 'groupProject'
  groupProjectCount: number
}

interface CourseSubmissionPart extends CoursePartBase {
  type: 'submission'
  description: string
  exerciseSubmissionLink: string
}

type CoursePart = CourseNormalPart | CourseProjectPart | CourseSubmissionPart

const Header = ({ courseName }: { courseName: string }) => <h1>{courseName}</h1>
const Content = ({ courseParts }: { courseParts: CoursePart[] }) => {
  return (
    <>
      {courseParts.map((item) => (
        <p key={item.name}>
          {item.name} {item.exerciseCount}
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

import React from 'react'

const Course = ({ course }) => {
    const total = course.parts.reduce((sum, item) => sum + item.exercises, 0)

    return (
        <>
            <h1>{course.name}</h1>
            {course.parts.map(item => <div key={item.id}>{item.name} {item.exercises}</div>)}
            <h3>total of {total} exercises</h3>
        </>
    )
}

export default Course
import React from "react"

const Numbers = ({ flag, persons, filterPersons }) => {
    if (!flag) {
        return <div>{persons.map(item => <div key={item.name}>{item.name} {item.number}</div>)}</div>
    } else {
        return <div>{filterPersons.map(item => <div key={item.name}>{item.name} {item.number}</div>)}</div>
    }
}

export default Numbers
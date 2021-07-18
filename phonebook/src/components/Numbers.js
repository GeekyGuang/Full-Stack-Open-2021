import React from "react"

const Numbers = ({ flag, persons, filterPersons, handleDelete }) => {
    if (!flag) {
        return <div>{persons.map(item =>
            <div key={item.id}>
                {item.name} {item.number}
                <button onClick={() => handleDelete(item)}>delete</button>
            </div>)}
        </div>
    } else {
        return <div>{filterPersons.map(item =>
            <div key={item.id}>
                {item.name} {item.number}
                <button onClick={() => handleDelete(item)}>delete</button>
            </div>)}
        </div>
    }
}

export default Numbers
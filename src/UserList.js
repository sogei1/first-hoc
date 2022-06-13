import React, { useEffect, useState } from 'react'

const UserList = () => {

    const [users, setUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch("https://jsonplaceholder.typicode.com/users")
            const data = await res.json()
            setUsers(data)
            //console.log(data)
        }
        fetchUsers();
    }, [])

    const renderFilteredUserList = users.filter(({name}) => {
        return name.indexOf(searchTerm) >= 0
    }).map((user) => {
        return(
            <div key={user.id}>
                <p> {user.name}</p>
            </div>
        )
    })

    const renderUserList = users.map((user) => {
        return(
            <div key={user.id}>
                <p> {user.name}</p>
            </div>
        )
    })

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            ></input>
            {renderFilteredUserList}
        </div>
    )
}

export default UserList
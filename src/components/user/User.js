import { useEffect, useState } from "react"
import { Users } from "./Users";

const User = ({ backgroundColor, color }) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json(setUsers))
      .then(res => setUsers(res))
    }, []);

    return (
        <div style={{backgroundColor, color}}>
            {users.map(users => <Users key={users.id} users={users} />)}
        </div>
    )
}

export { User };

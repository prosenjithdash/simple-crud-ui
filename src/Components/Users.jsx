import { useState } from "react";
import { useLoaderData } from "react-router-dom";

// Read data step - 04 show display from database data (ui side)
const Users = () => {
    const loadedUsers = useLoaderData();
    ////Delete data step - 4  (users.jsx ui side)
    const [users, setUsers] = useState(loadedUsers);

    //Delete data step - 2
    const handleDelete = _id  => {
        console.log('Delete', _id)
        fetch(`http://localhost:2000/users/${_id}`, {
            method: 'DELETE',
            
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    alert('Deleted successfully.')

                    ////Delete data step - 5 (users.jsx ui side)
                    const remaining = users.filter(user => user._id !== _id);
                    setUsers(remaining);
            }
        })
    }
    ////Delete data step - 3  (index.js server side)

    return (
        <div>
            <h2>{users.length}</h2>
            {/* Delete data step -1 */}
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : {user.email} <button onClick={()=>handleDelete(user._id)}>X</button></p>)
                }
            </div>
        </div>
    );
};

export default Users;
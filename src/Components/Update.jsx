// Update data step - 02
// Update data step - 03 (main.jsx ui side)

import { useLoaderData } from "react-router-dom";

const Update = () => {

    // Update data step - 05 (update.jsx ui side)
    const loadedUser = useLoaderData();

    // Update data step - 06 (update.jsx ui side)
    // Update data step - 07 (index.js server side)

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = { name, email };
        console.log(name, email)
        
        // Update data step - 08 (update.jsx ui side)
        // Update data step - 09 (index.js server side)

        fetch(`http://localhost:2000/users/${loadedUser._id}`,{
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            
            body: JSON.stringify(updatedUser)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                
                if (data.modifiedCount > 0) {
                alert('Updated successfully.')
            }
        })

    } 

    return (
        <div>
            <h2>Update of data {loadedUser.name}</h2>
            
            <form onSubmit={handleUpdate}>
                <input type="text" name="name" defaultValue={loadedUser?.name} id="" /><br />
                <input type="email" name="email" defaultValue={loadedUser?.email} id="" /><br />
                <input type="submit" value="Update" />
            </form>
        </div>
    );
};

export default Update;
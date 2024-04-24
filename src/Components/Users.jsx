import { useLoaderData } from "react-router-dom";

// Read data step - 04 show display from database data (ui side)
const Users = () => {
    const users = useLoaderData();

    return (
        <div>
            <h2>{users.length}</h2>
            <div>
                {
                    users.map(user => <p key={user._id}>{user.name} : { user.email}</p>)
                }
            </div>
        </div>
    );
};

export default Users;
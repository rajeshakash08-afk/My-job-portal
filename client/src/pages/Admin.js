import React, { useEffect, useState } from "react";
import axios from "axios";

function Admin() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/admin/all-data")
            .then(res => setData(res.data))
            .catch(err => console.log(err));
    }, []);

    return (
        <div>
            <h1>Admin Dashboard</h1>

            <h2>Contact Messages</h2>
            {data.contacts?.map((c, i) => (
                <p key={i}>{c.name} - {c.email} - {c.message}</p>
            ))}

            <h2>Job Applications</h2>
            {data.jobs?.map((j, i) => (
                <p key={i}>{j.name} - {j.email}</p>
            ))}

            <h2>Users</h2>
            {data.users?.map((u, i) => (
                <p key={i}>{u.firstName} {u.lastName} - {u.email}</p>
            ))}
        </div>
    );
}

export default Admin;
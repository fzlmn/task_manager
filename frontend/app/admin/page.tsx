"use client";

import React, { useEffect, useState } from "react";
import { useUserContext } from "../../context/userContext";

interface User {
_id: number;
name: string;
email: string;
role: string;
}

const AdminPage = () => {
const { allUsers, getAllUsers, deleteUser } = useUserContext();
const [loading, setLoading] = useState<boolean>(true);
const [error, setError] = useState<string | null>(null);

useEffect(() => {
const fetchUsers = async () => {
    try {
    await getAllUsers();
    setLoading(false);
    } catch (err) {
    setError("Failed to fetch users.");
    setLoading(false);
    }
};
fetchUsers();
}, [getAllUsers]);

const handleDeleteUser = async (_id: number) => {
try {
    await deleteUser(_id);
} catch (err) {
    setError("Failed to delete user.");
}
};

if (loading) return <p>Loading...</p>;

// Filter users to show only those with role 'user'
const filteredUsers = allUsers?.filter((user: User) => user.role === "user");

return (
<main className="m-6">
    <h1 className="text-2xl font-bold">User Management</h1>
    {error && <p className="text-red-500">{error}</p>}
    <table className="mt-6 w-full table-auto">
    <thead>
        <tr>
        <th className="px-4 py-2 border">Name</th>
        <th className="px-4 py-2 border">Email</th>
        <th className="px-4 py-2 border">Role</th>
        <th className="px-4 py-2 border">Actions</th>
        </tr>
    </thead>
    <tbody>
        {filteredUsers?.map((user: User) => (
        <tr key={user._id} className="hover:bg-gray-100">
            <td className="px-4 py-2 border">{user.name}</td>
            <td className="px-4 py-2 border">{user.email}</td>
            <td className="px-4 py-2 border">{user.role}</td>
            <td className="px-4 py-2 border">
            <button
                className="ml-4 text-red-500"
                onClick={() => handleDeleteUser(user._id)}
            >
                Delete
            </button>
            </td>
        </tr>
        ))}
    </tbody>
    </table>
</main>
);
};

export default AdminPage;

"use client"

import React, { useEffect, useState } from 'react';
import CourseCard from '@/components/CourseCard';

interface Course {
    id: number;
    title: string;
    activeDate: string;
    endDate: string;
    paymentMade: number;
    nextPaymentDate: string;
    paymentDueAmount: number;
}

interface User {
    id: number;
    name: string;
    email: string;
    courses: Course[];
}

const Dashboard: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const response = await fetch('/api/users');
            const data = await response.json();
            setUsers(data);
        };

        fetchUsers();
    }, []);

    return (
        <div className="min-w-full p-4 bg-gradient-to-b from-blue-100 to-white text-darkBlue tracking-wide">
            <h1 className="text-4xl font-bold text-center p-8">Student Dashboard</h1>
            {users.map(user => (
                <div key={user.id}>
                    <h2 className="text-2xl font-semibold px-4 pt-6 border-t-2 border-uniLightBlue">{user.name}</h2>
                    {user.courses.map(course => (
                        <CourseCard key={course.id} course={course} />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default Dashboard;

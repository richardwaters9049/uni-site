import React from 'react';
import { format } from 'date-fns';

interface Course {
    title: string;
    activeDate: string;
    endDate: string;
    paymentMade: number;
    nextPaymentDate: string;
    paymentDueAmount: number;
}

interface CourseCardProps {
    course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
    // Format dates using date-fns
    const formatDate = (dateString: string) => {
        return format(new Date(dateString), 'dd-MM-yyyy'); // Format as 'DD-MM-YYYY'
    };

    return (
        <div className="p-4 mb-4 tracking-wide flex flex-col gap-3">
            <h3 className="text-xl font-bold mb-2">{course.title}</h3>
            <p className="text-m mb-1"><strong>Active Date:</strong> {formatDate(course.activeDate)}</p>
            <p className="text-m mb-1"><strong>End Date:</strong> {formatDate(course.endDate)}</p>
            <p className="text-m mb-1"><strong>Payment Made:</strong> £{course.paymentMade}</p>
            <p className="text-m mb-1"><strong>Next Payment Date:</strong> {formatDate(course.nextPaymentDate)}</p>
            <p className="text-m"><strong>Payment Due Amount:</strong> £{course.paymentDueAmount}</p>
        </div>
    );
};

export default CourseCard;

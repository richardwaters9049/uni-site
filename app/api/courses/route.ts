import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const {
    title,
    activeDate,
    endDate,
    paymentMade,
    nextPaymentDate,
    paymentDueAmount,
    userId,
  } = await request.json();

  try {
    const newCourse = await prisma.course.create({
      data: {
        title,
        activeDate: new Date(activeDate),
        endDate: new Date(endDate),
        paymentMade,
        nextPaymentDate: new Date(nextPaymentDate),
        paymentDueAmount,
        user: { connect: { id: userId } },
      },
    });
    return NextResponse.json(newCourse);
  } catch (error) {
    return NextResponse.json(
      { error: "Error creating course" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}

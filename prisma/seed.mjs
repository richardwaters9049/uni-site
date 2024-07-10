import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  const user1 = await prisma.user.create({
    data: {
      name: 'Alice Johnson',
      email: 'alice@example.com',
      courses: {
        create: [
          {
            title: 'Engineering',
            activeDate: new Date('2024-01-01'),
            endDate: new Date('2024-07-01'),
            paymentMade: 300,
            nextPaymentDate: new Date('2024-10-10'),
            paymentDueAmount: 200,
          },
        ],
      },
    },
  });

  const user2 = await prisma.user.create({
    data: {
      name: 'Bob Smith',
      email: 'bob.smith@example.com', // Ensure the email is unique
      courses: {
        create: [
          {
            title: 'Mathematics',
            activeDate: new Date('2024-01-15'),
            endDate: new Date('2024-07-15'),
            paymentMade: 400,
            nextPaymentDate: new Date('2024-10-20'),
            paymentDueAmount: 250,
          },
        ],
      },
    },
  });

  const user3 = await prisma.user.create({
    data: {
      name: 'Garry Simons',
      email: 'garry.simons@example.com', // Ensure the email is unique
      courses: {
        create: [
          {
            title: 'HNC in Engineering (Pearson)',
            activeDate: new Date('2024-01-15'),
            endDate: new Date('2024-07-15'),
            paymentMade: 400,
            nextPaymentDate: new Date('2024-10-20'),
            paymentDueAmount: 250,
          },
        ],
      },
    },
  });

  console.log({ user1, user2, user3 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

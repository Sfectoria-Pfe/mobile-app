import { PrismaClient } from '@prisma/client';
import { dataProducts } from './data';
import * as bcrypt from 'bcrypt';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy articles
  const salt = await bcrypt.genSalt();
  const user1 = await prisma.user.create({
    data: {
      email: 'ghofrane@sfectoria.com',
      fullName: 'ghofrane',
      password: await bcrypt.hash('1234', salt),
    },
  });

  const programs = await prisma.program.createMany({
    data: dataProducts,
  });
  const module = await prisma.module.create({ data: { title: 'react' } });

  const programmes = await prisma.program.findMany();

  for (let index = 0; index < programmes.length; index++) {
    await prisma.programModule.create({
      data: {
        moduleId: module.id,
        programId: programmes[index].id,
      },
    });
  }

  console.log('seeded');
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });

import { PrismaClient } from '../generated/prisma'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data:{
        email: 'saloni@gmail.com',
        name:'Saloni',
    }
  })
    
}
main()
  .then(async () => {
    console.log('Queries executed successfully')
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function findUsers() {
    try {
        // const users = await prisma.user.findMany({
        //     where:{
        //         name:'Nikhil'
        //     }
        // }) // Find all the user in DB
        // console.log("Users fetched successfully:", users);

        const user = await prisma.user.findUnique({
            where: {
                email: 'nikhil@gmail.com'
            },
            // You can also include related data, like posts, if needed
            include: {
                posts: true // Include related posts
            }
        })
        console.log("User fetched successfully:", user); 
    }
    catch (error) {
        console.log("Error fetching users:", error);
    }
}

findUsers()
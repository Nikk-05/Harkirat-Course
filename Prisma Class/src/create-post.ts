import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

async function createPost() {
    try {
        await prisma.post.create({
            data: {
                title: 'My First Post',
                content: 'This is the content of my first post.',
                published: true,
                author: {
                    connect: {
                        id: 1
                    }
                }
            }
        })
        console.log("Post created successfully");
    }
    catch (error) {
        console.error("Error creating post:", error);
    }
}

createPost()
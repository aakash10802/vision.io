import { PrismaClient } from '@prisma/client'


const client = global.prismadb || new PrismaClient();
if (process.env.NODE === 'production') {
    (global as any).prisma = client; // Use type assertion to avoid type error
  }
  

export default client;


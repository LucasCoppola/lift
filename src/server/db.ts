import { PrismaClient } from "@prisma/client";

import { env } from "~/env.mjs";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (env.NODE_ENV !== "production") globalForPrisma.prisma = db;

// FROM PLANETSCALE

// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   // ... you will write your Prisma Client queries here
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });

import { Session } from "next-auth"
import { PrismaClient } from "@prisma/client"

export async function getUserId(prisma: PrismaClient, session: Session | null) {
  if (!session) return

  const prismaSession = await prisma.session.findFirst({
    where: { accessToken: session.accessToken },
  })

  if (!prismaSession) return

  return prismaSession.userId
}

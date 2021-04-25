import { PrismaClient } from "@prisma/client"
import { ParsedUrlQuery } from "node:querystring"
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from "next"
import { getSession } from "next-auth/client"
import { Session } from "next-auth"

import { getUserId } from "./get-user-id"
import serializeDates from "./serialize-dates"

export type SsrContext = GetServerSidePropsContext & {
  prisma: PrismaClient
  userId?: number
}

export type SsrCallback<P> = (
  context: SsrContext
) => Promise<GetServerSidePropsResult<P>>

export function ssr<P = any, Q extends ParsedUrlQuery = any>(
  callback: SsrCallback<P>
): GetServerSideProps<P, Q> {
  return async (context) => {
    const prisma = new PrismaClient()

    let result: any = { props: {} }
    let session: Session | null = null

    try {
      session = await getSession(context)
      const userId = await getUserId(prisma, session)

      result = await callback({ ...context, prisma, userId })
    } catch (e) {
      console.error(e)
    } finally {
      prisma.$disconnect()
    }

    return serializeDates({ ...result, props: { ...result.props, session } })
  }
}

export default ssr

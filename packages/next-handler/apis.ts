import { NextApiHandler, NextApiRequest, NextApiResponse } from "next"
import { PrismaClient } from "@prisma/client"
import { Session } from "next-auth"
import { getSession } from "next-auth/client"

import { getUserId } from "./get-user-id"
import { NotImplemented } from "./errors"
import { serializeDates } from "./serialize-dates"

export type ApiContext = {
  req: NextApiRequest
  res: NextApiResponse
  prisma: PrismaClient
  userId?: number
}

export type ApiCallback = (context: ApiContext) => Promise<any>

export type ApiCallbacks = {
  get?: ApiCallback
  post?: ApiCallback
  put?: ApiCallback
  delete?: ApiCallback
}

export function api(cbs: ApiCallbacks): NextApiHandler {
  return async (req, res) => {
    const prisma = new PrismaClient()
    const context: ApiContext = { prisma, req, res }
    let session: Session | null = null
    try {
      //@ts-ignore
      const cb = cbs[req.method?.toLowerCase()]
      if (!cb) throw new NotImplemented()

      session = await getSession({ req })
      context.userId = await getUserId(prisma, session)
      req.body = JSON.parse(req.body || "{}")

      const response = await cb(context)

      res.json(serializeDates(response))
    } catch (e) {
      console.error(e)
      res.status(e.code || 500).json({ ...e })
    } finally {
      prisma.$disconnect()
    }
  }
}

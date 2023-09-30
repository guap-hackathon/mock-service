import { Request, Response } from 'express'

export type MockHandler = (req: Request, res: Response) => void

export type ApiConfig = {
  path: string
  isMocked: boolean
  proxyOptions: {
    targetUrl: string
    extraPath?: string
  }
  routes: Array<{
    type: 'get' | 'post' | 'put' | 'delete'
    url: string
    mockHandler: MockHandler
    isMocked: boolean
  }>
}

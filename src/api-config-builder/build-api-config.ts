import express, { Router } from 'express'
import { ApiConfig } from './types'
import proxy from 'express-http-proxy'

type ResultBuildApiConfig = {
  path: string
  router: Router
}

export const buildApiConfig = (apiConfig: ApiConfig): ResultBuildApiConfig => {
  const { path, proxyOptions, routes, isMocked: apiConfigIsMocked } = apiConfig

  const router = express.Router()

  routes.forEach((route) => {
    const isMocked = apiConfigIsMocked ?? route.isMocked
    if (isMocked) {
      router[route.type](route.url, route.mockHandler)
    } else {
      const { targetUrl, extraPath } = proxyOptions
      router[route.type](
        route.url,
        proxy(targetUrl, {
          proxyReqPathResolver: (req) => {
            console.log("PROXY", (extraPath || '') + req.url)
            return (extraPath || '') + req.url
          }
        })
      )
    }
  })

  return {
    path,
    router
  }
}

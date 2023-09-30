import { ApiConfig } from '../api-config-builder'
import { successHandler } from './mock-handlers'

export const faceApiConfig: ApiConfig = {
  path: '/app',
  isMocked: true,
  proxyOptions: {
    targetUrl: ''
  },
  routes: [
    {
      type: 'get',
      url: '/check-face',
      mockHandler: successHandler,
      isMocked: true
    }
  ]
}

import { MockHandler } from '../api-config-builder'
import { delaySend } from '../utils'
import { REAL_FACE_RESPONSE } from './stubs'

export const successHandler: MockHandler = (_, res) => {
  delaySend(() => res.send(REAL_FACE_RESPONSE))
}

export const failedHandler: MockHandler = (_, res) => {
  delaySend(() => res.sendStatus(500))
}

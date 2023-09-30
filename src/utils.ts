const DELAY_TIME = 2000

export const delaySend = (sendFn: () => unknown) => {
  setTimeout(sendFn, DELAY_TIME)
}

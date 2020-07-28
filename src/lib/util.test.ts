import { hello } from './util'

describe('hello()', () => {
  it('print message', () => {
    const log = jest.spyOn(console, 'log').mockReturnValue()
    hello()
    expect(log).nthCalledWith(1, 'Hello, world!')
    log.mockRestore()
  })
})

/* eslint-env jest */

import { join } from 'path'
import cheerio from 'cheerio'
import { renderViaHTTP, findPort, launchApp, killApp } from 'next-test-utils'

const appDir = join(__dirname, '..')
let appPort
let app

async function get$(path, query) {
  const html = await renderViaHTTP(appPort, path, query)
  return cheerio.load(html)
}

describe('TypeScript Features', () => {
  describe('default behavior', () => {
    beforeAll(async () => {
      appPort = await findPort()
      app = await launchApp(appDir, appPort, {})
    })
    afterAll(() => killApp(app))

    it('should render the page', async () => {
      const $ = await get$('/hello')
      expect($('body').text()).toMatch(/World/)
    })
  })
})

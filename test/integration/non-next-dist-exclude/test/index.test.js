/* eslint-env jest */
import path from 'path'
import { nextBuild, readNextBuildServerPageFile } from 'next-test-utils'

const appDir = path.join(__dirname, '../app')

describe('Non-Next externalization', () => {
  beforeAll(async () => {
    await nextBuild(appDir)
  })

  it('Externalized non-Next dist-using package', async () => {
    const content = readNextBuildServerPageFile(appDir, '/')
    expect(content).not.toContain('BrokenExternalMarker')
  })
})

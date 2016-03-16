import packageJson from '../../../package.json'

const versionInfo = {
  name: packageJson.name,
  version: packageJson.version
}

const route = router => {
  console.log('configuring version router')
  router.get('/version', ctx => {
    ctx.body = versionInfo
  })
}

export default route

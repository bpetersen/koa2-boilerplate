const route = router => {
  router.get('/', async ctx => {
    await ctx.render('index')
  })
}

export default route

import co from 'co'
import koaViews from 'koa-views'
import convert from 'koa-convert'
import compose from 'koa-compose'

const config = convert(koaViews(__dirname, { extension: 'jade' }))

const renderWrapper = async (ctx, next) => {
  ctx.render = co.wrap(ctx.render)
  await next()
}

const views = () => {
  return compose([config, renderWrapper])
}

export default views

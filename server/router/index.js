import compose from 'koa-compose'
import Router from 'koa-router'
import R from 'ramda'
import * as routes from './routes'

const koaRouter = new Router()

const routeInit = route => {
  route(koaRouter)
}

const router = () => {
  R.map(routeInit, routes)
  return compose([koaRouter.routes(), koaRouter.allowedMethods()])
}

export default router 

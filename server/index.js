import Koa from 'koa'
import middleware from './middleware'
import router from './router'
import views from './views'

const app = new Koa()
app.use(middleware())
app.use(views())
app.use(router())

export default app

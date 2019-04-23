!__devMode||console.log('src/entry/server')

import express from 'express'
import {handleRender, __devMode} from '../../out/server/ssr.bundle'

const app = express()
const port = process.env.PORT || 3000

app.use('/public', express.static('out/client/public'))
app.use(handleRender)
app.listen(port)

console.log(`listening on localhost:${port} ...`)

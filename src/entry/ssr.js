
import fs from 'fs'
import path from 'path'
import React from 'react'
import {renderToString} from 'react-dom/server'
import {Provider} from 'react-redux'
import {getStore} from '../store/index'
import App from '../components/app/index'

export const handleRender=(req, res)=> {
    let _store

    if(req.query.state)
    {
      const decoded= decodeURIComponent(req.query.state)
      const state= JSON.parse(decoded)
      _store= getStore({isClient:false}, state)
    }
    else
    {
      _store= getStore()
    }

    const store= _store
    const state= store.getState()

    const html = renderToString(
      <Provider store={store}>
        <App />
      </Provider>
    )

    fs.readFile(path.resolve('./out/client/index.html'), 'utf8', (err, data) => {
      if (err) {
        console.error(err)
        return res.status(500).send('An error occurred')
      }

      return res.send(
        data.replace(
          '$html',
          `${html}`
        ).replace(
          '$state',
          `${JSON.stringify(state).replace(/</g,'\\u003c')}`
        )
      )
    })
  }

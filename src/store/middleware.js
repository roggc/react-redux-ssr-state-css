__isClient__||!__devMode__||console.log('src/store/middleware')

import * as types from '../actions/types'

export const stateHistory = store => next => action => {
  next(action)
  const state= store.getState()
  const stringifyed= JSON.stringify(state)
  const encoded= encodeURIComponent(stringifyed)
  if(action.type == types.ENVIRONMENT_SET)
  {
    history.replaceState(encoded, null, '?state='+encoded)
  }
  else
  {
    history.pushState(encoded, null, '?state='+encoded)
  }
}

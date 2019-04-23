__isClient__||!__devMode__||console.log('src/components/app/index')

import React from 'react'
import StateExample from '../stateExample1/index'
import Comp1 from '../cssexample1/index'
import Comp2 from '../cssexample2/index'

export default ()=>
(
  <div>
    {//<StateExample/>
    }
    <StateExample/>
    <hr/>
    <Comp1/><Comp2/>
  </div>
)

'use client'
import { store } from '@/store/store'
import React from 'react'
import { Provider } from 'react-redux'

interface props { children: React.ReactNode  }
function Providers({children}:props) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}

export default Providers
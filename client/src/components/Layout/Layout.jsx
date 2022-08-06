import React from 'react'
import {Navbar} from "../Navbar/Navbar"
import s from "./Layout.module.css"
export const Layout = ({children}) => {
  return (
    <React.Fragment>
    <div className={s.container}>
      <Navbar/>
      {children}
    </div>
    </React.Fragment>

    
  )
}








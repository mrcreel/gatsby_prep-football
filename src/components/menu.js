import React from "react"
import { Link } from "gatsby"

import menuStyles from './menu.module.scss'

const Menu = () => (
    <div className={menuStyles.navBar}>
      <ul className={menuStyles.navList}>
        <li>
          <Link
            className={menuStyles.navItem}
            activeClassName={menuStyles.activeNavItem}
            to ='/'>
              Index
          </Link>
        </li>
        <li>
          <Link
            className={menuStyles.navItem}
            activeClassName={menuStyles.activeNavItem}
            to ='/teams'>
              Teams
          </Link>
        </li>
        <li>
          <Link
            className={menuStyles.navItem}
            activeClassName={menuStyles.activeNavItem}
            to ='/about'>About</Link>
        </li>
      </ul>
    </div>
)
export default Menu
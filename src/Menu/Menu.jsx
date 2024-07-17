import React, { Suspense, lazy, useEffect, useState } from 'react'
import './Menu.css'
import { Link, Routes, Route, Navigate, useLocation } from "react-router-dom";

const Home = lazy(() => import('../Home'))
const About = lazy(() => import('../About'))
const Contact = lazy(() => import('../Contact'))

const menuItems = [
  {
    link: "/home",
    text: "Home"
  },
  {
    link: "/about",
    text: "About"
  },
  {
    link: "/contact",
    text: "Contact"
  }
]

// const Link = ((onClick, to, children) => {
//   return <a onClick={onClick} href={to} >{children}</a>
// })

const Menu = () => {
  const location = useLocation();
  const { pathname } = location;
  const [menuItem, setMenuItem] = useState(pathname)
  const [left, setLeft] = useState(-150)
  const [isMobileMenu, setIsMobileMenu] = useState(document.body.clientWidth < 700 ? true : false);

  const handleClick = (items) => {
    setMenuItem(items);
    setLeft(-150)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  }, [])

  const handleResize = () => {
    const width = document.body.clientWidth;
    setIsMobileMenu(width < 700 ? true : false)
  }

  const handleMobileMenu = () => {
    setLeft(left === 0 ? -150 : 0)

  }
  return (
    <>
      <Suspense fallback="loading..." >
        {isMobileMenu && <button className='mobile-menu-btn' onClick={handleMobileMenu}><span></span><span></span>
          <span></span></button>}
        <div style={{ left: left }} className={isMobileMenu ? 'mobile-menu' : 'menu'}>
          {
            menuItems?.map(({ link, text }, indx) => {
              return <Link className={menuItem === link ? "menu-active" : ""} key={`lnk_${indx}`} onClick={() => handleClick(link)} to={link}>{text}</Link>
            })
          }

        </div>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="home" />} />
        </Routes>
      </Suspense>
    </>
  )
}

export default Menu

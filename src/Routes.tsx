import { useEffect } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { scrollToTop } from 'utils/window/scroll'

import { Home, Users } from 'pages'

export default function MainRoutes() {
  const { pathname } = useLocation()

  useEffect(() => scrollToTop(), [pathname])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users" element={<Users />} />

      <Route path="*" element={<h1>Not Found...</h1>} />
    </Routes>
  )
}

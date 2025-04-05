import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollTop = () => {
  let {pathname} = useLocation()
    
  useEffect(() => {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 0);
  },[pathname]);

  return null
}

export default ScrollTop
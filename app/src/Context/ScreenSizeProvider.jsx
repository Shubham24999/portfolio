import React, { Children, createContext, useEffect, useState } from 'react'

// 1. creating Context
export const MyContext = createContext();


// 2. Context Provider
const ScreenSizeProvider = ({children}) => {
    const [isMobile, setIsMobile] = useState(false);
    
    useEffect(() => {
        const handleResize = () => {
          // console.log("before",isMobile);
          setIsMobile(window.innerWidth <= 500);
          // console.log("after",isMobile);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [isMobile]);

  

   return (
    <MyContext.Provider value={{isMobile}}>
      {children}
    </MyContext.Provider>
  );
}

export default ScreenSizeProvider;
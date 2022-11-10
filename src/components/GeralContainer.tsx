import React, { ReactNode } from 'react'

const GeralContainer = ({children}: {children: ReactNode}) => {
  return (
    <div className="geral-content bg-[#0F1324] z-10 w-[90vw] h-[85vh] flex rounded-[50px]">
        <div id="paizao de todos" className="flex p-[60px] h-[100%] w-[100%]">
            {children}
        </div>
      </div>
  )
}

export default GeralContainer
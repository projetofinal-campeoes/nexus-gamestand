import React, { ReactNode } from 'react'

const RightSide = ({children}: {children: ReactNode}) => {
  return (
    <>
        <div id="aside direita" className="w-[100%]">
            {children}
        </div>
    </>
  )
}

export default RightSide
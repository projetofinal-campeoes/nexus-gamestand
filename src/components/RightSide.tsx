import React, { ReactNode } from 'react'

const RightSide = ({children}: {children: ReactNode}) => {
  return (
    <>
        <div id="aside direita" className="w-[100%] flex flex-col gap-6">
            {children}
        </div>
    </>
  )
}

export default RightSide
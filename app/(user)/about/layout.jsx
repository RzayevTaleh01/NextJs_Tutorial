import React from 'react'

export default function AboutLayout({children,...rest}) {
    console.log(rest);
  return (
    <>

        <h1>AboutLayout</h1>
       {children}
    </>
  )
}

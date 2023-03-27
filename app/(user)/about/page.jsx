import Link from 'next/link'
import React from 'react'

export default function About() {
  return (
    <div>
      <h1>About</h1>
      <Link href='/blog/'>Blog</Link>
      <Link href={{
        pathname:"/about",
        query: {
          name: "next"
        }
      }}>
      About
      </Link>
    </div>
  )
}

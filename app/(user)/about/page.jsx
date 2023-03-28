import Link from "next/link";
import React from "react";
import { notFound } from "next/navigation"
 
export default function About({searchParams}) {

  if(searchParams.error==="true"){
    throw new Error("This is an error")
  }
  if(searchParams.test==="true"){
    notFound();
  }
  return (
    <div>
      <h1>About</h1>
      <Link href="/blog/">Blog</Link>
      <Link
        href={{
          pathname: "/about",
          query: {
            name: "next",
          },
        }}
      >
        About
      </Link>
    </div>
  );
}

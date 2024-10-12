import Link from 'next/link'
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About 🔎",
    description: "Una usina de ideas, seguimiento de tutoriales y desarrollo de aplicaciones",
  };



  export default function AboutPage () {
  return (<div>
    
    <div> About Page </div> 
    <br/>
    <Link href={"/"}> Go to HOME</Link>


  </div>);
}


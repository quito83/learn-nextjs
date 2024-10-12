import { NextPage } from 'next'
import Link from 'next/link'
import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "About 🔎",
    description: "Una usina de ideas, seguimiento de tutoriales y desarrollo de aplicaciones",
  };

interface Props {}

const AboutPage: NextPage<Props> = ({}) => {
  return <div>
    
    <div> About Page </div> 
    <br/>
    <Link href={"/"}> Go to HOME</Link>


  </div>
}

export default AboutPage
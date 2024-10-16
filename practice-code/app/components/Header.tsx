import { Aperture } from "lucide-react"
import Link from 'next/link'

export default function Header() {
    return (
          
    <header className="bg-slate-200 w-full">
        <div className="flex items-center justify-between mx-auto max-w-6xl px-10 py-4">
            <div className="flex items-center">
                <Aperture  className="px-1" size={36}/>
                <span className="text-2xl text-sky-600">Quito Apps</span>
            </div>
            <div className="text-sm space-x-6">
                <Link href="/">HOME</Link>
                <Link href="/learn">LEARN</Link>
                <Link href="/about">ABOUT</Link>
            </div>
        </div>
    </header>

    );
  }
  
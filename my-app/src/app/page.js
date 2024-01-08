import Link from "next/link"

export default function Home() {
  return (
    <main>
       <Link href={'./Login'} className="btn btn-active btn-secondary btn-lg" > Login </Link>
    </main>
  )
}

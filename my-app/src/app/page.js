import Link from "next/link"

export default function Home() {
  return (
    <main>
      <button className="btn btn-active btn-secondary btn-lg"> <Link href={'./Login'}  > Login </Link></button>
    </main>
  )
}

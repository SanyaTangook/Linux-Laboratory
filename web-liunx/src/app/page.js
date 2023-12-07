import Link from "next/link"
export default function Home() {
  return (
      <button className="btn btn-blue">
        <Link href={'./login'}> กด </Link>
      </button>
  )
}

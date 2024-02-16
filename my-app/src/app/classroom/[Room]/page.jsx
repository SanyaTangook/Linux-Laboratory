
import Link from "next/link";
import data from "../../classroom.json";
import { useRouter } from 'next/navigation'

export default async function page({ params }) {
  return (
    <>
      <div className="text-sm breadcrumbs">
        <ul>
          <li><Link href='/Home'>Home</Link></li>
          <li><Link href='#'>{params.Room}</Link></li>
        </ul>
      </div>

      <table className="table">
        <tbody>
          {Object.keys(data.classroom).map((keys) => (
            <tr key={keys}>
              <th className="w-5/6">
                <div className="card  bg-base-100 shadow-xl">
                  <div className="card-body">
                    <div className="card-title">
                      {data.classroom[keys].lesson}
                    </div>
                    <hr className="border" />
                    <p>{data.classroom[keys].Topic}</p>
                  </div>
                </div>
              </th>
              <th className="w-1/6 ">
                <div className="grid gap-4  justify-center ">
                  <span className="border-4 border-green-700	rounded-full p-2 w-40 "style={{ textAlign: "center" }}>
                    {" "}{data.classroom[keys].Timer}{" "}
                  </span>
                  <Link href={`/Lab/${data.classroom[keys].id}`} className="btn btn-error rounded-full w-40" >เข้าสู่บทเรียน</Link>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

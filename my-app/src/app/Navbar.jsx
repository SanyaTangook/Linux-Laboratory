import Image from "next/image";
import Link from "next/link";
export function Navbar() {
  return (
    <div className="navbar bg-slate-100 text-neutral-content scroll-px-0.5 scroll-my-1.5 ">
      <div className="flex-1">
        <Link href={"/Home"}>
          <Image
            src="/kmutnb_Logo.png"
            width={50}
            height={50}
            alt="kmutnb index Logo"
          />
        </Link> &nbsp;
        <h2 className="text-orange-600 font-bold"> Liunx Lab</h2>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-nav-bg-light">
      <div >
        <Image src="/assets/logo-nav.png" width="72" height="72" alt="logotipo" />
      </div>

      <div className="flex justify-end items-center">
        <div className="mr-6">
          <Image src="/assets/icon-moon.svg" width="20" height="20" alt="logotipo" />
        </div>

        <div className="border-r border-solid border-nav-border-color h-nav-phone" />

        <div>
          <Image src="/assets/image-avatar.jpg" width="32" height="32" alt="logotipo"
            className="rounded-full mx-6" />
        </div>
      </div>
    </nav>
  )
}
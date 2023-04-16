import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-nav-bg-light desktop:flex-col desktop:h-screen desktop:min-h-screen desktop:w-103 desktop:rounded-r-navRadius desktop:overflow-hidden">
      <div >
        <Image src="/assets/logo-nav.png" width="72" height="72" alt="logo" className="desktop:w-103 desktop:h-103" />
      </div>

      <div className="flex items-center desktop:flex-col">
        <div className="mr-6 desktop:mx-8 desktop:my-6">
          <Image src="/assets/icon-moon.svg" width="20" height="20" alt="logotipo" />
        </div>

        <div className="border-r border-solid border-nav-border-color h-72 desktop:w-103 desktop:border-b desktop:h-0" />

        <div>
          <Image src="/assets/image-avatar.jpg" width="32" height="32" alt="logotipo"
            className="rounded-full mx-6 desktop:mx-8 desktop:my-6" />
        </div>
      </div>
    </nav>
  )
}
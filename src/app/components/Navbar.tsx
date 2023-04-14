import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="flex justify-center items-center bg-nav-bg-light">
      <div>
        <Image src="/assets/logo-nav.png" width="72" height="72" alt="logotipo" />
      </div>
      <div>
        <Image src="/assets/icon-moon.svg" width="20" height="20" alt="logotipo" />
      </div>
      <div>
        <Image src="/assets/image-avatar.jpg" width="32" height="32" alt="logotipo" />
      </div>
    </nav>
  )
}
import Link from "next/link"
import Image from "next/image"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import SectionContainer from "../components/SectionContainer"
import NavLinks from "../lib/NavLinks"
import ThemeSwitch from "../components/ThemeSwitcher"
import logo from '../public/logo.png'

 const Layout = ({ children }) => {
    return (
      <SectionContainer>
        <div className="flex h-screen flex-col justify-between">
          <header className="flex items-center justify-between py-10">
            <div>
              <Link href="/" aria-label='qgriffith'>
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <Image src={logo} width={50} height={50}/>
                  </div>
                 <div className="hidden h-6 text-2xl font-semibold sm:block">
                      "qgriffith"
                    </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {NavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
                    <a className="p-4">{link.title}</a>
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <NavBar />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    )
  }
  
  export default Layout
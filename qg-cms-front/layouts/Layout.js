import Link from "next/link"
import StrapiImage from '../components/StrapiImage'
import Footer from "../components/Footer"
import SectionContainer from "../components/SectionContainer"
import ThemeSwitch from "../components/ThemeSwitcher"
import MobileNavBar from "../components/MobileNavBar"
import { useRouter } from "next/router"

 const Layout = ({ children }) => {
    global = children.props.global
    const navlinks = children.props.navbar
    const router = useRouter()
    return (
      <SectionContainer>
        <div className="flex h-screen flex-col justify-between">
          <header className="flex items-center justify-between py-10">
            <div>
              <Link href="/" aria-label={global.attributes.siteName} legacyBehavior>
                <div className="flex items-center justify-between">
                  <div className="mr-3">
                    <StrapiImage image={global.attributes.siteLogo.data.attributes} width={85} height={85}/>
                  </div>
                 <div className="hidden h-6 text-3xl font-semibold sm:block">
                      {global.attributes.siteName}
                    </div>
                </div>
              </Link>
            </div>
            <div className="flex items-center text-base leading-5">
              <div className="hidden sm:block">
                {navlinks.map((link) => (
                  <Link
                    key={link.attributes.title}
                    href={link.attributes.href} className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4">
                    {link.attributes.title}
                  </Link>
                ))}
              </div>
              <ThemeSwitch />
              <MobileNavBar NavLinks={navlinks} />
            </div>
          </header>
          <main className="mb-auto">{children}</main>
          <Footer />
        </div>
      </SectionContainer>
    );
  }
  
  export default Layout
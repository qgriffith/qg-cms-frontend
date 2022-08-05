import Link from "next/link"
import FooterIcons from "./FooterIcons"

export default function Footer() {
    return (
      <footer>
        <div className="mt-16 flex flex-col items-center">
          <div className="mb-3 flex space-x-4">
          <FooterIcons kind="mail" href="mailto:qgriffith@gmail.com" size="6" />
          <FooterIcons kind="github" href="https://github.com/qgriffith" size="6" />
          <FooterIcons kind="strava" href="https://www.strava.com/athletes/78655622" size="6" />
          <FooterIcons kind="linkedin" href="https://www.linkedin.com/in/quenten-griffith-1682493/" size="6" />
          </div>
          <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <div>{global.attributes.siteName}</div>
            <div>{` • `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
          </div>
        </div>
      </footer>
    )
  }
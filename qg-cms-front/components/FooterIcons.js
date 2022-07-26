import Mail from '../public/icons/mail.svg'
import Github from '../public/icons//github.svg'
import Linkedin from '../public/icons/linkedin.svg'
import Strava from '../public/icons/strava.svg'
import Phone from '../public/icons/phone.svg'
import Map from "../public/icons/map.svg"

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  linkedin: Linkedin,
  strava: Strava,
  phone: Phone,
  location: Map,
}

const FooterIcons = ({ kind, href, size = 8 }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default FooterIcons
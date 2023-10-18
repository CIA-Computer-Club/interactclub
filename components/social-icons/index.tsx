import { Mail, Instagram, Github, Home} from './icons'

const components = {
  mail: Mail,
  instagram: Instagram,
  github: Github,
  home: Home
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  target?: string
  size?: number
}

const SocialIcon = ({ kind, href, target="", size = 8 }: SocialIconProps) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
  return null

  const SocialSvg = components[kind]

  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target={target}
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon

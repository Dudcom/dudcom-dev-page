import type { SvgComponent } from "astro/types"
import GitHub from "@/assets/icons/github.svg"
import LinkedIn from "@/assets/icons/linkedin.svg"
import Twitter from "@/assets/icons/twitter.svg"

export const SITE = {
  title: "dudcom.dev",
  description: "Dudcom's personal website.",
  locale: "en-US",
  dir: "ltr",
  defaultPageImage: "/static/dudcom-og.png",
  defaultPostImage: "/static/dudcom-og.png",
} as const

export const NAVIGATION = [
  { href: "/blog", label: "Tech-Blog" },
  { href: "/thoughts", label: "Thoughts" },
  { href: "/misc-blog", label: "Misc-Blog" },
]

export const SOCIALS: { href: string; label: string; icon: SvgComponent }[] = [
  { href: "https://github.com/Dudcom", label: "GitHub", icon: GitHub },
  { href: "https://x.com/dudcom3", label: "Twitter", icon: Twitter },
  {
    href: "https://www.linkedin.com/in/tanush-madanbhavi/",
    label: "LinkedIn",
    icon: LinkedIn,
  },
]

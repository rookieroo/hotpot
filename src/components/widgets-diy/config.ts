import Icons from "@/components/customize-ui/Icons";
import { Button } from '@/ui/button'


export const presetColors = [
  "#6231af",
  "#db2777",
  "#f59e0b",
  "#2dd4bf",
  "#06b6d4",
  "#10b981",
]

export const PLATFORMS = [
  {
    icon: Icons.X,
    name: 'X'
  },
  {
    icon: Icons.github,
    name: 'github'
  },
  {
    icon: Icons.instagram,
    name: 'instagram'
  },
  {
    icon: Icons.facebook,
    name: 'facebook'
  },
  {
    icon: Icons.linkedin,
    name: 'linkedin'
  },
  {
    icon: Icons.xiaohongshu,
    name: 'xiaohongshu'
  },
  {
    icon: Icons.paypal,
    name: 'paypal'
  },
  {
    icon: Icons.triangle,
    name: 'triangle'
  },
]

export const widgets = [
  {
    name: "button",
    comp: Button,
    zh: "按钮",
  }
]

export interface SocialProps {
  title?: string
  user_id?: string
  user_name?: string
  real_name?: string
  desc?: string
  link?: string
  avatar?: string
  gender?: string
  theme_color?: string
  age?: number
  follow?: number
  followers?: number
  icon?: object
  show?: boolean
}

export const init_social: SocialProps = {
  title: '',
  user_id: '',
  user_name: '',
  real_name: '',
  desc: '',
  link: '',
  avatar: '',
  gender: '',
  age: 0,
  theme_color: "#6231af",
  follow: 0,
  followers: 0,
  icon: null,
  show: false
}

export const compose_social = () => {
  return PLATFORMS.map(p => {
    return {
      ...init_social,
      ...p
    }
  })
}


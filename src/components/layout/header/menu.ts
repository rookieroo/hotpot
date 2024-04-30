import {
  TbTransitionBottom,
  TbArrowsUpDown,
  TbBallpen,
  TbStars,
  TbJson,
  TbMarkdown,
  TbKeyboard,
  TbEdit,
  TbMinimize,
  TbQrcode,
  TbRegex,
  TbCube
} from "react-icons/tb";
import {
  AlarmClock,
  Twitter,
  FlagTriangleLeft,
  TimerReset,
  Globe,
  Calculator,
  LandPlot,
  Clock10,
  Calendar,
  MessageSquareReply,
  PartyPopper,
  Check,
  Code,
  Gamepad2,
  Briefcase,
  School,
  Bot,
  Figma,
  ArrowDownZA,
  Scroll,
  Rocket,
  ShoppingBasket,
  CircleDollarSign,
  Fence,
  StarHalf,
  HeartHandshake,
  BadgePercent,
  CookingPot,
  Monitor,
  Tent,
  Youtube,
  Bookmark,
  Blocks,
  BookCheck,
  Webcam,
  Cat,
  PawPrint,
  Palette,
  Image,
  BookImage,
  ALargeSmall,
  ChevronRight
} from 'lucide-react';

const Settings = ["Profile", "Account", "Dashboard", "Logout"];
export const Tools_Category = [
  {
    name: 'all',
    icon: Check,
    active: true
  },
  {
    name: 'dev',
    icon: Code,
    active: true
  },
  {
    name: 'game',
    icon: Gamepad2,
    active: true
  },
  {
    name: 'work',
    icon: Briefcase,
    active: true
  },
  {
    name: 'edu',
    icon: School,
    active: false
  },
  {
    name: 'AI',
    icon: Bot,
    active: false
  },
  {
    name: 'design',
    icon: Figma,
    active: false
  },
  {
    name: 'wiki',
    icon: ArrowDownZA,
    active: false
  },
  {
    name: 'docs',
    icon: Scroll,
    active: false
  },
];
export const Widgets_Category = [
  {
    name: 'all',
    icon: Check,
    active: true
  },
  {
    name: 'AI',
    icon: Bot,
    active: true
  },
  {
    name: 'work',
    icon: Briefcase,
    active: true
  },
  {
    name: 'efficiency',
    icon: Rocket,
    active: true
  },
  {
    name: 'product',
    icon: ShoppingBasket,
    active: true
  },
  {
    name: 'marketing',
    icon: CircleDollarSign,
    active: true
  },
  {
    name: 'engineering',
    icon: Fence,
    active: true
  },
  {
    name: 'design',
    icon: Figma,
    active: true
  },
  {
    name: 'startup',
    icon: StarHalf,
    active: true
  },
  {
    name: 'operations',
    icon: HeartHandshake,
    active: true
  },
  {
    name: 'sales',
    icon: BadgePercent,
    active: true
  },
  {
    name: 'recruiting',
    icon: CookingPot,
    active: true
  },
  {
    name: 'IT',
    icon: Monitor,
    active: true
  },
  {
    name: 'individuals',
    icon: Tent,
    active: true
  },
  {
    name: 'social',
    icon: Youtube,
    active: true
  },
  {
    name: 'ACGN',
    icon: PawPrint,
    active: true
  },
  {
    name: 'image',
    icon: BookImage,
    active: true
  },
  {
    name: 'font',
    icon: ALargeSmall,
    active: true
  },
];
export const Tools_Menu = [
  {
    code: "excalidraw",
    cate: "work",
    href: "/app/excalidraw",
    icon: TbBallpen,
    description: "Hand drawn"
  },
  {
    code: "convert",
    cate: "edu",
    href: "/app/convert",
    icon: TbArrowsUpDown,
    description: "converting units"
  },
  {
    code: "transfer",
    cate: "edu",
    href: "/app/transfer",
    icon: TbTransitionBottom,
    description: "简体繁体中文转换"
  },
  {
    code: "celestial",
    cate: "edu",
    href: "/app/celestial",
    icon: TbStars,
    description: "Star maps"
  },
  {
    code: "json",
    cate: "dev",
    href: "/app/json",
    icon: TbJson,
    description: "JSON Editor"
  },
  {
    code: "md",
    cate: "docs",
    href: "/app/markdown",
    icon: TbMarkdown,
    description: "Markdown Editor"

  },
  {
    code: "keyboard",
    cate: "work",
    href: "/app/keyboard",
    icon: TbKeyboard,
    description: "Keyboard customizer"
  },
  {
    code: "minify",
    cate: "work",
    href: "/app/minify",
    icon: TbMinimize,
    description: "Code minify"
  },
  {
    code: "qrCode",
    cate: "work",
    href: "/app/qrcode",
    icon: TbQrcode,
    description: "Qrcode factory"
  },
  {
    code: "regex",
    cate: "dev",
    href: "/app/regex",
    icon: TbRegex,
    description: "Regex visualization"
  },
  {
    code: "cube",
    cate: "game",
    href: "/app/cube",
    icon: TbCube,
    description: "Cube games"
  },
]
export const Widgets_Menu = [
  {
    code: "socials",
    cate: ["individuals", "social"],
    href: "/widgets/social-card",
    icon: Twitter,
    description: "social card customize"
  },
  {
    code: "pomodoro",
    cate: ["individuals", "efficiency"],
    href: "/widgets/pomodoro/index.html",
    icon: TimerReset,
    description: "pomodoro"
  },
  {
    code: "globe",
    cate: ["product"],
    href: "/widgets/globe/index.html",
    icon: Globe,
    description: "globe"
  },
  {
    code: "distance map",
    cate: ["product", "work"],
    href: "/widgets/USAirportDistanceMap/index.html",
    icon: LandPlot,
    description: "usa airport distance map"
  },
  {
    code: "world clock",
    cate: ["efficiency", "work"],
    href: "/widgets/world-clock/index.html",
    icon: Clock10,
    description: "world clock"
  },
  {
    code: "calculator",
    cate: ["product", "work"],
    href: "/widgets/calculator.html",
    icon: Calculator,
    description: "calculator"
  },
  {
    code: "calendar",
    cate: ["product", "work"],
    href: "/widgets/calendar.html",
    icon: Calendar,
    description: "calendar"
  },
  {
    code: "emoji",
    cate: ["product", "social"],
    href: "/widgets/emoji.html",
    icon: PartyPopper,
    description: "emoji"
  },
]

export const Bookmarks_Menu = [
  {
    code: "markdown.transfer",
    cate: ["product", "social", "efficiency"],
    href: "https://markdown.com.cn/editor/",
    icon: BookCheck,
    description: "transfer markdown to wx,juejin,zhihu"
  },
  {
    code: "cobalt",
    cate: ["product", "social", "efficiency"],
    href: "https://cobalt.tools/",
    icon: ChevronRight,
    description: "cobalt.tools"
  },
  {
    code: "twittervid",
    cate: ["product", "social"],
    href: "https://twittervid.com",
    icon: Twitter,
    description: "Twitter video Downloader"
  },
  {
    code: "markdowndown",
    cate: ["product", "efficiency"],
    href: "https://markdowndown.vercel.app/",
    icon: BookCheck,
    description: "Convert any webpage to a clean markdown"
  },
  {
    code: "elmo.chat",
    cate: ["product", "efficiency", "chrome extension"],
    href: "https://www.elmo.chat/",
    icon: Blocks,
    description: "AI companion to create summaries and insights"
  },
  {
    code: "jina.ai",
    cate: ["product", "efficiency"],
    href: "https://jina.ai/reader#apiform",
    pre_href: "https://r.jina.ai/",
    icon: BookCheck,
    description: "Simply prepend 'https://r.jina.ai/' to any URL"
  },
  {
    code: "web-check",
    cate: ["product", "efficiency"],
    href: "https://web-check.xyz/",
    pre_href: "https://web-check.xyz/results/",
    icon: Webcam,
    description: "Enter a URL to check"
  },
  {
    code: "material.io.color",
    cate: ["product"],
    href: "https://m2.material.io/inline-tools/color/",
    icon: Palette,
    description: "material.io Color palettes"
  },
  {
    code: "konachan",
    cate: ["ACGN"],
    href: "https://konachan.net/post?tags=",
    icon: Cat,
    description: "Anime wallpapers"
  },
  {
    code: "unsplash",
    cate: ["product", "image"],
    href: "https://unsplash.com/",
    icon: Image,
    description: "The internet’s source for visuals. Powered by creators everywhere."
  },
  {
    code: "pexels",
    cate: ["product", "image"],
    href: "https://www.pexels.com/",
    icon: Image,
    description: "The best free stock photos, royalty free images & videos shared by creators."
  },
  {
    code: "pixabay",
    cate: ["product", "image"],
    href: "https://pixabay.com/",
    icon: Image,
    description: "Stunning royalty-free images & royalty-free stock"
  },
]

const MenuNavs = [
  {
    title: "tools",
    icon: FlagTriangleLeft,
    href: "#",
    items: Tools_Menu
  },
  {
    title: "widgets",
    icon: AlarmClock,
    href: "#",
    items: Widgets_Menu
  },
  {
    title: "bookmarks",
    icon: Bookmark,
    href: "#",
    items: Bookmarks_Menu
  }
];

export { Settings, MenuNavs };

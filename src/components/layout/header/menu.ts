import {
  TbAd,
  TbTransitionBottom,
  TbArrowsUpDown,
  TbBallpen,
  TbSchool,
  TbSunset2,
  TbStars,
  TbMathMin,
  TbCode,
  TbJson,
  TbMarkdown,
  TbColorPicker,
  TbKeyboard,
  TbEdit,
  TbMinimize,
  TbQrcode,
  TbRegex,
  TbBrain,
  TbDice2,
  TbCube
} from "react-icons/tb";

const Settings = ["Profile", "Account", "Dashboard", "Logout"];

const MenuNavs = [
  {
    title: "Education",
    icon: TbSchool,
    href: "#",
    items: [
      {
        code: "excalidraw",
        href: "/excalidraw",
        icon: TbBallpen,
        description: "Hand-drawn look & feel • Collaborative • Secure"
      },
      {
        code: "convert",
        href: "/convert",
        icon: TbArrowsUpDown,
        description: "A handy utility for converting between quantities in different units(length,weight,currency etc.)."
      },
      {
        code: "shici",
        href: "/shici",
        icon: TbAd,
        description: "Chinese poetry"
      },
      {
        code: "transfer",
        href: "/transfer",
        icon: TbTransitionBottom,
        description: "Conversion between simplified chinese and traditional chinese"
      },
      {
        code: "celestial",
        href: "/celestial",
        icon: TbStars,
        description: "Star maps"
      },
    ],
  },
  {
    title: "Programing",
    icon: TbCode,
    href: "#",
    items: [
      {
        code: "json",
        href: "/json",
        icon: TbJson,
        description: "JSON Editor"
      },
      {
        code: "md",
        href: "/markdown",
        icon: TbMarkdown,
        description: "Markdown Editor"

      },
      {
        code: "keyboard",
        href: "/keyboard",
        icon: TbKeyboard,
        description: "Keyboard customizer"
      },
      {
        code: "TinyMCE",
        href: "/tinymce",
        icon: TbEdit,
        description: "Tinymce Editor"
      },
      {
        code: "Minify",
        href: "/minify",
        icon: TbMinimize,
        description: "Code minify"
      },
      {
        code: "QrCode",
        href: "/qrcode",
        icon: TbQrcode,
        description: "Qrcode factory"
      },
      {
        code: "Regex",
        href: "/regex",
        icon: TbRegex,
        description: "Regex visualization"
      },
    ],
  },
  {
    title: "Games",
    icon: TbBrain,
    href: "#",
    items: [
      {
        code: "mahjong",
        href: "/mahjong",
        icon: TbDice2,
        description: "Mahjong rules helper"
      },
      {
        code: "cube",
        href: "/cube",
        icon: TbCube,
        description: "Cube games"
      },
    ],
  }
];

export { Settings, MenuNavs };

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
        href: "/app/excalidraw",
        icon: TbBallpen,
        description: "Hand-drawn look & feel • Collaborative • Secure"
      },
      {
        code: "convert",
        href: "/app/convert",
        icon: TbArrowsUpDown,
        description: "A handy utility for converting between quantities in different units(length,weight,currency etc.)."
      },
      {
        code: "shici",
        href: "/app/shici",
        icon: TbAd,
        description: "Chinese poetry"
      },
      {
        code: "transfer",
        href: "/app/transfer",
        icon: TbTransitionBottom,
        description: "Conversion between simplified chinese and traditional chinese"
      },
      {
        code: "celestial",
        href: "/app/celestial",
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
        href: "/app/json",
        icon: TbJson,
        description: "JSON Editor"
      },
      {
        code: "md",
        href: "/app/markdown",
        icon: TbMarkdown,
        description: "Markdown Editor"

      },
      {
        code: "keyboard",
        href: "/app/keyboard",
        icon: TbKeyboard,
        description: "Keyboard customizer"
      },
      {
        code: "TinyMCE",
        href: "/app/tinymce",
        icon: TbEdit,
        description: "Tinymce Editor"
      },
      {
        code: "Minify",
        href: "/app/minify",
        icon: TbMinimize,
        description: "Code minify"
      },
      {
        code: "QrCode",
        href: "/app/qrcode",
        icon: TbQrcode,
        description: "Qrcode factory"
      },
      {
        code: "Regex",
        href: "/app/regex",
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
        href: "/app/mahjong",
        icon: TbDice2,
        description: "Mahjong rules helper"
      },
      {
        code: "cube",
        href: "/app/cube",
        icon: TbCube,
        description: "Cube games"
      },
    ],
  }
];

export { Settings, MenuNavs };

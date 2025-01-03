export interface CountryType {
  code: string;
  name: string;
  countryCode: string;
  country: string;
  phone: string;
  name_zh: string;
  symbol?: string;
  suggested?: boolean;
}

export const units: string[] = [
  "length",
  "area",
  "mass",
  "volume",
  "volumeFlowRate",
  "temperature",
  "time",
  "frequency",
  "speed",
  "pace",
  "pressure",
  "ditgital",
  "illuminance",
  "partsPer",
  "voltage",
  "current",
  "power",
  "apparentPower",
  "reactivePower",
  "energy",
  "reactiveEnergy",
  "angle",
  "currency",
];

//   documentation: "https://www.exchangerate-api.com/docs",
//   terms_of_use: "https://www.exchangerate-api.com/terms",
//   time_last_update_unix: 1702425601,
//   time_last_update_utc: "Wed, 13 Dec 2023 00:00:01 +0000",
//   time_next_update_unix: 1702512001,
//   time_next_update_utc: "Thu, 14 Dec 2023 00:00:01 +0000",
//   base_code: "USD",
export const conversion_rates = {
  USD: 1,
  AED: 3.6725,
  AFN: 70.5736,
  ALL: 95.3342,
  AMD: 404.4106,
  ANG: 1.79,
  AOA: 841.0038,
  ARS: 800.53,
  AUD: 1.4921,
  AWG: 1.79,
  AZN: 1.7007,
  BAM: 1.783,
  BBD: 2.0,
  BDT: 109.8534,
  BGN: 1.7839,
  BHD: 0.376,
  BIF: 2841.308,
  BMD: 1.0,
  BND: 1.3287,
  BOB: 6.8451,
  BRL: 4.9109,
  BSD: 1.0,
  BTN: 83.3337,
  BWP: 13.4791,
  BYN: 3.1556,
  BZD: 2.0,
  CAD: 1.3418,
  CDF: 2696.1799,
  CHF: 0.8676,
  CLP: 876.3203,
  CNY: 7.1258,
  COP: 4015.7689,
  CRC: 523.0905,
  CUP: 24.0,
  CVE: 100.5222,
  CZK: 22.2803,
  DJF: 177.721,
  DKK: 6.7948,
  DOP: 56.3845,
  DZD: 133.8673,
  EGP: 30.8476,
  ERN: 15.0,
  ETB: 56.2254,
  EUR: 0.9113,
  FJD: 2.2108,
  FKP: 0.7845,
  FOK: 6.795,
  GBP: 0.7845,
  GEL: 2.6828,
  GGP: 0.7845,
  GHS: 12.0829,
  GIP: 0.7845,
  GMD: 65.4816,
  GNF: 8579.6662,
  GTQ: 7.7402,
  GYD: 209.3041,
  HKD: 7.8079,
  HNL: 24.3997,
  HRK: 6.8688,
  HTG: 132.3619,
  HUF: 346.048,
  IDR: 15477.4632,
  ILS: 3.6704,
  IMP: 0.7845,
  INR: 83.3361,
  IQD: 1309.3201,
  IRR: 42015.5298,
  ISK: 137.527,
  JEP: 0.7845,
  JMD: 155.5977,
  JOD: 0.709,
  JPY: 141.9391,
  KES: 153.8861,
  KGS: 89.3566,
  KHR: 4104.089,
  KID: 1.4924,
  KMF: 448.4986,
  KRW: 1292.5822,
  KWD: 0.3072,
  KYD: 0.8333,
  KZT: 456.1097,
  LAK: 20392.2326,
  LBP: 15000.0,
  LKR: 325.9541,
  LRD: 189.1285,
  LSL: 18.369,
  LYD: 4.8328,
  MAD: 10.1299,
  MDL: 17.8125,
  MGA: 4578.5815,
  MKD: 57.0509,
  MMK: 2079.2689,
  MNT: 3476.874,
  MOP: 8.0423,
  MRU: 39.7346,
  MUR: 43.9431,
  MVR: 15.4281,
  MWK: 1689.5558,
  MXN: 17.237,
  MYR: 4.6717,
  MZN: 63.8935,
  NAD: 18.369,
  NGN: 806.8725,
  NIO: 36.1932,
  NOK: 10.5195,
  NPR: 133.334,
  NZD: 1.6103,
  OMR: 0.3845,
  PAB: 1.0,
  PEN: 3.774,
  PGK: 3.6929,
  PHP: 55.7185,
  PKR: 283.4245,
  PLN: 3.9315,
  PYG: 7277.4089,
  QAR: 3.64,
  RON: 4.5552,
  RSD: 107.0038,
  RUB: 89.6358,
  RWF: 1247.3016,
  SAR: 3.75,
  SBD: 8.478,
  SCR: 13.3462,
  SDG: 559.2608,
  SEK: 10.2467,
  SGD: 1.3286,
  SHP: 0.7845,
  SLE: 22.7953,
  SLL: 22795.2571,
  SOS: 571.5907,
  SRD: 37.4815,
  SSP: 1069.8852,
  STN: 22.3352,
  SYP: 12781.356,
  SZL: 18.369,
  THB: 34.8811,
  TJS: 10.9305,
  TMT: 3.4997,
  TND: 3.0786,
  TOP: 2.3337,
  TRY: 29.0086,
  TTD: 6.7174,
  TVD: 1.4924,
  TWD: 31.1455,
  TZS: 2510.653,
  UAH: 36.9875,
  UGX: 3771.4186,
  UYU: 39.2856,
  UZS: 12341.5498,
  VES: 35.6403,
  VND: 24196.4486,
  VUV: 118.8734,
  WST: 2.722,
  XAF: 597.9982,
  XCD: 2.7,
  XDR: 0.7482,
  XOF: 597.9982,
  XPF: 108.7881,
  YER: 247.4743,
  ZAR: 18.3693,
  ZMW: 24.6755,
  ZWL: 5910.6899,
};

export const countries: readonly CountryType[] = [
  {
    code: "AED",
    name: "UAE Dirham",
    country: "United Arab Emirates",
    countryCode: "AE",
    name_zh: "阿联酋 迪拉姆",
    phone: "971",
    symbol: "د.إ;",
  },
  {
    code: "AFN",
    name: "Afghan Afghani",
    country: "Afghanistan",
    countryCode: "AF",
    name_zh: "阿富汗 阿富汗尼",
    phone: "93",
    symbol: "Afs",
  },
  {
    code: "ALL",
    name: "Albanian Lek",
    country: "Albania",
    countryCode: "AL",
    name_zh: "阿尔巴尼亚 列克",
    phone: "355",
    symbol: "L",
  },
  {
    code: "AMD",
    name: "Armenian Dram",
    country: "Armenia",
    countryCode: "AM",
    name_zh: "亚美尼亚 德拉姆",
    phone: "374",
    symbol: "AMD",
  },
  // {
  //     "code": "ANG",
  //     "name": "Netherlands Antillian Guilder",
  //     "country": "Netherlands Antilles",
  //     "countryCode": "AN",
  //     "name_zh": "荷属安的列斯盾",
  //     "phone": "",
  //     "symbol": "NAƒ"
  // },
  {
    code: "AOA",
    name: "Angolan Kwanza",
    country: "Angola",
    countryCode: "AO",
    name_zh: "安哥拉 安哥拉宽扎",
    phone: "244",
    symbol: "Kz",
  },
  {
    code: "ARS",
    name: "Argentine Peso",
    country: "Argentina",
    countryCode: "AR",
    name_zh: "阿根廷 比索",
    phone: "54",
    symbol: "$",
  },
  {
    code: "AUD",
    name: "Australian Dollar",
    country: "Australia",
    countryCode: "AU",
    name_zh: "澳大利亚 元",
    phone: "61",
    symbol: "$",
  },
  {
    code: "AWG",
    name: "Aruban Florin",
    country: "Aruba",
    countryCode: "AW",
    name_zh: "阿鲁巴 荷兰盾",
    phone: "297",
    symbol: "ƒ",
  },
  {
    code: "AZN",
    name: "Azerbaijani Manat",
    country: "Azerbaijan",
    countryCode: "AZ",
    name_zh: "阿塞拜疆 新马纳特",
    phone: "994",
    symbol: "AZN",
  },
  {
    code: "BAM",
    name: "Bosnia and Herzegovina Mark",
    country: "Bosnia and Herzegovina",
    countryCode: "BA",
    name_zh: "波斯尼亚和黑塞哥维那 可自由兑换马克",
    phone: "387",
    symbol: "KM",
  },
  {
    code: "BBD",
    name: "Barbados Dollar",
    country: "Barbados",
    countryCode: "BB",
    name_zh: "巴巴多斯 元",
    phone: "1-246",
    symbol: "Bds$",
  },
  {
    code: "BDT",
    name: "Bangladeshi Taka",
    country: "Bangladesh",
    countryCode: "BD",
    name_zh: "孟加拉 塔卡",
    phone: "880",
    symbol: "৳",
  },
  {
    code: "BGN",
    name: "Bulgarian Lev",
    country: "Bulgaria",
    countryCode: "BG",
    name_zh: "保加利亚 列弗",
    phone: "359",
    symbol: "BGN",
  },
  {
    code: "BHD",
    name: "Bahraini Dinar",
    country: "Bahrain",
    countryCode: "BH",
    name_zh: "巴林 第纳尔",
    phone: "973",
    symbol: ".د.ب",
  },
  {
    code: "BIF",
    name: "Burundian Franc",
    country: "Burundi",
    countryCode: "BI",
    name_zh: "布隆迪 法郎",
    phone: "257",
    symbol: "FBu",
  },
  {
    code: "BMD",
    name: "Bermudian Dollar",
    country: "Bermuda",
    countryCode: "BM",
    name_zh: "百慕大 元",
    phone: "1-441",
    symbol: "BD$",
  },
  {
    code: "BND",
    name: "Brunei Dollar",
    country: "Brunei Darussalam",
    countryCode: "BN",
    name_zh: "文莱 元",
    phone: "673",
    symbol: "B$",
  },
  {
    code: "BOB",
    name: "Bolivian Boliviano",
    country: "Bolivia",
    countryCode: "BO",
    name_zh: "玻利维亚 玻利维亚诺",
    phone: "591",
    symbol: "Bs.",
  },
  {
    code: "BRL",
    name: "Brazilian Real",
    country: "Brazil",
    countryCode: "BR",
    name_zh: "巴西 雷亚尔",
    phone: "55",
    symbol: "R$",
  },
  {
    code: "BSD",
    name: "Bahamian Dollar",
    country: "Bahamas",
    countryCode: "BS",
    name_zh: "巴哈马 元",
    phone: "1-242",
    symbol: "B$",
  },
  {
    code: "BTN",
    name: "Bhutanese Ngultrum",
    country: "Bhutan",
    countryCode: "BT",
    name_zh: "不丹 努尔特鲁姆",
    phone: "975",
    symbol: "Nu.",
  },
  {
    code: "BWP",
    name: "Botswana Pula",
    country: "Botswana",
    countryCode: "BW",
    name_zh: "博茨瓦纳 普拉",
    phone: "267",
    symbol: "P",
  },
  {
    code: "BYN",
    name: "Belarusian Ruble",
    country: "Belarus",
    countryCode: "BY",
    name_zh: "白俄罗斯 卢布",
    phone: "375",
    symbol: "",
  },
  {
    code: "BZD",
    name: "Belize Dollar",
    country: "Belize",
    countryCode: "BZ",
    name_zh: "伯利兹 元",
    phone: "501",
    symbol: "BZ$",
  },
  {
    code: "CAD",
    name: "Canadian Dollar",
    country: "Canada",
    countryCode: "CA",
    name_zh: "加拿大 元",
    phone: "1",
    symbol: "$",
  },
  {
    code: "CDF",
    name: "Congolese Franc",
    country: "Democratic Republic of the Congo",
    countryCode: "CD",
    name_zh: "刚果 法郎",
    phone: "243",
    symbol: "F",
  },
  {
    code: "CHF",
    name: "Swiss Franc",
    country: "Switzerland",
    countryCode: "CH",
    name_zh: "瑞士 法郎",
    phone: "41",
    symbol: "Fr.",
  },
  {
    code: "CLP",
    name: "Chilean Peso",
    country: "Chile",
    countryCode: "CL",
    name_zh: "智利 比索",
    phone: "56",
    symbol: "$",
  },
  {
    code: "CNY",
    name: "Chinese Renminbi",
    country: "China",
    countryCode: "CN",
    name_zh: "中国 人民币",
    phone: "86",
    symbol: "¥",
  },
  {
    code: "COP",
    name: "Colombian Peso",
    country: "Colombia",
    countryCode: "CO",
    name_zh: "哥伦比亚 比索",
    phone: "57",
    symbol: "Col$",
  },
  {
    code: "CRC",
    name: "Costa Rican Colon",
    country: "Costa Rica",
    countryCode: "CR",
    name_zh: "哥斯达黎加 科朗",
    phone: "506",
    symbol: "₡",
  },
  {
    code: "CUP",
    name: "Cuban Peso",
    country: "Cuba",
    countryCode: "CU",
    name_zh: "古巴 比索",
    phone: "53",
    symbol: "",
  },
  {
    code: "CVE",
    name: "Cape Verdean Escudo",
    country: "Cape Verde",
    countryCode: "CV",
    name_zh: "佛得角 埃斯库多",
    phone: "238",
    symbol: "Esc",
  },
  {
    code: "CZK",
    name: "Czech Koruna",
    country: "Czech Republic",
    countryCode: "CZ",
    name_zh: "捷克共和国 克郎",
    phone: "420",
    symbol: "Kč",
  },
  {
    code: "DJF",
    name: "Djiboutian Franc",
    country: "Djibouti",
    countryCode: "DJ",
    name_zh: "吉布提 法郎",
    phone: "253",
    symbol: "Fdj",
  },
  {
    code: "DKK",
    name: "Danish Krone",
    country: "Denmark",
    countryCode: "DK",
    name_zh: "丹麦 丹麦克朗",
    phone: "45",
    symbol: "Kr",
  },
  {
    code: "DOP",
    name: "Dominican Peso",
    country: "Dominican Republic",
    countryCode: "DO",
    name_zh: "多米尼加共和国 比索",
    phone: "1-809",
    symbol: "RD$",
  },
  {
    code: "DZD",
    name: "Algerian Dinar",
    country: "Algeria",
    countryCode: "DZ",
    name_zh: "阿尔及利亚 第纳尔",
    phone: "213",
    symbol: "د.ج",
  },
  {
    code: "EGP",
    name: "Egyptian Pound",
    country: "Egypt",
    countryCode: "EG",
    name_zh: "埃及 镑",
    phone: "20",
    symbol: "£",
  },
  {
    code: "ERN",
    name: "Eritrean Nakfa",
    country: "Eritrea",
    countryCode: "ER",
    name_zh: "厄立特里亚 纳克法",
    phone: "291",
    symbol: "Nfa",
  },
  {
    code: "ETB",
    name: "Ethiopian Birr",
    country: "Ethiopia",
    countryCode: "ET",
    name_zh: "埃塞俄比亚 比尔",
    phone: "251",
    symbol: "Br",
  },
  {
    code: "EUR",
    name: "Euro",
    country: "European Union",
    countryCode: "eu",
    name_zh: "欧元",
    phone: "",
    symbol: "€",
  },
  {
    code: "FJD",
    name: "Fiji Dollar",
    country: "Fiji",
    countryCode: "FJ",
    name_zh: "斐济 元",
    phone: "679",
    symbol: "FJ$",
  },
  {
    code: "FKP",
    name: "Falkland Islands Pound",
    country: "Falkland Islands",
    countryCode: "FK",
    name_zh: "福克兰群岛 镑",
    phone: "500",
    symbol: "£",
  },
  {
    code: "FOK",
    name: "Faroese Króna",
    country: "Faroe Islands",
    countryCode: "FO",
    name_zh: "法罗群岛 法罗克朗",
    phone: "298",
    symbol: "",
  },
  {
    code: "GBP",
    name: "Pound Sterling",
    country: "United Kingdom",
    countryCode: "GB",
    name_zh: "英国 镑",
    phone: "44",
    symbol: "£",
  },
  {
    code: "GEL",
    name: "Georgian Lari",
    country: "Georgia",
    countryCode: "GE",
    name_zh: "格鲁吉亚 拉里",
    phone: "995",
    symbol: "GEL",
  },
  {
    code: "GGP",
    name: "Guernsey Pound",
    country: "Guernsey",
    countryCode: "GG",
    name_zh: "",
    phone: "44",
    symbol: "根西岛 镑",
  },
  {
    code: "GHS",
    name: "Ghanaian Cedi",
    country: "Ghana",
    countryCode: "GH",
    name_zh: "加纳 塞地",
    phone: "233",
    symbol: "GH₵",
  },
  {
    code: "GIP",
    name: "Gibraltar Pound",
    country: "Gibraltar",
    countryCode: "GI",
    name_zh: "直布罗陀 镑",
    phone: "350",
    symbol: "£",
  },
  {
    code: "GMD",
    name: "Gambian Dalasi",
    country: "The Gambia",
    countryCode: "GM",
    name_zh: "冈比亚 达拉斯",
    phone: "220",
    symbol: "D",
  },
  {
    code: "GNF",
    name: "Guinean Franc",
    country: "Guinea",
    countryCode: "GN",
    name_zh: "几内亚 法郎",
    phone: "224",
    symbol: "FG",
  },
  {
    code: "GTQ",
    name: "Guatemalan Quetzal",
    country: "Guatemala",
    countryCode: "GT",
    name_zh: "危地马拉 格查尔",
    phone: "502",
    symbol: "Q",
  },
  {
    code: "GYD",
    name: "Guyanese Dollar",
    country: "Guyana",
    countryCode: "GY",
    name_zh: "圭亚那 元",
    phone: "592",
    symbol: "GY$",
  },
  {
    code: "HKD",
    name: "Hong Kong Dollar",
    country: "Hong Kong",
    countryCode: "HK",
    name_zh: "中国香港特别行政区 元",
    phone: "852",
    symbol: "HK$",
  },
  {
    code: "HNL",
    name: "Honduran Lempira",
    country: "Honduras",
    countryCode: "HN",
    name_zh: "洪都拉斯 伦皮拉",
    phone: "504",
    symbol: "L",
  },
  {
    code: "HRK",
    name: "Croatian Kuna",
    country: "Croatia",
    countryCode: "HR",
    name_zh: "克罗地亚 库纳",
    phone: "385",
    symbol: "kn",
  },
  {
    code: "HTG",
    name: "Haitian Gourde",
    country: "Haiti",
    countryCode: "HT",
    name_zh: "海地 古德",
    phone: "509",
    symbol: "G",
  },
  {
    code: "HUF",
    name: "Hungarian Forint",
    country: "Hungary",
    countryCode: "HU",
    name_zh: "匈牙利 福林",
    phone: "36",
    symbol: "Ft",
  },
  {
    code: "IDR",
    name: "Indonesian Rupiah",
    country: "Indonesia",
    countryCode: "ID",
    name_zh: "印度尼西亚 印尼盾",
    phone: "62",
    symbol: "Rp",
  },
  {
    code: "ILS",
    name: "Israeli New Shekel",
    country: "Israel",
    countryCode: "IL",
    name_zh: "以色列 新谢克尔",
    phone: "972",
    symbol: "₪",
  },
  {
    code: "IMP",
    name: "Manx Pound",
    country: "Isle of Man",
    countryCode: "IM",
    name_zh: "马恩岛 镑",
    phone: "44",
    symbol: "",
  },
  {
    code: "INR",
    name: "Indian Rupee",
    country: "India",
    countryCode: "IN",
    name_zh: "印度 卢比",
    phone: "91",
    symbol: "₹",
  },
  {
    code: "IQD",
    name: "Iraqi Dinar",
    country: "Iraq",
    countryCode: "IQ",
    name_zh: "伊拉克 第纳尔",
    phone: "964",
    symbol: "د.ع",
  },
  {
    code: "IRR",
    name: "Iranian Rial",
    country: "Iran",
    countryCode: "IR",
    name_zh: "伊朗 里亚尔",
    phone: "98",
    symbol: "IRR",
  },
  {
    code: "ISK",
    name: "Icelandic Króna",
    country: "Iceland",
    countryCode: "IS",
    name_zh: "冰岛 克朗",
    phone: "354",
    symbol: "kr",
  },
  {
    code: "JEP",
    name: "Jersey Pound",
    country: "Jersey",
    countryCode: "JE",
    name_zh: "泽西岛 磅",
    phone: "44",
    symbol: "",
  },
  {
    code: "JMD",
    name: "Jamaican Dollar",
    country: "Jamaica",
    countryCode: "JM",
    name_zh: "牙买加 元",
    phone: "1-876",
    symbol: "J$",
  },
  {
    code: "JOD",
    name: "Jordanian Dinar",
    country: "Jordan",
    countryCode: "JO",
    name_zh: "约旦 第纳尔",
    phone: "962",
    symbol: "JOD",
  },
  {
    code: "JPY",
    name: "Japanese Yen",
    country: "Japan",
    countryCode: "JP",
    name_zh: "日本 日元",
    phone: "81",
    symbol: "¥",
  },
  {
    code: "KES",
    name: "Kenyan Shilling",
    country: "Kenya",
    countryCode: "KE",
    name_zh: "肯尼亚 先令",
    phone: "254",
    symbol: "KSh",
  },
  {
    code: "KGS",
    name: "Kyrgyzstani Som",
    country: "Kyrgyzstan",
    countryCode: "KG",
    name_zh: "吉尔吉斯斯坦 索姆",
    phone: "996",
    symbol: "сом",
  },
  {
    code: "KHR",
    name: "Cambodian Riel",
    country: "Cambodia",
    countryCode: "KH",
    name_zh: "柬埔寨 瑞尔",
    phone: "855",
    symbol: "៛",
  },
  {
    code: "KID",
    name: "Kiribati Dollar",
    country: "Kiribati",
    countryCode: "KI",
    name_zh: "基里巴斯 元",
    phone: "686",
    symbol: "",
  },
  {
    code: "KMF",
    name: "Comorian Franc",
    country: "Comoros",
    countryCode: "KM",
    name_zh: "科摩罗联盟 法郎",
    phone: "269",
    symbol: "KMF",
  },
  {
    code: "KRW",
    name: "South Korean Won",
    country: "South Korea",
    countryCode: "KR",
    name_zh: "韩国 韩元",
    phone: "82",
    symbol: "W",
  },
  {
    code: "KWD",
    name: "Kuwaiti Dinar",
    country: "Kuwait",
    countryCode: "KW",
    name_zh: "科威特 第纳尔",
    phone: "965",
    symbol: "KWD",
  },
  {
    code: "KYD",
    name: "Cayman Islands Dollar",
    country: "Cayman Islands",
    countryCode: "KY",
    name_zh: "开曼群岛 元",
    phone: "1-345",
    symbol: "KY$",
  },
  {
    code: "KZT",
    name: "Kazakhstani Tenge",
    country: "Kazakhstan",
    countryCode: "KZ",
    name_zh: "哈萨克斯坦 坚戈",
    phone: "7",
    symbol: "T",
  },
  {
    code: "LAK",
    name: "Lao Kip",
    country: "Laos",
    countryCode: "la",
    name_zh: "老挝 基普",
    phone: "",
    symbol: "KN",
  },
  {
    code: "LBP",
    name: "Lebanese Pound",
    country: "Lebanon",
    countryCode: "LB",
    name_zh: "黎巴嫩 镑",
    phone: "961",
    symbol: "£",
  },
  {
    code: "LKR",
    name: "Sri Lanka Rupee",
    country: "Sri Lanka",
    countryCode: "LK",
    name_zh: "斯里兰卡 卢比",
    phone: "94",
    symbol: "Rs",
  },
  {
    code: "LRD",
    name: "Liberian Dollar",
    country: "Liberia",
    countryCode: "LR",
    name_zh: "利比里亚 元",
    phone: "231",
    symbol: "L$",
  },
  {
    code: "LSL",
    name: "Lesotho Loti",
    country: "Lesotho",
    countryCode: "LS",
    name_zh: "莱索托 洛蒂",
    phone: "266",
    symbol: "M",
  },
  {
    code: "LYD",
    name: "Libyan Dinar",
    country: "Libya",
    countryCode: "LY",
    name_zh: "利比亚 第纳尔",
    phone: "218",
    symbol: "LD",
  },
  {
    code: "MAD",
    name: "Moroccan Dirham",
    country: "Morocco",
    countryCode: "MA",
    name_zh: "摩洛哥 迪拉姆",
    phone: "212",
    symbol: "MAD",
  },
  {
    code: "MDL",
    name: "Moldovan Leu",
    country: "Moldova",
    countryCode: "MD",
    name_zh: "摩尔多瓦 列伊",
    phone: "373",
    symbol: "MDL",
  },
  {
    code: "MGA",
    name: "Malagasy Ariary",
    country: "Madagascar",
    countryCode: "MG",
    name_zh: "马达加斯加 阿里亚里",
    phone: "261",
    symbol: "FMG",
  },
  {
    code: "MKD",
    name: "Macedonian Denar",
    country: "North Macedonia",
    countryCode: "mk",
    name_zh: "马其顿 代纳尔",
    phone: "",
    symbol: "MKD",
  },
  {
    code: "MMK",
    name: "Burmese Kyat",
    country: "Myanmar",
    countryCode: "MM",
    name_zh: "缅甸 元",
    phone: "95",
    symbol: "K",
  },
  {
    code: "MNT",
    name: "Mongolian Tögrög",
    country: "Mongolia",
    countryCode: "MN",
    name_zh: "蒙古 图格里克",
    phone: "976",
    symbol: "₮",
  },
  {
    code: "MOP",
    name: "Macanese Pataca",
    country: "Macau",
    countryCode: "CN",
    name_zh: "中国澳门特别行政区 澳元",
    phone: "",
    symbol: "P",
  },
  {
    code: "MRU",
    name: "Mauritanian Ouguiya",
    country: "Mauritania",
    countryCode: "MR",
    name_zh: "毛里塔尼亚 乌吉亚",
    phone: "222",
    symbol: "UM",
  },
  {
    code: "MUR",
    name: "Mauritian Rupee",
    country: "Mauritius",
    countryCode: "MU",
    name_zh: "毛里求斯 卢比",
    phone: "230",
    symbol: "Rs",
  },
  {
    code: "MVR",
    name: "Maldivian Rufiyaa",
    country: "Maldives",
    countryCode: "MV",
    name_zh: "马尔代夫 卢菲亚",
    phone: "960",
    symbol: "Rf",
  },
  {
    code: "MWK",
    name: "Malawian Kwacha",
    country: "Malawi",
    countryCode: "MW",
    name_zh: "马拉维 克瓦查",
    phone: "265",
    symbol: "MK",
  },
  {
    code: "MXN",
    name: "Mexican Peso",
    country: "Mexico",
    countryCode: "MX",
    name_zh: "墨西哥 比索",
    phone: "52",
    symbol: "$",
  },
  {
    code: "MYR",
    name: "Malaysian Ringgit",
    country: "Malaysia",
    countryCode: "MY",
    name_zh: "马来西亚 林吉特",
    phone: "60",
    symbol: "RM",
  },
  {
    code: "MZN",
    name: "Mozambican Metical",
    country: "Mozambique",
    countryCode: "MZ",
    name_zh: "莫桑比克 美提卡",
    phone: "258",
    symbol: "",
  },
  {
    code: "NAD",
    name: "Namibian Dollar",
    country: "Namibia",
    countryCode: "NA",
    name_zh: "纳米比亚 元",
    phone: "264",
    symbol: "N$",
  },
  {
    code: "NGN",
    name: "Nigerian Naira",
    country: "Nigeria",
    countryCode: "NG",
    name_zh: "尼日利亚 奈拉",
    phone: "234",
    symbol: "₦",
  },
  {
    code: "NIO",
    name: "Nicaraguan Córdoba",
    country: "Nicaragua",
    countryCode: "NI",
    name_zh: "尼加拉瓜 科多巴",
    phone: "505",
    symbol: "C$",
  },
  {
    code: "NOK",
    name: "Norwegian Krone",
    country: "Norway",
    countryCode: "NO",
    name_zh: "挪威 挪威克朗",
    phone: "47",
    symbol: "kr",
  },
  {
    code: "NPR",
    name: "Nepalese Rupee",
    country: "Nepal",
    countryCode: "NP",
    name_zh: "尼泊尔 卢比",
    phone: "977",
    symbol: "NRs",
  },
  {
    code: "NZD",
    name: "New Zealand Dollar",
    country: "New Zealand",
    countryCode: "NZ",
    name_zh: "新西兰 元",
    phone: "64",
    symbol: "NZ$",
  },
  {
    code: "OMR",
    name: "Omani Rial",
    country: "Oman",
    countryCode: "OM",
    name_zh: "阿曼 里亚尔",
    phone: "968",
    symbol: "OMR",
  },
  {
    code: "PAB",
    name: "Panamanian Balboa",
    country: "Panama",
    countryCode: "PA",
    name_zh: "巴拿马 巴拿马巴波亚",
    phone: "507",
    symbol: "B./",
  },
  {
    code: "PEN",
    name: "Peruvian Sol",
    country: "Peru",
    countryCode: "PE",
    name_zh: "秘鲁 新索尔",
    phone: "51",
    symbol: "S/.",
  },
  {
    code: "PGK",
    name: "Papua New Guinean Kina",
    country: "Papua New Guinea",
    countryCode: "PG",
    name_zh: "巴布亚新几内 亚基那",
    phone: "675",
    symbol: "K",
  },
  {
    code: "PHP",
    name: "Philippine Peso",
    country: "Philippines",
    countryCode: "PH",
    name_zh: "菲律宾 比索",
    phone: "63",
    symbol: "₱",
  },
  {
    code: "PKR",
    name: "Pakistani Rupee",
    country: "Pakistan",
    countryCode: "PK",
    name_zh: "巴基斯坦 卢比",
    phone: "92",
    symbol: "Rs.",
  },
  {
    code: "PLN",
    name: "Polish Złoty",
    country: "Poland",
    countryCode: "PL",
    name_zh: "波兰 兹罗提",
    phone: "48",
    symbol: "zł",
  },
  {
    code: "PYG",
    name: "Paraguayan Guaraní",
    country: "Paraguay",
    countryCode: "PY",
    name_zh: "巴拉圭 瓜拉尼",
    phone: "595",
    symbol: "₲",
  },
  {
    code: "QAR",
    name: "Qatari Riyal",
    country: "Qatar",
    countryCode: "QA",
    name_zh: "卡塔尔 里亚尔",
    phone: "974",
    symbol: "QR",
  },
  {
    code: "RON",
    name: "Romanian Leu",
    country: "Romania",
    countryCode: "RO",
    name_zh: "罗马尼亚 新列伊",
    phone: "40",
    symbol: "L",
  },
  {
    code: "RSD",
    name: "Serbian Dinar",
    country: "Serbia",
    countryCode: "RS",
    name_zh: "塞尔维亚 第纳尔",
    phone: "381",
    symbol: "din.",
  },
  {
    code: "RUB",
    name: "Russian Ruble",
    country: "Russia",
    countryCode: "RU",
    name_zh: "俄罗斯 卢布",
    phone: "7",
    symbol: "R",
  },
  {
    code: "RWF",
    name: "Rwandan Franc",
    country: "Rwanda",
    countryCode: "RW",
    name_zh: "卢旺达 法郎",
    phone: "250",
    symbol: "",
  },
  {
    code: "SAR",
    name: "Saudi Riyal",
    country: "Saudi Arabia",
    countryCode: "SA",
    name_zh: "沙特阿拉伯 里亚尔",
    phone: "966",
    symbol: "SR",
  },
  {
    code: "SBD",
    name: "Solomon Islands Dollar",
    country: "Solomon Islands",
    countryCode: "SB",
    name_zh: "所罗门群岛 元",
    phone: "677",
    symbol: "SI$",
  },
  {
    code: "SCR",
    name: "Seychellois Rupee",
    country: "Seychelles",
    countryCode: "SC",
    name_zh: "塞舌尔 卢比",
    phone: "248",
    symbol: "SR",
  },
  {
    code: "SDG",
    name: "Sudanese Pound",
    country: "Sudan",
    countryCode: "SD",
    name_zh: "苏丹 镑",
    phone: "249",
    symbol: "SDG",
  },
  {
    code: "SEK",
    name: "Swedish Krona",
    country: "Sweden",
    countryCode: "SE",
    name_zh: "瑞典 克朗",
    phone: "46",
    symbol: "kr",
  },
  {
    code: "SGD",
    name: "Singapore Dollar",
    country: "Singapore",
    countryCode: "SG",
    name_zh: "新加坡 元",
    phone: "65",
    symbol: "S$",
  },
  {
    code: "SHP",
    name: "Saint Helena Pound",
    country: "Saint Helena",
    countryCode: "SH",
    name_zh: "圣赫勒拿群岛 磅",
    phone: "290",
    symbol: "£",
  },
  {
    code: "SLL",
    name: "Sierra Leonean Leone",
    country: "Sierra Leone",
    countryCode: "SL",
    name_zh: "塞拉利昂 利昂",
    phone: "232",
    symbol: "Le",
  },
  {
    code: "SOS",
    name: "Somali Shilling",
    country: "Somalia",
    countryCode: "SO",
    name_zh: "索马里 先令",
    phone: "252",
    symbol: "Sh.",
  },
  {
    code: "SRD",
    name: "Surinamese Dollar",
    country: "Suriname",
    countryCode: "SR",
    name_zh: "苏里南 元",
    phone: "597",
    symbol: "$",
  },
  {
    code: "SSP",
    name: "South Sudanese Pound",
    country: "South Sudan",
    countryCode: "ss",
    name_zh: "南苏丹 镑",
    phone: "",
    symbol: "",
  },
  {
    code: "STN",
    name: "Sao Tome and Principe Dobra",
    country: "Sao Tome and Principe",
    countryCode: "ST",
    name_zh: "圣多美和普林西比 多布拉",
    phone: "239",
    symbol: "",
  },
  {
    code: "SYP",
    name: "Syrian Pound",
    country: "Syria",
    countryCode: "SY",
    name_zh: "叙利亚 镑",
    phone: "963",
    symbol: "LS",
  },
  {
    code: "SZL",
    name: "Eswatini Lilangeni",
    country: "Eswatini",
    countryCode: "SZ",
    name_zh: "斯威士兰 里兰吉尼",
    phone: "268",
    symbol: "E",
  },
  {
    code: "THB",
    name: "Thai Baht",
    country: "Thailand",
    countryCode: "TH",
    name_zh: "泰国 铢",
    phone: "66",
    symbol: "฿",
  },
  {
    code: "TJS",
    name: "Tajikistani Somoni",
    country: "Tajikistan",
    countryCode: "TJ",
    name_zh: "塔吉克斯坦 索莫尼",
    phone: "992",
    symbol: "TJS",
  },
  {
    code: "TMT",
    name: "Turkmenistan Manat",
    country: "Turkmenistan",
    countryCode: "TM",
    name_zh: "土库曼斯坦 马纳特",
    phone: "993",
    symbol: "m",
  },
  {
    code: "TND",
    name: "Tunisian Dinar",
    country: "Tunisia",
    countryCode: "TN",
    name_zh: "突尼斯 第纳尔",
    phone: "216",
    symbol: "DT",
  },
  {
    code: "TOP",
    name: "Tongan Paʻanga",
    country: "Tonga",
    countryCode: "TO",
    name_zh: "汤加 潘加",
    phone: "676",
    symbol: "",
  },
  {
    code: "TRY",
    name: "Turkish Lira",
    country: "Turkey",
    countryCode: "TR",
    name_zh: "土耳其 里拉",
    phone: "90",
    symbol: "TRY",
  },
  {
    code: "TTD",
    name: "Trinidad and Tobago Dollar",
    country: "Trinidad and Tobago",
    countryCode: "TT",
    name_zh: "特立尼达和多巴哥 元",
    phone: "1-868",
    symbol: "TT$",
  },
  {
    code: "TVD",
    name: "Tuvaluan Dollar",
    country: "Tuvalu",
    countryCode: "TV",
    name_zh: "图瓦卢 元",
    phone: "688",
    symbol: "",
  },
  {
    code: "TWD",
    name: "New Taiwan Dollar",
    country: "Taiwan",
    countryCode: "TW",
    name_zh: "中国台湾 新台币",
    phone: "886",
    symbol: "NT$",
  },
  {
    code: "TZS",
    name: "Tanzanian Shilling",
    country: "Tanzania",
    countryCode: "TZ",
    name_zh: "坦桑尼亚 先令",
    phone: "255",
    symbol: "TZS",
  },
  {
    code: "UAH",
    name: "Ukrainian Hryvnia",
    country: "Ukraine",
    countryCode: "UA",
    name_zh: "乌克兰 乌克兰格里夫纳",
    phone: "380",
    symbol: "UAH",
  },
  {
    code: "UGX",
    name: "Ugandan Shilling",
    country: "Uganda",
    countryCode: "UG",
    name_zh: "乌干达 先令",
    phone: "256",
    symbol: "USh",
  },
  {
    code: "USD",
    name: "United States Dollar",
    country: "United States",
    countryCode: "US",
    name_zh: "美国 元",
    phone: "1",
    symbol: "US$",
  },
  {
    code: "UYU",
    name: "Uruguayan Peso",
    country: "Uruguay",
    countryCode: "UY",
    name_zh: "乌拉圭 比索",
    phone: "598",
    symbol: "$U",
  },
  {
    code: "UZS",
    name: "Uzbekistani So'm",
    country: "Uzbekistan",
    countryCode: "UZ",
    name_zh: "乌兹别克斯坦 索姆",
    phone: "998",
    symbol: "UZS",
  },
  {
    code: "VES",
    name: "Venezuelan Bolíconst Soberano",
    country: "Venezuela",
    countryCode: "VE",
    name_zh: "委内瑞拉 玻利瓦尔",
    phone: "58",
    symbol: "",
  },
  {
    code: "VND",
    name: "Vietnamese Đồng",
    country: "Vietnam",
    countryCode: "vn",
    name_zh: "越南 盾",
    phone: "",
    symbol: "₫",
  },
  {
    code: "VUV",
    name: "Vanuatu Vatu",
    country: "Vanuatu",
    countryCode: "VU",
    name_zh: "瓦努阿图 瓦图",
    phone: "678",
    symbol: "VT",
  },
  {
    code: "WST",
    name: "Samoan Tālā",
    country: "Samoa",
    countryCode: "WS",
    name_zh: "萨摩亚 塔拉",
    phone: "685",
    symbol: "WS$",
  },
  {
    code: "XOF",
    name: "West African CFA franc",
    country: "CFA",
    countryCode: "CF",
    name_zh: "非洲金融共同体 法郎",
    phone: "236",
    symbol: "CFA",
  },
  {
    code: "YER",
    name: "Yemeni Rial",
    country: "Yemen",
    countryCode: "YE",
    name_zh: "也门 里亚尔",
    phone: "967",
    symbol: "YER",
  },
  {
    code: "ZAR",
    name: "South African Rand",
    country: "South Africa",
    countryCode: "ZA",
    name_zh: "南非 兰特",
    phone: "27",
    symbol: "R",
  },
  {
    code: "ZMW",
    name: "Zambian Kwacha",
    country: "Zambia",
    countryCode: "ZM",
    name_zh: "赞比亚 克瓦查",
    phone: "260",
    symbol: "",
  },
  {
    code: "ZWL",
    name: "Zimbabwean Dollar",
    country: "Zimbabwe",
    countryCode: "ZW",
    name_zh: "津巴布韦 元",
    phone: "263",
    symbol: "",
  },
];

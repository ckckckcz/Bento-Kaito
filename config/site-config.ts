export type GridItemLayout = "1x2" | "2x1" | "2x2" | "2x4" | "4x4"; // First number is width, second is height
export type GridItemType = "social" | "equipment" | "mentor" | "project" | "experience" | "skills";
export type EqiupmentItem = {
  title: string;
  link: string;
};

export interface GridItemInterface {
  layout: GridItemLayout;
  type: GridItemType;
  title: string;
  icon?: string;
  username?: string;
  description?: string;
  color?: string;
  buttonTitle?: string;
  buttonLink?: string;
  buttonSecondaryText?: string;
  /* Mentor */
  promotion?: string;
  price?: string;
  oldPrice?: string;
  /* Project */
  stars?: number;
  /* Equipments */
  equipments?: EqiupmentItem[];
  image?: string;
}

const GridItems: GridItemInterface[] = [
  {
    layout: "2x2",
    type: "social",
    title: "LinkedIn",
    icon: "linkedin",
    username: "Riovaldo Alfiyan Fahmi Rahman",
    description: "Informatics Engineering Student at State Polytechnic of Malang | UI/UX Designer Enthusiast | Frontend Web Developer Enthusiast | Member of Workshop Riset Informatika.",
    color: "#0A66C2",
    buttonTitle: "Mari Terhubung !",
    buttonLink: "https://www.linkedin.com/in/riovaldorahman/",
    buttonSecondaryText: "1.2K",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Behance",
    icon: "behance",
    username: "Riovaldo Alfiyan Fahmi Rahman",
    buttonTitle: "Ikuti",
    buttonLink: "https://behance.net/riovaldorahman/",
    color: "#2196F3",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Github",
    icon: "github",
    username: "@ckckckcz",
    buttonTitle: "Ikuti",
    buttonLink: "https://github.com/ckckckcz/",
    color: "#070707",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Instagram",
    description: "",
    icon: "instagram",
    username: "@ckckckcz",
    buttonTitle: "Ikuti",
    buttonSecondaryText: "5.6k",
    buttonLink: "https://instagram.com/ckckckcz/",
    color: "#304FFE",
  },
  {
    layout: "2x2",
    type: "social",
    title: "Instagram",
    description: "",
    icon: "instagram",
    username: "@kazekaito",
    buttonTitle: "Ikuti",
    buttonSecondaryText: "9",
    buttonLink: "https://instagram.com/kazekaito/",
    color: "#304FFE",
  },
];

const GridItemsLower: GridItemInterface[] = [
  {
    layout: "1x2",
    type: "social",
    title: "Booking Systems",
    username: "",
    description: "Code CLI Building Booking System",
    icon: "java",
    buttonTitle: "Repositori",
    buttonSecondaryText: "",
    buttonLink: "https://github.com/Sistem-Booking/",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Kaze Kaito",
    username: "",
    description: "Code Portfolio V3",
    icon: "nextjs",
    buttonTitle: "Repositori",
    buttonSecondaryText: "",
    buttonLink: "https://github.com/ckckckcz/Kaze-Kaito-Website",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Bento Kaito",
    username: "",
    description: "Code 11 12 similar to Linktree",
    icon: "typescript",
    buttonTitle: "Repositori",
    buttonSecondaryText: "",
    buttonLink: "https://github.com/ckckckcz/Bento",
    color: "#3178c6",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Car Rent - UI/UX",
    icon: "behance",
    username: "Website Design UI/UX Rent Car",
    buttonTitle: "Kunjungi",
    buttonLink: "https://www.behance.net/gallery/187358457/Website-Rental-Mobil-UXUI",
    color: "#2196F3",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Maloka - UI/UX",
    username: "",
    description: "Mobile Design UI/UX Kost App",
    icon: "behance",
    buttonTitle: "Kunjungi",
    buttonSecondaryText: "",
    buttonLink: "https://www.behance.net/gallery/191244639/Maloka-Booking-App",
    color: "#2196F3",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Lekomasahiro - Website",
    username: "",
    description: "Portfolio V1",
    icon: "website",
    buttonTitle: "Kunjungi",
    buttonSecondaryText: "",
    buttonLink: "https://www.linkedin.com/in/riovaldorahman/details/projects/urn:li:fsd_profileProject:(ACoAADxJDlcBdnGNaEonaJUYw2ySyrHdakVbcF8,1915423357)/treasury/",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Lekomasahiro - Website",
    username: "",
    description: "Portfolio V2",
    icon: "website",
    buttonTitle: "Kunjungi",
    buttonSecondaryText: "",
    buttonLink: "https://www.linkedin.com/in/riovaldorahman/details/projects/urn:li:fsd_profileProject:(ACoAADxJDlcBdnGNaEonaJUYw2ySyrHdakVbcF8,1170453874)/treasury/",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Kaze Kaito - Website",
    username: "",
    description: "Portfolio V3",
    icon: "website",
    buttonTitle: "Kunjungi",
    buttonSecondaryText: "",
    buttonLink: "https://kazekaito.vercel.app/",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Lekomasademo - Website",
    username: "",
    description: "A collection of my projects",
    icon: "website",
    buttonTitle: "Kunjungi",
    buttonSecondaryText: "",
    buttonLink: "http://lekomasademo.000webhostapp.com/",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Lekomasatree - Website",
    username: "",
    description: "11 12 similar to Linktree",
    icon: "website",
    buttonTitle: "Kunjungi",
    buttonSecondaryText: "",
    buttonLink: "https://lekomasatree.000webhostapp.com/",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Bento Kaito - Website",
    username: "",
    description: "11 12 similar to Linktree",
    icon: "website",
    buttonTitle: "Kunjungi",
    buttonSecondaryText: "",
    buttonLink: "https://bentokaito.vercel.app/",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Alexi - Website",
    username: "",
    description: "Blog website",
    icon: "website",
    buttonTitle: "Kunjungi",
    buttonSecondaryText: "",
    buttonLink: "https://www.linkedin.com/in/riovaldorahman/details/projects/urn:li:fsd_profileProject:(ACoAADxJDlcBdnGNaEonaJUYw2ySyrHdakVbcF8,1032852777)/treasury/",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Pengaduan Masyarakat - Website",
    username: "",
    description: "Website to report problems from the community",
    icon: "website",
    buttonTitle: "Kunjungi",
    buttonSecondaryText: "",
    buttonLink: "javascript:void(0",
    color: "#070707",
  },
  {
    layout: "1x2",
    type: "social",
    title: "Gondes Education - Website",
    username: "",
    description: "Website for places to study RPL majors",
    icon: "website",
    buttonTitle: "Kunjungi",
    buttonSecondaryText: "",
    buttonLink: "https://www.linkedin.com/in/riovaldorahman/details/projects/urn:li:fsd_profileProject:(ACoAADxJDlcBdnGNaEonaJUYw2ySyrHdakVbcF8,1915684215)/treasury/",
    color: "#070707",
  },
  // {
  //   layout: "2x2",
  //   type: "skills",
  //   title: "Skills",
  // },
];

export const siteConfig = {
  creator: "Riovaldo Alfiyan Fahmi Rahman",
  title: "UI/UX Designer",
  bio: "UI/UX Designer and Front-End",
  location: "Indonesia",
  locationLink: "",
  email: "kazekaito.contact@@gmail.com",
  items: GridItems,
  itemsLower: GridItemsLower,
} as const;

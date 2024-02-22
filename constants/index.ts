export const bottombarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "Search",
  },
  {
    imgURL: "/assets/create.svg",
    route: "/create-hack",
    label: "Create Hack",
  },
  {
    imgURL: "/assets/community.svg",
    route: "/communities",
    label: "Communities",
  },
  {
    imgURL: "/assets/store.svg",
    route: "/hackstore",
    label: "HackStore",
  },
  {
    imgURL: "/assets/message.svg",
    route: "/hackchat",
    label: "HackChat",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profile",
  },
];
export const sidebarLinks = [
  {
    imgURL: "/assets/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/assets/search.svg",
    route: "/search",
    label: "Search",
  },
  {
    imgURL: "/assets/create.svg",
    route: "/create-hack",
    label: "Create Hack",
  },
  {
    imgURL: "/assets/community.svg",
    route: "/communities",
    label: "Communities",
  },
  {
    imgURL: "/assets/store.svg",
    route: `/404`,
    label: "HackStore",
  },
  {
    imgURL: "/assets/message.svg",
    route: "/hackchat",
    label: "HackChat",
  },
  {
    imgURL: "/assets/storage.svg",
    route: "https://container-hackhubb.netlify.app/",
    label: "File Storage",
  },
  {
    imgURL: "/assets/admin.svg",
    route: "https://admin-hackhubb.netlify.app/",
    label: "Admin",
  },
  {
    imgURL: "/assets/collabe.svg",
    route: "https://hack-hubb-board.vercel.app/",
    label: "Collabe",
  },
  {
    imgURL: "/assets/user.svg",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/guide.svg",
    route: `https://hackhubb-docs.netlify.app/`,
    label: "Guide",
  },
];

export const profileTabs = [
  { value: "hacks", label: "Hacks", icon: "/assets/reply.svg" },
  { value: "liked", label: "Liked Hack", icon: "/assets/heart-gray.svg" },
  { value: "saved", label: "Saved Hack", icon: "/assets/tag.svg" },
];

export const communityTabs = [
  { value: "hacks", label: "Hacks", icon: "/assets/reply.svg" },
  { value: "members", label: "Members", icon: "/assets/members.svg" },
  { value: "requests", label: "Requests", icon: "/assets/request.svg" },
];

export const formatPrice = (price: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "INR",
  }).format(price);
};

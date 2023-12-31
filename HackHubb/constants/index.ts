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
    imgURL: "/assets/search.png",
    route: "/search",
    label: "Search",
  },
  {
    imgURL: "/assets/create.png",
    route: "/create-hack",
    label: "Create Hack",
  },
  {
    imgURL: "/assets/community.svg",
    route: "/communities",
    label: "Communities",
  },
  {
    imgURL: "/assets/store.png",
    route: `/`,
    label: "HackStore",
  },
  {
    imgURL: "/assets/message.png",
    route: "/hackchat",
    label: "HackChat",
  },
  {
    imgURL: "/assets/storage.png",
    route: "/storage",
    label: "File Storage",
  },
  {
    imgURL: "/assets/user.png",
    route: "/profile",
    label: "Profile",
  },
  {
    imgURL: "/assets/guide.png",
    route: `/`,
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

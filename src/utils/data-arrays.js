import IMAGES from "./assets";

//NAVBAR
export const NavLists = [
    {
        id:1,
        name:"Home",
        link:"/"
    },
     {
        id:2,
        name:"Listings",
        link:"/listings"
    },

     {
        id:4,
        name:"Buy",
        link:"/buy"
    },
     {
        id:5,
        name:"Sell",
        link:"/sell"
    }
]

export const Features = [
  {
    id: 1,
    img: IMAGES.Insuarnce,
    heading: "Property Insurance",
    paragraph:
      "We offer our customer property protection of liability coverage and insurance for their better life.",
  },
  {
    id: 2,
    img: IMAGES.Price,
    heading: "Best Price",
    paragraph:
      "Not sure what  you should be charging for your property? No need to worry, let us do the numbers for you.",
  },
  {
    id: 3,
    img: IMAGES.Commission,
    heading: "Lowest Commission",
    paragraph:
      "You no longer have to negotiate commissions and haggle with other agents it only cost 2%!",
  },
  {
    id: 4,
    img: IMAGES.Control,
    heading: "Overall Control",
    paragraph:
      "Get a virtual tour, and schedule visits before you rent or buy any properties. You get overall control.",
  },
];

export const Listing = [
  {
    id:1,
    img:IMAGES.House1,
    name:"Palm Harbor",
    price:"2,095",
    address:"2699 Green Valley, Highland Lake, FL",
    beds:3,
    bathrooms:2,
    area:"5x8",
    popular:true,
    avaliable:true
  },
  {
    id:2,
    img:IMAGES.House2,
    name:"Beverly Springfield",
    price:"2,700",
    address:"2821 Lake Sevilla, Palm Harbor, TX",
    beds:4,
    bathrooms:2,
    area:"6x7.5",
    popular:true,
    avaliable:true,
  },
  {
    id:3,
    img:IMAGES.House3,
    name:"Faulkner Ave",
    price:"4,500",
    address:"909 Woodland St, Michigan, IN",
    beds:4,
    bathrooms:3,
    area:"8x10",
    popular:true,
    avaliable:true
  },
  {
    id:4,
    img:IMAGES.House4,
    name:"St. Crystal",
    price:"2400",
    address:"210 US Highway, Highland Lake, FL",
    beds:4,
    bathrooms:2,
    area:"6X8",
    popular:false,
    avaliable:true
  },
  {
    id:5,
    img:IMAGES.House5,
    name:"Cove Red",
    price:"1,500",
    address:"243 Curlew Road, Palm Harbor, TX",
    beds:2,
    bathrooms:1,
    area:"5x7.5",
    popular:false,
    avaliable:true,
  },
  {
    id:6,
    img:IMAGES.House6,
    name:"Tarpon Bay",
    price:"1,600",
    address:"103 Lake Shores, Michigan, IN",
    beds:3,
    bathrooms:1,
    area:"5x7",
    popular:false,
    avaliable:false
  }
  
] 

export const FooterLinks = [
  {
    id:1,
    title:"sell a home",
    list:["Request an offer", "Pricing","reviews","stories"]
  },
  {
    id:2,
    title:"Buy, rent and sell",
    list:["buy and sell properties", "rent home","builder trade-up"]
  },
  {
    id:3,
    title:"about",
    list:["company", "how it works","contact","investors"]
  },
  {
    id:4,
    title:"buy a home",
    list:[" buy", "finance"]
  },
  {
    id:5,
    title:"terms & privacy",
    list:["trust & safety", "terms of services", "privacy polic"]
  },
  {
    id:6,
    title:"resources",
    list:["blog", "guides","faq","help center"]
  }

]
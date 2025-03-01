const products = [
  {
    id: 1,
    name: "Netflix 1 User - 1 Hari",
    price: 3000,
    originalPrice: 5000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg",
    description: " "
  },
  {
    id: 2,
    name: "Netflix 1 User - 3 Hari",
    price: 6500,
    originalPrice: 10000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg",
    description: " "
  },
  {
    id: 3,
    name: "Netflix 1 User - 7 Hari",
    price: 10000,
    originalPrice: 15000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg",
    description: " "
  },
  {
    id: 4,
    name: "Netflix 1 User - 1 Bulan",
    price: 28000,
    originalPrice: 40000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg",
    description: " "
  },
  {
    id: 5,
    name: "Netflix Semi Private - 7 Hari",
    price: 16000,
    originalPrice: 20000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg",
    description: " "
  },
  {
    id: 6,
    name: "Netflix Semi Private - 1 Bulan",
    price: 36000,
    originalPrice: 50000,
    category: "Netflix",
    image: "https://static.vecteezy.com/ti/vecteur-libre/p3/14018571-logo-netflix-sur-fond-transparent-gratuit-vectoriel.jpg",
    description: "Netflix 1user maximal login 1 device, Netflix semi private max login 2 device gaboleh nonton barengan, email dari seller, gaboleh jail & pastikan order pakai akun utama!! akun bodong skip."
  },
  {
    id: 7,
    name: "Vidio Platinum - 1 Bulan Sharing 2u",
    price: 15000,
    originalPrice: 20000,
    category: "Vidio",
    image: "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/vidio-logo-freelogovectors.net_.png",
    description: " "
  },
  {
    id: 8,
    name: "Vidio Platinum - 1 Bulan Private",
    price: 25000,
    originalPrice: 35000,
    category: "Vidio",
    image: "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/vidio-logo-freelogovectors.net_.png",
    description: " "
  },
  {
    id: 9,
    name: "Vidio Platinum - 7 Hari Private",
    price: 12000,
    originalPrice: 15000,
    category: "Vidio",
    image: "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/vidio-logo-freelogovectors.net_.png",
    description: " "
  },
  {
    id: 10,
    name: "Vidio Platinum - 7 Hari Sharing",
    price: 7000,
    originalPrice: 10000,
    category: "Vidio",
    image: "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/vidio-logo-freelogovectors.net_.png",
    description: " "
  },
  {
    id: 11,
    name: "Vidio Platinum - Mobile Private",
    price: 15000,
    originalPrice: 20000,
    category: "Vidio",
    image: "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/vidio-logo-freelogovectors.net_.png",
    description: " "
  },
  {
    id: 12,
    name: "Vidio Diamond - 1 Bulan Sharing 2u",
    price: 25000,
    originalPrice: 35000,
    category: "Vidio",
    image: "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/vidio-logo-freelogovectors.net_.png",
    description: " "
  },
  {
    id: 13,
    name: "Vidio Diamond - 1 Bulan Private",
    price: 45000,
    originalPrice: 60000,
    category: "Vidio",
    image: "https://cdn.freelogovectors.net/wp-content/uploads/2021/12/vidio-logo-freelogovectors.net_.png",
    description: "private boleh email dari customer & request sandi limit screen VIDIO hanya 1user jadi harus gantian jika sharing, dilarang complain limit screen perbedaan paket boleh tanyakan di roomchat @catcihy"
  },
  {
    id: 14,
    name: "Vision+ Premium - 1 Bulan Sharing 2u",
    price: 15000,
    originalPrice: 20000,
    category: "Vision+",
    image: "https://www.visionplustv.id/_nuxt/img/set-top-box-clean.4742a46.png",
    description: "  "
  },
  {
    id: 15,
    name: "Vision+ Premium - 1 Bulan Private",
    price: 28000,
    originalPrice: 35000,
    category: "Vision+",
    image: "https://www.visionplustv.id/_nuxt/img/set-top-box-clean.4742a46.png",
    description: "   "
  },
  {
    id: 16,
    name: "Vision+ Premium - 7 Hari Private",
    price: 15000,
    originalPrice: 20000,
    category: "Vision+",
    image: "https://www.visionplustv.id/_nuxt/img/set-top-box-clean.4742a46.png",
    description: "Vision+ premium ✿\nHanya untuk menonton Timnas, tidak bisa untuk film/drama."
  },
  {
    id: 17,
    name: "RCTI+ Premium - 1 Bulan Sharing 2u",
    price: 15000,
    originalPrice: 20000,
    category: "RCTI+",
    image: "https://th.bing.com/th/id/OIP.1yUrDqx5Wn8z_9GV-70fSAHaEl?rs=1&pid=ImgDetMain",
    description: "  "
  },
  {
    id: 18,
    name: "RCTI+ Premium - 1 Bulan Private",
    price: 22000,
    originalPrice: 30000,
    category: "RCTI+",
    image: "https://th.bing.com/th/id/OIP.1yUrDqx5Wn8z_9GV-70fSAHaEl?rs=1&pid=ImgDetMain",
    description: "  "
  },
  {
    id: 19,
    name: "RCTI+ Premium - 7 Hari Private",
    price: 15000,
    originalPrice: 20000,
    category: "RCTI+",
    image: "https://th.bing.com/th/id/OIP.1yUrDqx5Wn8z_9GV-70fSAHaEl?rs=1&pid=ImgDetMain",
    description: "  "
  },
  {
    id: 20,
    name: "Youtube Famplan - 1 Bulan",
    price: 5000,
    originalPrice: 8000,
    category: "Youtube",
    image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/09/youtube-official-website-1663335361.jpg",
    description: "  "
  },
  {
    id: 21,
    name: "Youtube Famplan - 2 Bulan",
    price: 8000,
    originalPrice: 12000,
    category: "Youtube",
    image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/09/youtube-official-website-1663335361.jpg",
    description: "  "
  },
  {
    id: 22,
    name: "Youtube Indplan - 1 Bulan",
    price: 8000,
    originalPrice: 12000,
    category: "Youtube",
    image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/09/youtube-official-website-1663335361.jpg",
    description: "  "
  },
  {
    id: 23,
    name: "Youtube Indplan - 3 Bulan (Nogar)",
    price: 18000,
    originalPrice: 25000,
    category: "Youtube",
    image: "https://resize.indiatvnews.com/en/resize/newbucket/1200_-/2022/09/youtube-official-website-1663335361.jpg",
    description: "famplan akun cust, indplan akun seller"
  },
  {
    id: 24,
    name: "Capcut Sharing - 1 Hari",
    price: 1500,
    originalPrice: 3000,
    category: "Capcut",
    image: "https://th.bing.com/th/id/OIP.7UVP9u44oRNHKQGrH8UpsAAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    description: " "
  },
  {
    id: 25,
    name: "Capcut Sharing - 3 Hari",
    price: 3000,
    originalPrice: 6000,
    category: "Capcut",
    image: "https://th.bing.com/th/id/OIP.7UVP9u44oRNHKQGrH8UpsAAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    description: "  "
  },
  {
    id: 26,
    name: "Capcut Sharing - 7 Hari",
    price: 4500,
    originalPrice: 8000,
    category: "Capcut",
    image: "https://th.bing.com/th/id/OIP.7UVP9u44oRNHKQGrH8UpsAAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    description: " "
  },
  {
    id: 27,
    name: "Capcut Sharing - 15 Hari",
    price: 9000,
    originalPrice: 15000,
    category: "Capcut",
    image: "https://th.bing.com/th/id/OIP.7UVP9u44oRNHKQGrH8UpsAAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    description: " "
  },
  {
    id: 28,
    name: "Capcut Private - 1 Hari",
    price: 3000,
    originalPrice: 6000,
    category: "Capcut",
    image: "https://th.bing.com/th/id/OIP.7UVP9u44oRNHKQGrH8UpsAAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    description: " "
  },
  {
    id: 29,
    name: "Capcut Private - 3 Hari",
    price: 6500,
    originalPrice: 10000,
    category: "Capcut",
    image: "https://th.bing.com/th/id/OIP.7UVP9u44oRNHKQGrH8UpsAAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    description: " "
  },
  {
    id: 30,
    name: "Capcut Private - 7 Hari",
    price: 10000,
    originalPrice: 18000,
    category: "Capcut",
    image: "https://th.bing.com/th/id/OIP.7UVP9u44oRNHKQGrH8UpsAAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    description: " "
  },
  {
    id: 31,
    name: "Capcut Private - 15 Hari",
    price: 18000,
    originalPrice: 30000,
    category: "Capcut",
    image: "https://th.bing.com/th/id/OIP.7UVP9u44oRNHKQGrH8UpsAAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    description: " "
  },
  {
    id: 32,
    name: "Capcut Private - 1 Bulan",
    price: 65000,
    originalPrice: 100000,
    category: "Capcut",
    image: "https://th.bing.com/th/id/OIP.7UVP9u44oRNHKQGrH8UpsAAAAA?w=300&h=300&rs=1&pid=ImgDetMain",
    description: "capcut private boleh pakai email cust"
  },
  {
    id: 33,
    name: "Alight Motion Private - 1 Bulan",
    price: 5000,
    originalPrice: 10000,
    category: "AlightMotion",
    image: "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/97/12/ee/9712eec9-2cd1-e244-7de1-26c5e351bec0/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.png",
    description: " "
  },
  {
    id: 34,
    name: "Alight Motion Private - 3 Bulan",
    price: 10000,
    originalPrice: 18000,
    category: "AlightMotion",
    image: "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/97/12/ee/9712eec9-2cd1-e244-7de1-26c5e351bec0/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.png",
    description: " "
  },
  {
    id: 35,
    name: "Alight Motion Private - 1 Tahun",
    price: 15000,
    originalPrice: 25000,
    category: "AlightMotion",
    image: "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/97/12/ee/9712eec9-2cd1-e244-7de1-26c5e351bec0/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.png",
    description: " "
  },
  {
    id: 36,
    name: "Alight Motion Sharing - 1 Bulan",
    price: 4000,
    originalPrice: 7000,
    category: "AlightMotion",
    image: "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/97/12/ee/9712eec9-2cd1-e244-7de1-26c5e351bec0/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.png",
    description: " "
  },
  {
    id: 37,
    name: "Alight Motion Sharing - 1 Tahun",
    price: 6000,
    originalPrice: 12000,
    category: "AlightMotion",
    image: "https://is2-ssl.mzstatic.com/image/thumb/Purple114/v4/97/12/ee/9712eec9-2cd1-e244-7de1-26c5e351bec0/AppIcon-0-0-1x_U007emarketing-0-0-0-4-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/1024x1024bb.png",
    description: " "
  }
];

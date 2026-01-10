export interface Product {
  id: number;
  slug: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  heroImage: string;
  images: string[];
  turnaround: string;
  features: string[];
  specifications: {
    name: string;
    options: string[];
  }[];
  pricing: {
    quantity: string;
    price: string;
  }[];
  relatedProducts: {
    slug: string;
    name: string;
  }[];
}

export const products: Product[] = [
  {
    id: 1,
    slug: "business-cards",
    name: "Business Cards",
    category: "Business Stationery",
    tagline: "Make a lasting first impression with premium business cards",
    description: "Professional business cards printed on high-quality cardstock with various finishing options. Choose from standard, premium, or luxury finishes to match your brand. Our business cards are designed to make an impact and help you stand out in any professional setting.",
    heroImage: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    ],
    turnaround: "2-3 business days",
    features: [
      "Multiple paper stock options (14pt, 16pt, 18pt)",
      "Matte, glossy, or soft-touch lamination",
      "Spot UV, embossing, or foil stamping available",
      "Standard size (3.5\" x 2\") or custom sizes",
      "Full-color printing on both sides",
      "Rounded corners available",
    ],
    specifications: [
      {
        name: "Sizes",
        options: [
          "Standard: 3.5\" x 2\" (89mm x 51mm)",
          "European: 85mm x 55mm",
          "Square: 2.5\" x 2.5\"",
          "Custom sizes available",
        ],
      },
      {
        name: "Paper Stock",
        options: [
          "14pt Cardstock (Standard)",
          "16pt Cardstock (Premium)",
          "18pt Cardstock (Luxury)",
          "24pt Silk Laminated",
          "Textured Linen",
          "Recycled Stock",
        ],
      },
      {
        name: "Finishing Options",
        options: [
          "Matte Lamination",
          "Gloss Lamination",
          "Soft-touch Lamination",
          "Spot UV Coating",
          "Foil Stamping (Gold/Silver)",
          "Embossing/Debossing",
        ],
      },
      {
        name: "Corners",
        options: [
          "Square Corners",
          "Rounded Corners (3mm)",
          "Rounded Corners (5mm)",
        ],
      },
    ],
    pricing: [
      { quantity: "250", price: "PKR 3,000 - 5,000" },
      { quantity: "500", price: "PKR 5,000 - 8,000" },
      { quantity: "1000", price: "PKR 8,000 - 12,000" },
      { quantity: "2000", price: "PKR 14,000 - 20,000" },
    ],
    relatedProducts: [
      { slug: "letterheads", name: "Letterheads" },
      { slug: "envelopes", name: "Envelopes" },
      { slug: "folders", name: "Presentation Folders" },
    ],
  },
  {
    id: 2,
    slug: "brochures",
    name: "Brochures",
    category: "Marketing Materials",
    tagline: "Showcase your business with professionally designed brochures",
    description: "High-quality brochures perfect for marketing campaigns, product catalogs, and company presentations. Available in various sizes, paper stocks, and folding options. Our brochures help you communicate your message effectively and leave a lasting impression.",
    heroImage: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1598901405737-eb5ed732f33d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?w=400&h=300&fit=crop",
    ],
    turnaround: "3-5 business days",
    features: [
      "Multiple folding options (bi-fold, tri-fold, z-fold)",
      "Various sizes from A4 to A5",
      "Premium paper stocks available",
      "Full-color printing",
      "Matte or gloss lamination",
      "Custom design services available",
    ],
    specifications: [
      {
        name: "Sizes",
        options: [
          "A4 (297mm x 210mm)",
          "A5 (210mm x 148mm)",
          "Letter (11\" x 8.5\")",
          "Custom sizes available",
        ],
      },
      {
        name: "Fold Options",
        options: [
          "Bi-fold (Half fold)",
          "Tri-fold (Letter fold)",
          "Z-fold (Accordion fold)",
          "Gate fold",
          "Roll fold",
        ],
      },
      {
        name: "Paper Stock",
        options: [
          "100gsm Gloss Art Paper",
          "128gsm Gloss Art Paper",
          "150gsm Gloss Art Paper",
          "170gsm Matt Art Paper",
          "200gsm Matt Art Paper",
          "250gsm Cardstock",
        ],
      },
      {
        name: "Finishing",
        options: [
          "Matte Lamination",
          "Gloss Lamination",
          "Spot UV",
          "Embossing",
          "Foil Stamping",
        ],
      },
    ],
    pricing: [
      { quantity: "100", price: "PKR 8,000 - 12,000" },
      { quantity: "250", price: "PKR 15,000 - 22,000" },
      { quantity: "500", price: "PKR 25,000 - 35,000" },
      { quantity: "1000", price: "PKR 40,000 - 60,000" },
    ],
    relatedProducts: [
      { slug: "flyers", name: "Flyers" },
      { slug: "catalogs", name: "Catalogs" },
      { slug: "folders", name: "Presentation Folders" },
    ],
  },
  {
    id: 3,
    slug: "flyers",
    name: "Flyers",
    category: "Marketing Materials",
    tagline: "Eye-catching flyers that grab attention and drive action",
    description: "Vibrant, high-impact flyers perfect for promotions, events, and announcements. Available in various sizes with fast turnaround times. Our flyers are printed on quality paper stock to ensure your message stands out.",
    heroImage: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1598901405737-eb5ed732f33d?w=400&h=300&fit=crop",
    ],
    turnaround: "1-2 business days",
    features: [
      "Quick turnaround available",
      "Single or double-sided printing",
      "Various sizes from A6 to A3",
      "High-quality digital or offset printing",
      "Matte or gloss finish",
      "Bulk discounts available",
    ],
    specifications: [
      {
        name: "Sizes",
        options: [
          "A6 (148mm x 105mm)",
          "A5 (210mm x 148mm)",
          "A4 (297mm x 210mm)",
          "A3 (420mm x 297mm)",
          "Custom sizes",
        ],
      },
      {
        name: "Paper Stock",
        options: [
          "80gsm Bond Paper",
          "100gsm Gloss Art Paper",
          "128gsm Gloss Art Paper",
          "150gsm Gloss Art Paper",
          "170gsm Matt Art Paper",
        ],
      },
      {
        name: "Printing",
        options: [
          "Single-sided",
          "Double-sided",
          "Full color (CMYK)",
        ],
      },
      {
        name: "Finish",
        options: [
          "No lamination",
          "Matte lamination",
          "Gloss lamination",
        ],
      },
    ],
    pricing: [
      { quantity: "100", price: "PKR 2,000 - 3,500" },
      { quantity: "250", price: "PKR 4,000 - 6,000" },
      { quantity: "500", price: "PKR 6,500 - 10,000" },
      { quantity: "1000", price: "PKR 10,000 - 15,000" },
    ],
    relatedProducts: [
      { slug: "brochures", name: "Brochures" },
      { slug: "posters", name: "Posters" },
      { slug: "business-cards", name: "Business Cards" },
    ],
  },
  {
    id: 4,
    slug: "posters",
    name: "Posters",
    category: "Large Format",
    tagline: "Large format posters that make a big impact",
    description: "Professional posters for advertising, events, and promotions. Available in various sizes from small to billboard-sized prints. Our posters are printed using high-quality large format printers to ensure vibrant colors and sharp details.",
    heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=400&h=300&fit=crop",
    ],
    turnaround: "2-4 business days",
    features: [
      "Large format printing up to 10ft wide",
      "Indoor and outdoor materials",
      "UV-resistant inks for durability",
      "Matte or gloss finish",
      "Mounting and lamination available",
      "Weather-proof options",
    ],
    specifications: [
      {
        name: "Sizes",
        options: [
          "A3 (420mm x 297mm)",
          "A2 (594mm x 420mm)",
          "A1 (841mm x 594mm)",
          "A0 (1189mm x 841mm)",
          "Custom sizes up to 10ft wide",
        ],
      },
      {
        name: "Materials",
        options: [
          "Photo Paper (Indoor)",
          "Gloss Art Paper",
          "Vinyl (Outdoor)",
          "Canvas",
          "Backlit Film",
          "Mesh Banner",
        ],
      },
      {
        name: "Finishing",
        options: [
          "No finishing",
          "Matte lamination",
          "Gloss lamination",
          "Foam board mounting",
          "Frame mounting",
          "Grommets for hanging",
        ],
      },
      {
        name: "Usage",
        options: [
          "Indoor display",
          "Outdoor advertising",
          "Trade show displays",
          "Retail promotions",
        ],
      },
    ],
    pricing: [
      { quantity: "1", price: "PKR 1,500 - 3,000" },
      { quantity: "5", price: "PKR 6,000 - 12,000" },
      { quantity: "10", price: "PKR 10,000 - 20,000" },
      { quantity: "25", price: "PKR 20,000 - 40,000" },
    ],
    relatedProducts: [
      { slug: "banners", name: "Banners" },
      { slug: "flyers", name: "Flyers" },
      { slug: "stickers", name: "Stickers" },
    ],
  },
  {
    id: 5,
    slug: "banners",
    name: "Banners",
    category: "Large Format",
    tagline: "Durable banners for events and advertising",
    description: "Weather-resistant banners perfect for outdoor events, trade shows, and storefronts. Available in various sizes with mounting options. Our banners are built to last and maintain vibrant colors even in harsh weather conditions.",
    heroImage: "https://images.unsplash.com/photo-1487260211189-670c54da558d?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1487260211189-670c54da558d?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=400&h=300&fit=crop",
    ],
    turnaround: "3-5 business days",
    features: [
      "Weather-resistant materials",
      "UV-resistant printing",
      "Reinforced edges and grommets",
      "Indoor and outdoor options",
      "Custom sizes available",
      "Hemmed edges for durability",
    ],
    specifications: [
      {
        name: "Sizes",
        options: [
          "2ft x 4ft",
          "3ft x 6ft",
          "4ft x 8ft",
          "5ft x 10ft",
          "Custom sizes available",
        ],
      },
      {
        name: "Materials",
        options: [
          "13oz Vinyl Banner",
          "18oz Vinyl Banner (Heavy duty)",
          "Mesh Banner (Wind resistant)",
          "Fabric Banner (Indoor)",
          "Backlit Banner Material",
        ],
      },
      {
        name: "Finishing",
        options: [
          "Hemmed edges",
          "Grommets every 2ft",
          "Pole pockets",
          "Wind slits",
          "Rope included",
        ],
      },
      {
        name: "Applications",
        options: [
          "Outdoor advertising",
          "Trade show displays",
          "Event signage",
          "Retail storefronts",
          "Construction sites",
        ],
      },
    ],
    pricing: [
      { quantity: "1", price: "PKR 3,000 - 6,000" },
      { quantity: "3", price: "PKR 8,000 - 15,000" },
      { quantity: "5", price: "PKR 12,000 - 22,000" },
      { quantity: "10", price: "PKR 20,000 - 35,000" },
    ],
    relatedProducts: [
      { slug: "posters", name: "Posters" },
      { slug: "custom-boxes", name: "Custom Boxes" },
      { slug: "stickers", name: "Stickers" },
    ],
  },
  {
    id: 6,
    slug: "custom-boxes",
    name: "Custom Boxes",
    category: "Packaging",
    tagline: "Custom packaging boxes designed for your products",
    description: "Tailored packaging boxes for any product, any size. Perfect for e-commerce, retail, and special occasions. Our custom boxes can be designed to match your brand and protect your products during shipping and display.",
    heroImage: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1607083207346-cd82f4fe8e0a?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?w=400&h=300&fit=crop",
    ],
    turnaround: "7-10 business days",
    features: [
      "Fully customizable size and design",
      "Various material options",
      "Full-color printing inside and out",
      "Matte or gloss lamination",
      "Die-cut windows available",
      "Eco-friendly material options",
    ],
    specifications: [
      {
        name: "Box Types",
        options: [
          "Mailer Boxes (E-commerce)",
          "Rigid Boxes (Luxury)",
          "Folding Cartons",
          "Corrugated Boxes",
          "Two-piece Boxes",
          "Sleeve Boxes",
        ],
      },
      {
        name: "Materials",
        options: [
          "Cardboard (Various thicknesses)",
          "Corrugated Board",
          "Kraft Paper",
          "Rigid Board",
          "Recycled Materials",
        ],
      },
      {
        name: "Printing",
        options: [
          "Digital printing (short runs)",
          "Offset printing (large runs)",
          "Inside printing available",
          "Spot UV coating",
          "Foil stamping",
          "Embossing/Debossing",
        ],
      },
      {
        name: "Finishing",
        options: [
          "Matte lamination",
          "Gloss lamination",
          "Soft-touch lamination",
          "Die-cut windows",
          "Magnetic closure",
          "Ribbon attachments",
        ],
      },
    ],
    pricing: [
      { quantity: "100", price: "PKR 12,000 - 25,000" },
      { quantity: "250", price: "PKR 25,000 - 50,000" },
      { quantity: "500", price: "PKR 45,000 - 85,000" },
      { quantity: "1000", price: "PKR 80,000 - 150,000" },
    ],
    relatedProducts: [
      { slug: "stickers", name: "Stickers" },
      { slug: "tissue-paper", name: "Tissue Paper" },
      { slug: "shopping-bags", name: "Shopping Bags" },
    ],
  },
  {
    id: 7,
    slug: "stickers",
    name: "Stickers & Labels",
    category: "Packaging",
    tagline: "Custom stickers and labels for every need",
    description: "High-quality stickers and labels for branding, packaging, and promotions. Available in various shapes, sizes, and materials. Perfect for product labeling, promotional giveaways, and brand visibility.",
    heroImage: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1594822863784-24d92e556e39?w=400&h=300&fit=crop",
    ],
    turnaround: "3-5 business days",
    features: [
      "Any shape and size",
      "Waterproof materials available",
      "Permanent or removable adhesive",
      "Die-cut or kiss-cut options",
      "Matte, gloss, or transparent finish",
      "Food-safe materials available",
    ],
    specifications: [
      {
        name: "Materials",
        options: [
          "White Vinyl (Waterproof)",
          "Clear Vinyl (Transparent)",
          "Paper (Matte or Gloss)",
          "Metallic Vinyl",
          "Holographic Vinyl",
          "Food-safe materials",
        ],
      },
      {
        name: "Shapes",
        options: [
          "Circle/Oval",
          "Square/Rectangle",
          "Custom die-cut shape",
          "Kiss-cut (individual)",
          "Sheet format",
        ],
      },
      {
        name: "Sizes",
        options: [
          "Small (1\" - 2\")",
          "Medium (2\" - 4\")",
          "Large (4\" - 6\")",
          "Extra Large (6\"+)",
          "Custom sizes",
        ],
      },
      {
        name: "Finish",
        options: [
          "Gloss lamination",
          "Matte lamination",
          "No lamination",
          "Clear overlay (extra protection)",
        ],
      },
    ],
    pricing: [
      { quantity: "100", price: "PKR 2,500 - 5,000" },
      { quantity: "250", price: "PKR 5,000 - 10,000" },
      { quantity: "500", price: "PKR 8,000 - 15,000" },
      { quantity: "1000", price: "PKR 12,000 - 22,000" },
    ],
    relatedProducts: [
      { slug: "custom-boxes", name: "Custom Boxes" },
      { slug: "shopping-bags", name: "Shopping Bags" },
      { slug: "tissue-paper", name: "Tissue Paper" },
    ],
  },
  {
    id: 8,
    slug: "letterheads",
    name: "Letterheads",
    category: "Business Stationery",
    tagline: "Professional letterheads for official correspondence",
    description: "Premium letterheads that add professionalism to your business correspondence. Printed on high-quality paper with your brand elements. Perfect for official letters, invoices, and company communications.",
    heroImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&h=600&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400&h=300&fit=crop",
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=300&fit=crop",
    ],
    turnaround: "2-3 business days",
    features: [
      "Printed on premium bond paper",
      "Single or double-sided printing",
      "Full-color or spot color options",
      "Watermark available",
      "Multiple paper weights",
      "Matching envelopes available",
    ],
    specifications: [
      {
        name: "Sizes",
        options: [
          "A4 (297mm x 210mm)",
          "Letter (11\" x 8.5\")",
          "Legal (14\" x 8.5\")",
          "Custom sizes",
        ],
      },
      {
        name: "Paper Stock",
        options: [
          "80gsm Bond Paper",
          "100gsm Bond Paper",
          "120gsm Bond Paper",
          "Watermarked Paper",
          "Textured Linen",
          "Laid Finish Paper",
        ],
      },
      {
        name: "Printing",
        options: [
          "Single-sided",
          "Double-sided",
          "Full color (CMYK)",
          "Spot color (Pantone)",
        ],
      },
      {
        name: "Additional Options",
        options: [
          "Custom watermark",
          "Security features",
          "Perforation",
          "Numbering",
        ],
      },
    ],
    pricing: [
      { quantity: "100", price: "PKR 2,500 - 4,000" },
      { quantity: "250", price: "PKR 5,000 - 8,000" },
      { quantity: "500", price: "PKR 8,000 - 12,000" },
      { quantity: "1000", price: "PKR 14,000 - 20,000" },
    ],
    relatedProducts: [
      { slug: "business-cards", name: "Business Cards" },
      { slug: "envelopes", name: "Envelopes" },
      { slug: "folders", name: "Presentation Folders" },
    ],
  },
];

// This data will be imported from lib/products.ts
export const productCategories = [
  {
    name: "Business Essentials",
    products: [
      {
        slug: "business-cards",
        name: "Business Cards",
        description: "Premium business cards that make lasting impressions",
        startingPrice: "PKR 3,000",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=400&h=300&fit=crop",
      },
      {
        slug: "letterheads",
        name: "Letterheads",
        description: "Professional letterheads for official correspondence",
        startingPrice: "PKR 5,000",
        image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&h=300&fit=crop",
      },
      {
        slug: "envelopes",
        name: "Envelopes",
        description: "Custom printed envelopes in various sizes",
        startingPrice: "PKR 4,000",
        image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?w=400&h=300&fit=crop",
      },
      {
        slug: "folders",
        name: "Presentation Folders",
        description: "Professional folders for documents and proposals",
        startingPrice: "PKR 8,000",
        image: "https://images.unsplash.com/photo-1586281380614-94ca412df0e0?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    name: "Marketing Materials",
    products: [
      {
        slug: "brochures",
        name: "Brochures",
        description: "Eye-catching brochures to showcase your business",
        startingPrice: "PKR 8,000",
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=300&fit=crop",
      },
      {
        slug: "flyers",
        name: "Flyers",
        description: "Attention-grabbing flyers for promotions and events",
        startingPrice: "PKR 5,000",
        image: "https://images.unsplash.com/photo-1561070791-36c11767b26a?w=400&h=300&fit=crop",
      },
      {
        slug: "posters",
        name: "Posters",
        description: "High-impact posters in various sizes",
        startingPrice: "PKR 2,000",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
      },
      {
        slug: "catalogs",
        name: "Catalogs",
        description: "Comprehensive product catalogs",
        startingPrice: "PKR 15,000",
        image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    name: "Large Format",
    products: [
      {
        slug: "banners",
        name: "Banners",
        description: "Durable vinyl banners for indoor and outdoor use",
        startingPrice: "PKR 2,500",
        image: "https://images.unsplash.com/photo-1487260211189-670c54da558d?w=400&h=300&fit=crop",
      },
      {
        slug: "roll-up-banners",
        name: "Roll-Up Banners",
        description: "Portable roll-up banners perfect for events",
        startingPrice: "PKR 8,000",
        image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop",
      },
      {
        slug: "window-graphics",
        name: "Window Graphics",
        description: "Promotional graphics for storefronts",
        startingPrice: "PKR 5,000",
        image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop",
      },
      {
        slug: "wall-graphics",
        name: "Wall Graphics",
        description: "Large-scale wall murals and graphics",
        startingPrice: "PKR 10,000",
        image: "https://images.unsplash.com/photo-1493932484895-752d1471eab5?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    name: "Packaging Products",
    products: [
      {
        slug: "custom-boxes",
        name: "Custom Boxes",
        description: "Tailored packaging boxes for any product",
        startingPrice: "PKR 15,000",
        image: "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=400&h=300&fit=crop",
      },
      {
        slug: "labels",
        name: "Labels & Stickers",
        description: "Custom labels for products and branding",
        startingPrice: "PKR 4,000",
        image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=400&h=300&fit=crop",
      },
      {
        slug: "shopping-bags",
        name: "Shopping Bags",
        description: "Branded shopping bags for retail",
        startingPrice: "PKR 12,000",
        image: "https://images.unsplash.com/photo-1600456899121-68eda5705257?w=400&h=300&fit=crop",
      },
      {
        slug: "food-packaging",
        name: "Food Packaging",
        description: "Food-safe packaging solutions",
        startingPrice: "PKR 10,000",
        image: "https://images.unsplash.com/photo-1610440042657-612c34d95e9f?w=400&h=300&fit=crop",
      },
    ],
  },
  {
    name: "Specialty Items",
    products: [
      {
        slug: "wedding-cards",
        name: "Wedding Cards",
        description: "Elegant wedding invitations and cards",
        startingPrice: "PKR 8,000",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      },
      {
        slug: "calendars",
        name: "Calendars",
        description: "Custom calendars for promotional use",
        startingPrice: "PKR 12,000",
        image: "https://images.unsplash.com/photo-1611003228941-98852ba62227?w=400&h=300&fit=crop",
      },
      {
        slug: "notepads",
        name: "Notepads",
        description: "Branded notepads and writing pads",
        startingPrice: "PKR 6,000",
        image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=400&h=300&fit=crop",
      },
      {
        slug: "certificates",
        name: "Certificates",
        description: "Professional certificates and awards",
        startingPrice: "PKR 5,000",
        image: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=400&h=300&fit=crop",
      },
    ],
  },
];

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductById(id: number): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

// export const productCategoriesExtra = [
//   "All Products",
//   "Business Stationery",
//   "Marketing Materials",
//   "Large Format",
//   "Packaging",
// ];

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
    heroImage: "/images/products/business-cards.jpeg",
    images: [
      "/images/products/brocher1.jpeg",
      "/images/products/brocher2.jpeg",
      "/images/products/visiting-cards.jpeg",
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
    heroImage: "/images/products/brocheer3.jpeg",
    images: [
      "/images/products/brocher4.jpeg",
      "/images/products/food-packaging.jpeg",
      "/images/products/food-packaging2.jpeg",
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
    heroImage: "/images/products/flyers/restaurant-flyer.jpeg",
    images: [
      "/images/products/flyers/restaurant-flyer.jpeg",
      "/images/products/brocher1.jpeg",
      "/images/products/brocheer3.jpeg",
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
    heroImage: "/images/products/posters/mockup-free-T8sQEtAKQs8-unsplash.jpg",
    images: [
      "/images/products/posters/mockup-free-NrzoL8d7RTk-unsplash.jpg",
      "/images/products/posters/mockup-free-V5bFRiqbGFc-unsplash.jpg",
      "/images/products/posters/mockup-free-Ak05ma_UJiQ-unsplash.jpg",
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
    heroImage: "/images/products/roll-up-banners/roll-up-banner-agricultural.jpeg",
    images: [
      "/images/products/roll-up-banners/roll-up-banner-agricultural.jpeg",
      "/images/products/roll-up-banners/roll-up-banner-consulting.jpeg",
      "/images/products/posters/mockup-free-V5bFRiqbGFc-unsplash.jpg",
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
    heroImage: "/images/products/custom-boxes/cosmetic-packaging.jpg",
    images: [
      "/images/products/custom-boxes/cosmetic-packaging.jpg",
      "/images/products/custom-boxes/shipping-boxes.jpg",
      "/images/products/custom-boxes/customerbox-YJmxzGUymzc-unsplash.jpg",
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
    heroImage: "/images/products/stickers/retail-label.jpeg",
    images: [
      "/images/products/stickers/retail-label.jpeg",
      "/images/products/stickers/food-label.jpeg",
      "/images/products/food-packaging/burger-box-branded.jpeg",
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
    heroImage: "/images/products/letterheads/annie-spratt-t6ulw0R0dt8-unsplash.jpg",
    images: [
      "/images/products/letterheads/annie-spratt-t6ulw0R0dt8-unsplash.jpg",
      "/images/products/business-cards.jpeg",
      "/images/products/brocher2.jpeg",
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
  {
    id: 9,
    slug: "envelopes",
    name: "Envelopes",
    category: "Business Stationery",
    tagline: "Custom printed envelopes in various sizes",
    description: "Professional custom printed envelopes that complement your business stationery. Available in various sizes and paper stocks with full-color printing options. Perfect for official correspondence, marketing campaigns, and special events.",
    heroImage: "/images/products/letterheads/annie-spratt-t6ulw0R0dt8-unsplash.jpg",
    images: [
      "/images/products/letterheads/annie-spratt-t6ulw0R0dt8-unsplash.jpg",
      "/images/products/business-cards.jpeg",
      "/images/products/brocher1.jpeg",
    ],
    turnaround: "3-4 business days",
    features: [
      "Multiple sizes available",
      "Window or non-window options",
      "Self-seal or gummed flap",
      "Full-color printing",
      "Various paper stocks",
      "Inside printing available",
    ],
    specifications: [
      {
        name: "Sizes",
        options: [
          "DL (220mm x 110mm)",
          "C5 (229mm x 162mm)",
          "C4 (324mm x 229mm)",
          "#10 (9.5\" x 4.125\")",
          "Custom sizes",
        ],
      },
      {
        name: "Paper Stock",
        options: [
          "80gsm Bond Paper",
          "100gsm Bond Paper",
          "120gsm Textured",
          "Kraft Paper",
          "Linen Finish",
        ],
      },
      {
        name: "Options",
        options: [
          "Window envelope",
          "Non-window",
          "Self-seal closure",
          "Gummed flap",
          "Peel & seal",
        ],
      },
      {
        name: "Printing",
        options: [
          "Full color exterior",
          "Interior printing",
          "Return address printing",
          "Security tint inside",
        ],
      },
    ],
    pricing: [
      { quantity: "100", price: "PKR 2,000 - 3,500" },
      { quantity: "250", price: "PKR 4,000 - 7,000" },
      { quantity: "500", price: "PKR 7,000 - 12,000" },
      { quantity: "1000", price: "PKR 12,000 - 20,000" },
    ],
    relatedProducts: [
      { slug: "letterheads", name: "Letterheads" },
      { slug: "business-cards", name: "Business Cards" },
      { slug: "folders", name: "Presentation Folders" },
    ],
  },
  {
    id: 10,
    slug: "folders",
    name: "Presentation Folders",
    category: "Business Stationery",
    tagline: "Professional folders for documents and proposals",
    description: "High-quality presentation folders designed to organize and showcase your documents professionally. Perfect for proposals, presentations, marketing materials, and corporate documents. Available with various pocket configurations and finishing options.",
    heroImage: "/images/products/folders/student-files.jpeg",
    images: [
      "/images/products/folders/student-files.jpeg",
      "/Branding.jpg",
      "/images/products/business-cards.jpeg",
    ],
    turnaround: "5-7 business days",
    features: [
      "Various pocket configurations",
      "Business card slits available",
      "Gloss or matte lamination",
      "Spot UV coating options",
      "Embossing and foil stamping",
      "Custom die-cut shapes",
    ],
    specifications: [
      {
        name: "Sizes",
        options: [
          "A4 (9\" x 12\" when open)",
          "Letter size (9\" x 12\")",
          "Legal size (9\" x 14.5\")",
          "Custom sizes",
        ],
      },
      {
        name: "Paper Stock",
        options: [
          "14pt Cardstock",
          "16pt Cardstock",
          "18pt Cardstock (Premium)",
          "Textured Stock",
        ],
      },
      {
        name: "Pocket Options",
        options: [
          "Two pockets",
          "Left pocket only",
          "Right pocket only",
          "No pockets",
          "Business card slits",
          "CD/DVD slits",
        ],
      },
      {
        name: "Finishing",
        options: [
          "Gloss lamination",
          "Matte lamination",
          "Spot UV",
          "Foil stamping",
          "Embossing/Debossing",
        ],
      },
    ],
    pricing: [
      { quantity: "50", price: "PKR 5,000 - 8,000" },
      { quantity: "100", price: "PKR 8,000 - 14,000" },
      { quantity: "250", price: "PKR 18,000 - 30,000" },
      { quantity: "500", price: "PKR 32,000 - 55,000" },
    ],
    relatedProducts: [
      { slug: "business-cards", name: "Business Cards" },
      { slug: "letterheads", name: "Letterheads" },
      { slug: "brochures", name: "Brochures" },
    ],
  },
  {
    id: 11,
    slug: "catalogs",
    name: "Catalogs",
    category: "Marketing Materials",
    tagline: "Comprehensive product catalogs",
    description: "Professional product catalogs that showcase your offerings in style. Perfect for retail, wholesale, and B2B businesses. Available in various sizes and binding options with full-color printing throughout.",
    heroImage: "/images/products/brocher1.jpeg",
    images: [
      "/images/products/brocher1.jpeg",
      "/images/products/brocher2.jpeg",
      "/images/products/brocheer3.jpeg",
    ],
    turnaround: "7-10 business days",
    features: [
      "Multiple binding options",
      "Full-color printing",
      "Various page counts available",
      "Custom sizes",
      "Premium paper stocks",
      "Spot UV and special finishes",
    ],
    specifications: [
      {
        name: "Sizes",
        options: [
          "A4 (297mm x 210mm)",
          "A5 (210mm x 148mm)",
          "Letter (11\" x 8.5\")",
          "8.5\" x 11\"",
          "Custom sizes",
        ],
      },
      {
        name: "Binding",
        options: [
          "Saddle stitch",
          "Perfect bound",
          "Wire-O binding",
          "Spiral binding",
          "Case bound (hardcover)",
        ],
      },
      {
        name: "Paper Stock",
        options: [
          "Cover: 250gsm - 350gsm Cardstock",
          "Inside: 128gsm - 170gsm Art Paper",
          "Gloss or Matte finish",
          "Premium coated paper",
        ],
      },
      {
        name: "Page Count",
        options: [
          "8 - 16 pages",
          "20 - 32 pages",
          "36 - 48 pages",
          "52+ pages",
        ],
      },
    ],
    pricing: [
      { quantity: "50", price: "PKR 12,000 - 20,000" },
      { quantity: "100", price: "PKR 20,000 - 35,000" },
      { quantity: "250", price: "PKR 45,000 - 75,000" },
      { quantity: "500", price: "PKR 80,000 - 135,000" },
    ],
    relatedProducts: [
      { slug: "brochures", name: "Brochures" },
      { slug: "flyers", name: "Flyers" },
      { slug: "folders", name: "Presentation Folders" },
    ],
  },
  {
    id: 12,
    slug: "roll-up-banners",
    name: "Roll-Up Banners",
    category: "Large Format",
    tagline: "Portable roll-up banners perfect for events",
    description: "Portable and professional roll-up banners ideal for trade shows, exhibitions, retail displays, and events. Easy to set up and transport with included carrying case. High-quality printing ensures your message stands out.",
    heroImage: "/images/products/roll-up-banners/roll-up-banner-agricultural.jpeg",
    images: [
      "/images/products/roll-up-banners/roll-up-banner-agricultural.jpeg",
      "/images/products/roll-up-banners/roll-up-banner-consulting.jpeg",
      "/images/products/brocheer3.jpeg",
    ],
    turnaround: "3-5 business days",
    features: [
      "Retractable aluminum stand",
      "Easy setup in seconds",
      "Includes carrying case",
      "High-resolution printing",
      "Durable banner material",
      "Replaceable graphics",
    ],
    specifications: [
      {
        name: "Sizes",
        options: [
          "33\" x 79\" (Standard)",
          "39\" x 79\" (Wide)",
          "47\" x 79\" (Extra Wide)",
          "Custom sizes available",
        ],
      },
      {
        name: "Stand Type",
        options: [
          "Retractable (Standard)",
          "Premium Retractable",
          "Deluxe Retractable",
          "Economy Retractable",
        ],
      },
      {
        name: "Material",
        options: [
          "Premium vinyl banner",
          "Fabric banner (wrinkle-free)",
          "Blockout material",
          "Backlit material",
        ],
      },
      {
        name: "Includes",
        options: [
          "Aluminum stand",
          "Carrying case",
          "Printed banner",
          "Setup instructions",
        ],
      },
    ],
    pricing: [
      { quantity: "1", price: "PKR 8,000 - 12,000" },
      { quantity: "3", price: "PKR 22,000 - 33,000" },
      { quantity: "5", price: "PKR 35,000 - 52,000" },
      { quantity: "10", price: "PKR 65,000 - 95,000" },
    ],
    relatedProducts: [
      { slug: "banners", name: "Banners" },
      { slug: "posters", name: "Posters" },
      { slug: "brochures", name: "Brochures" },
    ],
  },
  {
    id: 13,
    slug: "window-graphics",
    name: "Window Graphics",
    category: "Large Format",
    tagline: "Promotional graphics for storefronts",
    description: "Eye-catching window graphics and decals for storefronts, offices, and vehicles. Available in various materials including perforated vinyl for one-way visibility. Perfect for promotions, branding, and privacy.",
    heroImage: "/images/products/posters/mockup-free--tSDSG7QRSg-unsplash.jpg",
    images: [
      "/images/products/posters/mockup-free--tSDSG7QRSg-unsplash.jpg",
      "/images/products/roll-up-banners/roll-up-banner-consulting.jpeg",
      "/images/products/posters/mockup-free-T8sQEtAKQs8-unsplash.jpg",
    ],
    turnaround: "3-5 business days",
    features: [
      "Perforated vinyl (one-way vision)",
      "Full-color printing",
      "UV-resistant inks",
      "Easy application",
      "Removable or permanent adhesive",
      "Custom shapes and sizes",
    ],
    specifications: [
      {
        name: "Materials",
        options: [
          "Perforated vinyl (50/50)",
          "Clear vinyl",
          "White vinyl",
          "Frosted vinyl",
          "Etched glass film",
        ],
      },
      {
        name: "Adhesive Type",
        options: [
          "Permanent adhesive",
          "Removable adhesive",
          "Static cling (no adhesive)",
          "Low-tack adhesive",
        ],
      },
      {
        name: "Application",
        options: [
          "Interior window",
          "Exterior window",
          "Storefront",
          "Vehicle window",
          "Glass doors",
        ],
      },
      {
        name: "Sizes",
        options: [
          "Small (up to 2ft x 3ft)",
          "Medium (2ft x 4ft - 4ft x 6ft)",
          "Large (4ft x 8ft+)",
          "Full window coverage",
          "Custom sizes",
        ],
      },
    ],
    pricing: [
      { quantity: "1", price: "PKR 3,000 - 6,000" },
      { quantity: "5", price: "PKR 12,000 - 25,000" },
      { quantity: "10", price: "PKR 22,000 - 45,000" },
      { quantity: "Custom", price: "Contact for quote" },
    ],
    relatedProducts: [
      { slug: "wall-graphics", name: "Wall Graphics" },
      { slug: "stickers", name: "Stickers" },
      { slug: "banners", name: "Banners" },
    ],
  },
  {
    id: 14,
    slug: "wall-graphics",
    name: "Wall Graphics",
    category: "Large Format",
    tagline: "Large-scale wall murals and graphics",
    description: "Transform your space with stunning wall graphics and murals. Perfect for offices, retail stores, trade show booths, and events. High-quality printing on removable or permanent adhesive vinyl.",
    heroImage: "/images/products/posters/mockup-free-Ak05ma_UJiQ-unsplash.jpg",
    images: [
      "/images/products/posters/mockup-free-Ak05ma_UJiQ-unsplash.jpg",
      "/images/products/roll-up-banners/roll-up-banner-agricultural.jpeg",
      "/images/products/posters/mockup-free-NrzoL8d7RTk-unsplash.jpg",
    ],
    turnaround: "5-7 business days",
    features: [
      "Custom sizes up to full wall",
      "Removable without damage",
      "Easy installation",
      "High-resolution printing",
      "Matte or gloss finish",
      "Installation service available",
    ],
    specifications: [
      {
        name: "Materials",
        options: [
          "Wall vinyl (removable)",
          "Wall vinyl (permanent)",
          "Fabric wall covering",
          "Canvas material",
          "Textured vinyl",
        ],
      },
      {
        name: "Finish",
        options: [
          "Matte finish",
          "Gloss finish",
          "Satin finish",
          "Textured finish",
        ],
      },
      {
        name: "Sizes",
        options: [
          "Small (up to 4ft x 6ft)",
          "Medium (6ft x 8ft - 8ft x 10ft)",
          "Large (8ft x 12ft+)",
          "Full wall coverage",
          "Custom sizes",
        ],
      },
      {
        name: "Applications",
        options: [
          "Office branding",
          "Retail displays",
          "Trade show graphics",
          "Restaurant decor",
          "Event backdrops",
        ],
      },
    ],
    pricing: [
      { quantity: "Small", price: "PKR 8,000 - 15,000" },
      { quantity: "Medium", price: "PKR 15,000 - 30,000" },
      { quantity: "Large", price: "PKR 30,000 - 60,000" },
      { quantity: "Custom", price: "Contact for quote" },
    ],
    relatedProducts: [
      { slug: "window-graphics", name: "Window Graphics" },
      { slug: "banners", name: "Banners" },
      { slug: "posters", name: "Posters" },
    ],
  },
  {
    id: 15,
    slug: "shopping-bags",
    name: "Shopping Bags",
    category: "Packaging",
    tagline: "Branded shopping bags for retail",
    description: "Custom printed shopping bags that extend your brand beyond the store. Available in various materials, sizes, and handle options. Perfect for retail stores, boutiques, and special events.",
    heroImage: "/images/products/shopping-bags/shopping-bag-pattern.jpeg",
    images: [
      "/images/products/shopping-bags/shopping-bag-pattern.jpeg",
      "/images/products/food-packaging.jpeg",
      "/images/products/food-packaging2.jpeg",
    ],
    turnaround: "7-10 business days",
    features: [
      "Multiple material options",
      "Various handle styles",
      "Full-color printing",
      "Reinforced handles",
      "Eco-friendly options",
      "Custom sizes available",
    ],
    specifications: [
      {
        name: "Materials",
        options: [
          "Kraft paper",
          "Art paper (gloss/matte)",
          "Non-woven fabric",
          "Cotton canvas",
          "Jute/Burlap",
          "Plastic (reusable)",
        ],
      },
      {
        name: "Sizes",
        options: [
          "Small (8\" x 10\")",
          "Medium (12\" x 15\")",
          "Large (16\" x 20\")",
          "Extra Large (18\" x 24\")",
          "Custom sizes",
        ],
      },
      {
        name: "Handle Options",
        options: [
          "Twisted paper handles",
          "Flat paper handles",
          "Rope handles",
          "Die-cut handles",
          "Ribbon handles",
          "Cotton web handles",
        ],
      },
      {
        name: "Finishing",
        options: [
          "Gloss lamination",
          "Matte lamination",
          "Spot UV",
          "Foil stamping",
          "Embossing",
        ],
      },
    ],
    pricing: [
      { quantity: "100", price: "PKR 10,000 - 18,000" },
      { quantity: "250", price: "PKR 22,000 - 38,000" },
      { quantity: "500", price: "PKR 40,000 - 70,000" },
      { quantity: "1000", price: "PKR 75,000 - 130,000" },
    ],
    relatedProducts: [
      { slug: "custom-boxes", name: "Custom Boxes" },
      { slug: "stickers", name: "Stickers" },
      { slug: "tissue-paper", name: "Tissue Paper" },
    ],
  },
  {
    id: 16,
    slug: "food-packaging",
    name: "Food Packaging",
    category: "Packaging",
    tagline: "Food-safe packaging solutions",
    description: "Food-safe custom packaging for restaurants, bakeries, cafes, and food businesses. Available in various materials compliant with food safety standards. Perfect for takeout, delivery, and retail food products.",
    heroImage: "/images/products/food-packaging/burger-box-branded.jpeg",
    images: [
      "/images/products/food-packaging/burger-box-packaging.jpeg",
      "/images/products/food-packaging/burger-fries-packaging.jpeg",
      "/images/products/food-packaging/pizza-box-packaging.jpeg",
    ],
    turnaround: "7-10 business days",
    features: [
      "Food-safe certified materials",
      "Grease-resistant options",
      "Microwave safe options",
      "Custom printing available",
      "Eco-friendly alternatives",
      "Various sizes and styles",
    ],
    specifications: [
      {
        name: "Product Types",
        options: [
          "Food boxes & cartons",
          "Pizza boxes",
          "Burger boxes",
          "Bakery boxes",
          "Sandwich wraps",
          "Food containers",
        ],
      },
      {
        name: "Materials",
        options: [
          "Food-grade cardboard",
          "Kraft paper",
          "PE-coated paper",
          "Biodegradable materials",
          "Compostable materials",
          "Plastic (food-safe)",
        ],
      },
      {
        name: "Features",
        options: [
          "Grease-resistant coating",
          "Moisture barrier",
          "Window cutouts",
          "Easy-lock closures",
          "Ventilation holes",
          "Microwave safe",
        ],
      },
      {
        name: "Printing",
        options: [
          "Full-color printing",
          "Single color printing",
          "No printing (plain)",
          "Custom design",
        ],
      },
    ],
    pricing: [
      { quantity: "100", price: "PKR 8,000 - 15,000" },
      { quantity: "250", price: "PKR 18,000 - 32,000" },
      { quantity: "500", price: "PKR 32,000 - 58,000" },
      { quantity: "1000", price: "PKR 60,000 - 110,000" },
    ],
    relatedProducts: [
      { slug: "custom-boxes", name: "Custom Boxes" },
      { slug: "stickers", name: "Stickers & Labels" },
      { slug: "shopping-bags", name: "Shopping Bags" },
    ],
  },
  {
    id: 17,
    slug: "wedding-cards",
    name: "Wedding Cards",
    category: "Specialty Items",
    tagline: "Elegant wedding invitations and cards",
    description: "Beautiful custom wedding invitations and cards for your special day. Available in various designs, sizes, and luxury finishes. From save-the-date cards to thank you notes, we create elegant stationery that sets the perfect tone.",
    heroImage: "/images/products/wedding-cards/wedding-card-nikah-purple.jpeg",
    images: [
      "/images/products/wedding-cards/wedding-card-nikah-purple.jpeg",
      "/images/products/wedding-cards/wedding-card-nikah-maroon.jpeg",
      "/images/products/business-cards.jpeg",
    ],
    turnaround: "7-10 business days",
    features: [
      "Custom design services",
      "Luxury paper stocks",
      "Foil stamping available",
      "Embossing & debossing",
      "Envelope printing included",
      "RSVP cards available",
    ],
    specifications: [
      {
        name: "Card Types",
        options: [
          "Wedding invitations",
          "Save-the-date cards",
          "RSVP cards",
          "Thank you cards",
          "Menu cards",
          "Program cards",
        ],
      },
      {
        name: "Sizes",
        options: [
          "5\" x 7\" (Standard)",
          "4\" x 6\"",
          "5.5\" x 8.5\"",
          "Square (5\" x 5\")",
          "Custom sizes",
        ],
      },
      {
        name: "Paper Stock",
        options: [
          "Premium cardstock (18pt-24pt)",
          "Pearl shimmer paper",
          "Linen textured paper",
          "Cotton paper",
          "Metallic paper",
          "Handmade paper",
        ],
      },
      {
        name: "Finishing",
        options: [
          "Foil stamping (Gold/Silver/Rose)",
          "Embossing/Debossing",
          "Laser cutting",
          "Ribbon attachments",
          "Wax seals",
          "Pocket folds",
        ],
      },
    ],
    pricing: [
      { quantity: "50", price: "PKR 6,000 - 12,000" },
      { quantity: "100", price: "PKR 10,000 - 20,000" },
      { quantity: "150", price: "PKR 14,000 - 28,000" },
      { quantity: "200", price: "PKR 18,000 - 35,000" },
    ],
    relatedProducts: [
      { slug: "envelopes", name: "Envelopes" },
      { slug: "business-cards", name: "Business Cards" },
      { slug: "certificates", name: "Certificates" },
    ],
  },
  {
    id: 18,
    slug: "calendars",
    name: "Calendars",
    category: "Specialty Items",
    tagline: "Custom calendars for promotional use",
    description: "Custom printed calendars perfect for promotional gifts, corporate branding, and year-round marketing. Available in wall calendars, desk calendars, and more. Keep your brand visible every day of the year.",
    heroImage: "/images/products/calendars/desk-calendar.jpeg",
    images: [
      "/images/products/calendars/desk-calendar.jpeg",
      "/images/products/business-cards.jpeg",
      "/images/products/brocher2.jpeg",
    ],
    turnaround: "7-10 business days",
    features: [
      "Wall and desk calendar options",
      "Custom start month",
      "Full-color printing",
      "Various binding options",
      "Custom holidays/dates",
      "Photo calendar options",
    ],
    specifications: [
      {
        name: "Calendar Types",
        options: [
          "Wall calendar (hanging)",
          "Desk calendar",
          "Poster calendar",
          "Magnetic calendar",
          "Tear-off calendar",
          "Booklet calendar",
        ],
      },
      {
        name: "Sizes",
        options: [
          "Wall: 8.5\" x 11\" - 11\" x 17\"",
          "Desk: 5\" x 7\" - 8\" x 10\"",
          "Poster: 18\" x 24\" - 24\" x 36\"",
          "Custom sizes",
        ],
      },
      {
        name: "Paper Stock",
        options: [
          "Cover: 250gsm-350gsm Cardstock",
          "Inside: 150gsm-200gsm Gloss",
          "Matte coated paper",
          "Premium uncoated",
        ],
      },
      {
        name: "Binding",
        options: [
          "Wire-O spiral binding",
          "Saddle stitch",
          "Ring binding",
          "Magnetic strip",
        ],
      },
    ],
    pricing: [
      { quantity: "25", price: "PKR 8,000 - 14,000" },
      { quantity: "50", price: "PKR 14,000 - 24,000" },
      { quantity: "100", price: "PKR 25,000 - 42,000" },
      { quantity: "250", price: "PKR 55,000 - 95,000" },
    ],
    relatedProducts: [
      { slug: "notepads", name: "Notepads" },
      { slug: "brochures", name: "Brochures" },
      { slug: "posters", name: "Posters" },
    ],
  },
  {
    id: 19,
    slug: "notepads",
    name: "Notepads",
    category: "Specialty Items",
    tagline: "Branded notepads and writing pads",
    description: "Custom branded notepads perfect for corporate gifts, office supplies, and promotional items. Available in various sizes with multiple binding options. Keep your brand in front of your clients daily.",
    heroImage: "/images/products/notepads/sigmund-p_qkdlpLBGk-unsplash.jpg",
    images: [
      "/images/products/notepads/sigmund-p_qkdlpLBGk-unsplash.jpg",
      "/images/products/business-cards.jpeg",
      "/images/products/letterheads/annie-spratt-t6ulw0R0dt8-unsplash.jpg",
    ],
    turnaround: "5-7 business days",
    features: [
      "Custom header/footer printing",
      "Various page counts",
      "Cardboard backing",
      "Multiple binding options",
      "Perforated pages available",
      "Ruled or blank pages",
    ],
    specifications: [
      {
        name: "Sizes",
        options: [
          "A4 (297mm x 210mm)",
          "A5 (210mm x 148mm)",
          "Letter (11\" x 8.5\")",
          "Legal (14\" x 8.5\")",
          "Custom sizes",
        ],
      },
      {
        name: "Binding",
        options: [
          "Top glue pad",
          "Side glue pad",
          "Spiral/Wire-O",
          "Perfect bound",
        ],
      },
      {
        name: "Paper Stock",
        options: [
          "60gsm Bond Paper",
          "70gsm Bond Paper",
          "80gsm Bond Paper",
          "Recycled paper",
        ],
      },
      {
        name: "Options",
        options: [
          "Blank pages",
          "Lined/Ruled pages",
          "Grid pages",
          "Perforated pages",
          "Cardboard backing",
          "Page numbering",
        ],
      },
    ],
    pricing: [
      { quantity: "25 pads", price: "PKR 4,000 - 7,000" },
      { quantity: "50 pads", price: "PKR 7,000 - 12,000" },
      { quantity: "100 pads", price: "PKR 12,000 - 22,000" },
      { quantity: "250 pads", price: "PKR 28,000 - 50,000" },
    ],
    relatedProducts: [
      { slug: "letterheads", name: "Letterheads" },
      { slug: "business-cards", name: "Business Cards" },
      { slug: "calendars", name: "Calendars" },
    ],
  },
  {
    id: 20,
    slug: "certificates",
    name: "Certificates",
    category: "Specialty Items",
    tagline: "Professional certificates and awards",
    description: "Professional certificates, awards, and diplomas printed on premium paper. Perfect for educational institutions, corporate recognition, and special achievements. Available with various security features and elegant finishes.",
    heroImage: "/images/products/certificates/certificate-school.jpeg",
    images: [
      "/images/products/certificates/certificate-school.jpeg",
      "/images/products/folders/student-files.jpeg",
      "/images/products/business-cards.jpeg",
    ],
    turnaround: "3-5 business days",
    features: [
      "Premium certificate paper",
      "Foil stamping available",
      "Embossed seals",
      "Security features",
      "Custom designs",
      "Variable data printing",
    ],
    specifications: [
      {
        name: "Sizes",
        options: [
          "A4 (297mm x 210mm)",
          "Letter (11\" x 8.5\")",
          "8.5\" x 11\"",
          "11\" x 14\"",
          "Custom sizes",
        ],
      },
      {
        name: "Paper Stock",
        options: [
          "Premium certificate paper (120-180gsm)",
          "Parchment paper",
          "Linen finish paper",
          "Security paper with watermark",
          "Glossy cardstock",
        ],
      },
      {
        name: "Security Features",
        options: [
          "Watermark",
          "Security threads",
          "Microprinting",
          "UV features",
          "Holographic elements",
          "Serial numbering",
        ],
      },
      {
        name: "Finishing",
        options: [
          "Foil stamping (Gold/Silver)",
          "Embossed seal",
          "Raised printing",
          "Spot UV",
          "Border designs",
        ],
      },
    ],
    pricing: [
      { quantity: "25", price: "PKR 3,000 - 6,000" },
      { quantity: "50", price: "PKR 5,000 - 10,000" },
      { quantity: "100", price: "PKR 8,000 - 16,000" },
      { quantity: "250", price: "PKR 18,000 - 35,000" },
    ],
    relatedProducts: [
      { slug: "letterheads", name: "Letterheads" },
      { slug: "folders", name: "Presentation Folders" },
      { slug: "wedding-cards", name: "Wedding Cards" },
    ],
  },
  {
    id: 21,
    slug: "tissue-paper",
    name: "Tissue Paper",
    category: "Packaging",
    tagline: "Custom printed tissue paper for packaging",
    description: "Custom printed tissue paper that adds a premium touch to your packaging. Perfect for gift wrapping, product packaging, and retail presentation. Available in various colors with custom printing options.",
    heroImage: "/images/products/shopping-bags/shopping-bag-pattern.jpeg",
    images: [
      "/images/products/shopping-bags/shopping-bag-pattern.jpeg",
      "/images/products/custom-boxes/cosmetic-packaging.jpg",
      "/images/products/custom-boxes/shipping-boxes.jpg",
    ],
    turnaround: "7-10 business days",
    features: [
      "Custom color options",
      "Logo/pattern printing",
      "Acid-free paper",
      "Eco-friendly options",
      "Various sizes available",
      "Bulk quantities available",
    ],
    specifications: [
      {
        name: "Sizes",
        options: [
          "15\" x 20\"",
          "20\" x 30\"",
          "24\" x 36\"",
          "Custom sizes",
        ],
      },
      {
        name: "Colors",
        options: [
          "White",
          "Black",
          "Custom Pantone colors",
          "Multi-color printing",
        ],
      },
      {
        name: "Printing",
        options: [
          "No printing (solid color)",
          "1-color logo",
          "2-color design",
          "Full-color pattern",
        ],
      },
      {
        name: "Paper Weight",
        options: [
          "17gsm (Standard)",
          "20gsm (Premium)",
        ],
      },
    ],
    pricing: [
      { quantity: "480 sheets", price: "PKR 6,000 - 10,000" },
      { quantity: "960 sheets", price: "PKR 10,000 - 18,000" },
      { quantity: "1920 sheets", price: "PKR 18,000 - 32,000" },
      { quantity: "Custom", price: "Contact for quote" },
    ],
    relatedProducts: [
      { slug: "custom-boxes", name: "Custom Boxes" },
      { slug: "shopping-bags", name: "Shopping Bags" },
      { slug: "stickers", name: "Stickers" },
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
        image: "/images/products/business-cards.jpeg",
      },
      {
        slug: "letterheads",
        name: "Letterheads",
        description: "Professional letterheads for official correspondence",
        startingPrice: "PKR 5,000",
        image: "/images/products/letterheads/annie-spratt-t6ulw0R0dt8-unsplash.jpg",
      },
      {
        slug: "envelopes",
        name: "Envelopes",
        description: "Custom printed envelopes in various sizes",
        startingPrice: "PKR 4,000",
        image: "/images/products/letterheads/annie-spratt-t6ulw0R0dt8-unsplash.jpg",
      },
      {
        slug: "folders",
        name: "Presentation Folders",
        description: "Professional folders for documents and proposals",
        startingPrice: "PKR 8,000",
        image: "/Branding.jpg",
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
        image: "/images/products/brocheer3.jpeg",
      },
      {
        slug: "flyers",
        name: "Flyers",
        description: "Attention-grabbing flyers for promotions and events",
        startingPrice: "PKR 5,000",
        image: "/images/products/flyers/restaurant-flyer.jpeg",
      },
      {
        slug: "posters",
        name: "Posters",
        description: "High-impact posters in various sizes",
        startingPrice: "PKR 2,000",
        image: "/images/products/flyers/restaurant-flyer.jpeg",
      },
      {
        slug: "catalogs",
        name: "Catalogs",
        description: "Comprehensive product catalogs",
        startingPrice: "PKR 15,000",
        image: "/images/products/brocheer3.jpeg",
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
        image: "/images/products/roll-up-banners/roll-up-banner-agricultural.jpeg",
      },
      {
        slug: "roll-up-banners",
        name: "Roll-Up Banners",
        description: "Portable roll-up banners perfect for events",
        startingPrice: "PKR 8,000",
        image: "/images/products/roll-up-banners/roll-up-banner-consulting.jpeg",
      },
      {
        slug: "window-graphics",
        name: "Window Graphics",
        description: "Promotional graphics for storefronts",
        startingPrice: "PKR 5,000",
        image: "/images/products/brochures/restaurant-branding.jpg",
      },
      {
        slug: "wall-graphics",
        name: "Wall Graphics",
        description: "Large-scale wall murals and graphics",
        startingPrice: "PKR 10,000",
        image: "/images/products/flyers/restaurant-flyer.jpeg",
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
        image: "/images/products/custom-boxes/cosmetic-packaging.jpg",
      },
      {
        slug: "stickers",
        name: "Labels & Stickers",
        description: "Custom labels for products and branding",
        startingPrice: "PKR 4,000",
        image: "/images/products/stickers/retail-label.jpeg",
      },
      {
        slug: "shopping-bags",
        name: "Shopping Bags",
        description: "Branded shopping bags for retail",
        startingPrice: "PKR 12,000",
        image: "/images/products/shopping-bags/shopping-bag-pattern.jpeg",
      },
      {
        slug: "food-packaging",
        name: "Food Packaging",
        description: "Food-safe packaging solutions",
        startingPrice: "PKR 10,000",
        image: "/images/products/food-packaging2.jpeg",
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
        image: "/images/products/wedding-cards/wedding-card-nikah-purple.jpeg",
      },
      {
        slug: "calendars",
        name: "Calendars",
        description: "Custom calendars for promotional use",
        startingPrice: "PKR 12,000",
        image: "/images/products/calendars/desk-calendar.jpeg",
      },
      {
        slug: "notepads",
        name: "Notepads",
        description: "Branded notepads and writing pads",
        startingPrice: "PKR 6,000",
        image: "/images/products/notepads/sigmund-p_qkdlpLBGk-unsplash.jpg",
      },
      {
        slug: "certificates",
        name: "Certificates",
        description: "Professional certificates and awards",
        startingPrice: "PKR 5,000",
        image: "/images/products/certificates/certificate-school.jpeg",
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

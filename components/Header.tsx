"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, Phone, Printer, Package, Building2, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/components/lib/utils";
import {services,products,industries} from '@/components/lib/data'


function ListItem({
  title,
  children,
  href,
  className,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { href: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link 
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-shadow",
        isScrolled && "shadow-md"
      )}
    >
      <div className="container mx-auto px-3 lg:px-4">
        <div className="flex h-14 sm:h-16 items-center justify-between gap-2 lg:gap-3">
          {/* Logo */}
          <Link href="/" className="relative shrink-0 h-8 w-24 sm:h-9 sm:w-28 lg:h-10 lg:w-32">
            <Image
              src="/logo.png"
              fill
              alt="Fast Printing Logo"
              className="object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex mx-auto">
            <NavigationMenuList className="gap-0">
              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm px-3")}>
                  <Link href="/">Home</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm px-3")}>
                  <Link href="/about">About</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              {/* Services Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm px-3">Services</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:p-6 w-[350px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/services"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 lg:p-6 no-underline outline-none focus:shadow-md"
                        >
                          <Printer className="h-5 w-5 lg:h-6 lg:w-6 mb-2" />
                          <div className="mb-2 mt-2 lg:mt-4 text-base lg:text-lg font-medium">
                            Our Services
                          </div>
                          <p className="text-xs lg:text-sm leading-tight text-muted-foreground">
                            Professional printing and packaging solutions for your business needs.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {services.slice(0, 3).map((service) => (
                      <ListItem
                        key={service.name}
                        title={service.name}
                        href={service.href}
                      >
                        {service.description}
                      </ListItem>
                    ))}
                  </ul>
                  <div className="border-t px-6 py-4">
                    <div className="grid grid-cols-2 gap-3">
                      {services.slice(3).map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{service.name}</div>
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                            {service.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Products Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm px-3">Products</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:p-6 w-[350px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/products"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 lg:p-6 no-underline outline-none focus:shadow-md"
                        >
                          <Package className="h-5 w-5 lg:h-6 lg:w-6 mb-2" />
                          <div className="mb-2 mt-2 lg:mt-4 text-base lg:text-lg font-medium">
                            Our Products
                          </div>
                          <p className="text-xs lg:text-sm leading-tight text-muted-foreground">
                            Quality printed products and packaging materials for every need.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {products.slice(0, 3).map((product) => (
                      <ListItem
                        key={product.name}
                        title={product.name}
                        href={product.href}
                      >
                        {product.description}
                      </ListItem>
                    ))}
                  </ul>
                  <div className="border-t px-6 py-4">
                    <div className="grid grid-cols-2 gap-3">
                      {products.slice(3).map((product) => (
                        <Link
                          key={product.name}
                          href={product.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{product.name}</div>
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                            {product.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Industries Dropdown */}
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm px-3">Industries</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid gap-3 p-4 md:p-6 w-[350px] md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                    <li className="row-span-3">
                      <NavigationMenuLink asChild>
                        <Link
                          href="/industries"
                          className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-4 lg:p-6 no-underline outline-none focus:shadow-md"
                        >
                          <Building2 className="h-5 w-5 lg:h-6 lg:w-6 mb-2" />
                          <div className="mb-2 mt-2 lg:mt-4 text-base lg:text-lg font-medium">
                            Industries We Serve
                          </div>
                          <p className="text-xs lg:text-sm leading-tight text-muted-foreground">
                            Specialized solutions tailored for different industries and sectors.
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    {industries.slice(0, 3).map((industry) => (
                      <ListItem
                        key={industry.name}
                        title={industry.name}
                        href={industry.href}
                      >
                        {industry.description}
                      </ListItem>
                    ))}
                  </ul>
                  <div className="border-t px-6 py-4">
                    <div className="grid grid-cols-2 gap-3">
                      {industries.slice(3).map((industry) => (
                        <Link
                          key={industry.name}
                          href={industry.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{industry.name}</div>
                          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                            {industry.description}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm px-3")}>
                  <Link href="/portfolio">Portfolio</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm px-3")}>
                  <Link href="/blog">Blog</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "text-sm px-3")}>
                  <Link href="/contact">Contact</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center shrink-0 ml-2">
            <Button asChild size="sm" className="h-9 px-3 text-sm whitespace-nowrap">
              <Link href="/request-quote">Get Free Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="lg:hidden shrink-0">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[320px] overflow-y-auto p-0">
              <SheetHeader className="px-6 py-4 border-b">
                <SheetTitle className="text-left text-xl font-bold">Menu</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col py-2">
                {/* Home */}
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 text-base font-medium hover:bg-accent transition-colors"
                >
                  Home
                </Link>

                {/* Divider */}
                <div className="border-t my-1" />

                {/* Services Collapsible */}
                <Collapsible open={servicesOpen} onOpenChange={setServicesOpen}>
                  <CollapsibleTrigger className="w-full px-6 py-3 text-base font-bold hover:bg-accent transition-colors flex items-center justify-between group">
                    <span className={cn(servicesOpen && "text-[#FDB913]")}>Services</span>
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      servicesOpen && "rotate-180 text-[#FDB913]"
                    )} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-3 pt-2 space-y-2">
                    {services.map((service) => (
                      <Link
                        key={service.name}
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm py-2 px-4 rounded-md text-gray-600 hover:text-[#FDB913] hover:bg-[#FDB913]/10 transition-colors"
                      >
                        {service.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Divider */}
                <div className="border-t my-1" />

                {/* Products Collapsible */}
                <Collapsible open={productsOpen} onOpenChange={setProductsOpen}>
                  <CollapsibleTrigger className="w-full px-6 py-3 text-base font-bold hover:bg-accent transition-colors flex items-center justify-between group">
                    <span className={cn(productsOpen && "text-[#FDB913]")}>Products</span>
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      productsOpen && "rotate-180 text-[#FDB913]"
                    )} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-3 pt-2 space-y-2">
                    {products.map((product) => (
                      <Link
                        key={product.name}
                        href={product.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm py-2 px-4 rounded-md text-gray-600 hover:text-[#FDB913] hover:bg-[#FDB913]/10 transition-colors"
                      >
                        {product.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Divider */}
                <div className="border-t my-1" />

                {/* Industries Collapsible */}
                <Collapsible open={industriesOpen} onOpenChange={setIndustriesOpen}>
                  <CollapsibleTrigger className="w-full px-6 py-3 text-base font-bold hover:bg-accent transition-colors flex items-center justify-between group">
                    <span className={cn(industriesOpen && "text-[#FDB913]")}>Industries</span>
                    <ChevronDown className={cn(
                      "h-5 w-5 transition-transform duration-200",
                      industriesOpen && "rotate-180 text-[#FDB913]"
                    )} />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-6 pb-3 pt-2 space-y-2">
                    {industries.map((industry) => (
                      <Link
                        key={industry.name}
                        href={industry.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block text-sm py-2 px-4 rounded-md text-gray-600 hover:text-[#FDB913] hover:bg-[#FDB913]/10 transition-colors"
                      >
                        {industry.name}
                      </Link>
                    ))}
                  </CollapsibleContent>
                </Collapsible>

                {/* Divider */}
                <div className="border-t my-1" />

                {/* Other Links */}
                <Link
                  href="/about"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 text-base font-medium hover:bg-accent transition-colors"
                >
                  About
                </Link>
                <Link
                  href="/portfolio"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 text-base font-medium hover:bg-accent transition-colors"
                >
                  Portfolio
                </Link>
                <Link
                  href="/blog"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 text-base font-medium hover:bg-accent transition-colors"
                >
                  Blog
                </Link>
                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-6 py-3 text-base font-medium hover:bg-accent transition-colors"
                >
                  Contact
                </Link>
              </nav>

              {/* Fixed bottom buttons */}
              <div className="sticky bottom-0 bg-background border-t p-4 space-y-2">
                <Button asChild className="w-full h-12 text-base font-semibold">
                  <Link href="/request-quote" onClick={() => setMobileMenuOpen(false)}>
                    Get Free Quote
                  </Link>
                </Button>
                <Button asChild variant="outline" className="w-full h-12 text-base">
                  <Link href="tel:+923252467463">
                    <Phone className="mr-2 h-5 w-5" />
                    Call Us Now
                  </Link>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

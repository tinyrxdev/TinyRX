import React from "react";
import { Link } from "wouter";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-24 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <img src="/tinyrx-logo.png" alt="TinyRx" className="h-20 w-auto" />
        </Link>
        
        <div className="hidden md:flex flex-1 justify-center">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent">Treatments</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/treatments/weight-loss" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Weight Loss</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">GLP-1 physician-guided treatment</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/treatments/peptides" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">Peptide Therapy</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Targeted recovery & longevity</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/treatments/ed" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">ED & Performance</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Confidential sexual health</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                    <li>
                      <NavigationMenuLink asChild>
                        <Link href="/treatments/trt" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                          <div className="text-sm font-medium leading-none">TRT / Hormone Health</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">Optimize testosterone safely</p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/how-it-works" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50">
                  How It Works
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/faq" className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground disabled:pointer-events-none disabled:opacity-50">
                  FAQ
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" asChild className="rounded-full">
            <Link href="/login">Log In</Link>
          </Button>
          <Button asChild className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/signup">Get Started</Link>
          </Button>
        </div>

        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="flex flex-col gap-6 pt-10">
              <Link href="/" className="flex items-center gap-2">
                <img src="/tinyrx-logo.png" alt="TinyRx" className="h-6 w-auto" />
              </Link>
              <div className="flex flex-col gap-4 mt-6">
                <h4 className="font-semibold text-sm uppercase tracking-wider text-muted-foreground">Treatments</h4>
                <Link href="/treatments/weight-loss" className="text-lg font-medium">Weight Loss</Link>
                <Link href="/treatments/peptides" className="text-lg font-medium">Peptide Therapy</Link>
                <Link href="/treatments/ed" className="text-lg font-medium">ED & Performance</Link>
                <Link href="/treatments/trt" className="text-lg font-medium">TRT / Hormone Health</Link>
                <div className="h-px bg-border my-2" />
                <Link href="/how-it-works" className="text-lg font-medium">How It Works</Link>
                <Link href="/about" className="text-lg font-medium">About</Link>
                <Link href="/faq" className="text-lg font-medium">FAQ</Link>
              </div>
              <div className="flex flex-col gap-3 mt-auto mb-8">
                <Button variant="outline" asChild className="w-full rounded-full">
                  <Link href="/login">Log In</Link>
                </Button>
                <Button asChild className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/signup">Get Started</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

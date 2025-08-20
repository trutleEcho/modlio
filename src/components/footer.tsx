"use client"

import { motion } from "framer-motion"
import { Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image";

const footerLinks = {
  company: [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ],
  services: [
    { name: "Web Development", href: "#services" },
    {name: "Mobile Development", href: "#services" },
    {name: "Desktop Development", href: "#services" },
    { name: "UI/UX Design", href: "#services" },
    { name: "Digital Strategy", href: "#services" },
    { name: "Security & Performance", href: "#services" },
  ],
  contact: [
    { name: "hello@modlio.in", href: "mailto:hello@modlio.in" },
    { name: "+(91) 9175395577", href: "tel:+919175395577" },
  ]
}

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
  }

  const scrollToSection = (href: string) => {
    if (href.startsWith("#")) {
      const element = document.getElementById(href.substring(1))
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    } else {
      window.open(href, "_blank")
    }
  }

  return (
    <footer className="bg-muted/30 border-t border-border/50 relative z-10" id="footer" role="contentinfo">
      <div className="container mx-auto container-padding">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2 flex flex-col items-start justify-start">
              <div className="space-y-4">
                <motion.div
                    className="flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                  <Image src="/globe.png" alt="Logo" width={84} height={84} />
                  <span className="flex flex-col">
              <span className="text-3xl font-bold bg-primary bg-clip-text text-transparent font-[jura]">
              MODLIO
            </span>
              <span className="text-base font-light font-[Epilogue]">
              Empowering Businesses
            </span>
            </span>
                </motion.div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Transforming digital visions into exceptional experiences.
                  We craft innovative solutions that drive growth and success.
                </p>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Services Links */}
            <div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Services</h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                      >
                        {link.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Contact Info */}
            <div>
              <div>
                <h3 className="font-semibold text-foreground mb-4">Contact</h3>
                <ul className="space-y-3">
                  {footerLinks.contact.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                        onClick={link.href === "#" ? (e) => e.preventDefault() : undefined}
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>© {new Date().getFullYear()} MODLIO. Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>and cutting-edge technology.</span>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <button
                  onClick={() => scrollToSection("#")}
                  className="hover:text-primary transition-colors duration-200"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => scrollToSection("#")}
                  className="hover:text-primary transition-colors duration-200"
                >
                  Terms of Service
                </button>
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={scrollToTop}
                className="h-8 w-8 rounded-full bg-primary/10 hover:bg-primary/20 text-primary"
                aria-label="Scroll to top"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}


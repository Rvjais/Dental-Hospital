import React from 'react';
import logo from '../../assets/logo.png'
const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Logo and description */}
          <div className="space-y-6">
            <a className="flex items-center space-x-3" href="/">
              <div className="h-12 w-auto">
                <img
                  src={logo}
                  alt="Gnathos Dental"
                  className="h-full w-auto object-contain filter brightness-0  invert"
                />
              </div>
            </a>
            <p className="text-primary-foreground/80 leading-relaxed">
              The best dental clinic in Hyderabad, providing advanced, painless, and affordable dental care with a focus on precision, hygiene, and patient comfort.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-facebook w-5 h-5" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              {/* Instagram */}
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-instagram w-5 h-5" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              {/* Twitter */}
              <a href="#" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                  className="lucide lucide-twitter w-5 h-5" aria-hidden="true">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Quick Links</h4>
            <div className="space-y-3">
              <a className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="/">Home</a>
              <a className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="/about">About Us</a>
              <a className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="/dental-implants">Our Services</a>
              <a className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="/blog">Blog</a>
              <a className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="/contact">Contact Us</a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Our Services</h4>
            <div className="space-y-3">
              <a className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="/dental-implants">Dental Implants</a>
              <a className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="/root-canal">Root Canal Treatment</a>
              <a className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="/dental-crowns">Dental Crowns</a>
              <a className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors" href="/wisdom-tooth">Wisdom Tooth Extraction</a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-6 text-lg">Contact Information</h4>
            <div className="space-y-4">

              {/* Location */}
              <div className="flex items-start space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin w-5 h-5 text-primary-foreground/80 mt-1 flex-shrink-0" aria-hidden="true">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <div className="text-primary-foreground/80">
                  <p className="font-medium text-primary-foreground mb-1">Location</p>
                  <p className="text-sm leading-relaxed">
                    Care Hospital, Near Cyberabad Police Commissionerate,<br />
                    Jayabheri Pine Valley, Hitech City,<br />
                    Hyderabad, 500032
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone w-5 h-5 text-primary-foreground/80 flex-shrink-0" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <div className="text-primary-foreground/80">
                  <p className="font-medium text-primary-foreground">Appointments</p>
                  <p>+91 9955 708 885</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail w-5 h-5 text-primary-foreground/80 flex-shrink-0" aria-hidden="true">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                </svg>
                <div className="text-primary-foreground/80">
                  <p className="font-medium text-primary-foreground">Email</p>
                  <p>gnathosdentalcare@gmail.com</p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-primary-foreground/80">© 2025 Gnathos Dental. All rights reserved.</p>
              <p className="text-sm text-primary-foreground/60 mt-1">Best dental clinic in Hyderabad - Advanced, Painless, Affordable</p>
            </div>
            <div className="flex space-x-6 text-sm text-primary-foreground/80">
              <a className="hover:text-primary-foreground transition-colors" href="/privacy">Privacy Policy</a>
              <a className="hover:text-primary-foreground transition-colors" href="/terms">Terms of Service</a>
              <a className="hover:text-primary-foreground transition-colors" href="/sitemap">Sitemap</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

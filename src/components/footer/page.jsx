import React from 'react';
import { Button, Icon } from '@gravity-ui/uikit';
import { LogoFacebook, LogoGithub, LogoLinkedin } from '@gravity-ui/icons';

const Footer = () => {
  return (
    // Same background as your navbar
    <footer className="bg-[#0a0a0a] text-gray-400 py-16 px-6">
      {/* max-w-5xl matches the navbar structure provided earlier */}
      <div className="mx-auto max-w-5xl grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* Branding Column */}
        <div className="col-span-1">
          <div className="flex items-center mb-4">
            <span className="text-xl font-bold text-white">hire</span>
            <span className="text-xl font-bold text-[#5c53fe]">loop</span>
          </div>
          <p className="text-sm leading-relaxed mb-6 text-gray-500">
            The AI-native career platform. Built for people who take their work seriously.
          </p>
          
          <div className="flex gap-3">
            {[LogoFacebook, LogoGithub, LogoLinkedin].map((item, idx) => (
              <Button 
                key={idx}
                view="flat" 
                className="w-9 h-9 rounded-md bg-[#1a1a1a] hover:bg-[#2a2a2a] flex items-center justify-center text-gray-400"
                href="#"
              >
                <Icon data={item} size={18} />
              </Button>
            ))}
          </div>
        </div>

        {/* Links Columns - Reusable styles */}
        {[
          { title: "Product", links: ["Job discovery", "Worker AI", "Companies", "Salary data"] },
          { title: "Navigations", links: ["Help center", "Career library", "Contact"] },
          { title: "Resources", links: ["Brand Guideline", "Newsroom"] }
        ].map((section) => (
          <div key={section.title}>
            <h3 className="text-[#5c53fe] font-semibold mb-6 text-sm">{section.title}</h3>
            <ul className="space-y-4 text-sm">
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-white transition-colors duration-200">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom Copyright Bar */}
      <div className="mx-auto max-w-5xl mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-gray-500">
        <p>© 2024 — Programming Hero</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition">Terms & Policy</a>
          <a href="#" className="hover:text-white transition">Privacy Guideline</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
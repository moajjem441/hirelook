import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer class="bg-[#0a0a0a] text-gray-400 py-16 px-6">
  <div class="max-w-11/12 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
    
    <div class="col-span-1">
      <div class="flex items-center mb-4">
        <span class="text-xl font-bold text-white">hire</span>
        <span class="text-xl font-bold text-blue-500">loop</span>
      </div>
      <p class="text-sm leading-relaxed mb-6">
        The AI-native career platform. Built for people who take their work seriously.
      </p>
      <div class="flex gap-3">
        <a href="#" class="w-8 h-8 rounded bg-[#1a1a1a] flex items-center justify-center hover:bg-gray-700 transition">F</a>
        <a href="#" class="w-8 h-8 rounded bg-[#1a1a1a] flex items-center justify-center hover:bg-gray-700 transition">P</a>
        <a href="#" class="w-8 h-8 rounded bg-[#1a1a1a] flex items-center justify-center hover:bg-gray-700 transition">in</a>
      </div>
    </div>

    <div>
      <h3 class="text-white font-medium mb-6">Product</h3>
      <ul class="space-y-4 text-sm">
        <li><a href="#" class="hover:text-white transition">Job discovery</a></li>
        <li><a href="#" class="hover:text-white transition">Worker AI</a></li>
        <li><a href="#" class="hover:text-white transition">Companies</a></li>
        <li><a href="#" class="hover:text-white transition">Salary data</a></li>
      </ul>
    </div>

    <div>
      <h3 class="text-white font-medium mb-6">Navigations</h3>
      <ul class="space-y-4 text-sm">
        <li><a href="#" class="hover:text-white transition">Help center</a></li>
        <li><a href="#" class="hover:text-white transition">Career library</a></li>
        <li><a href="#" class="hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    <div>
      <h3 class="text-white font-medium mb-6">Resources</h3>
      <ul class="space-y-4 text-sm">
        <li><a href="#" class="hover:text-white transition">Brand Guideline</a></li>
        <li><a href="#" class="hover:text-white transition">Newsroom</a></li>
      </ul>
    </div>
  </div>

  <div class="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-xs text-gray-500">
    <p>© 2024 — Programming Hero</p>
    <div class="flex gap-6 mt-4 md:mt-0">
      <a href="#" class="hover:text-white transition">Terms & Policy</a>
      <a href="#" class="hover:text-white transition">Privacy Guideline</a>
    </div>
  </div>
</footer>
            
        </div>
    );
};

export default Footer;
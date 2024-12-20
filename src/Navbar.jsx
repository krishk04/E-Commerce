import React from "react";

const HomePage = () => {
  return (
    <div className="bg-gray-100">
      <div className="bg-white shadow-lg sticky top-0 z-50">
  {/* Top Bar */}
  <div className="bg-red-900 text-white text-sm py-2">
    <div className="container mx-auto flex items-center justify-between px-4">
      <div className="flex items-center space-x-4">
        <div className="flex items-center">
          <i className="fas fa-phone-alt mr-2"></i>
          <span>+91-7483600212</span>
        </div>
        <div className="flex items-center">
          <i className="fas fa-envelope mr-2"></i>
          <span>info@dryfruithouse.com</span>
        </div>
      </div>
      <span>We have 190+ dry fruit outlets across India!</span>
    </div>
  </div>

  {/* Navigation Bar */}
  <div className="bg-white">
    <div className="container mx-auto flex items-center justify-between px-4 py-3">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <img src="/logo.png" alt="Dry & Fruits Logo" className="h-10" />
        <div>
          <h1 className="text-xl font-bold text-green-700">Spice And Nuts</h1>
          <p className="text-sm font-medium text-gray-500">EAT HEALTHY</p>
        </div>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-8">
          <li><a href="#" className="text-gray-700 hover:text-green-700">Home</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-700">Shop <i className="fas fa-angle-down"></i></a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-700">Bulk Order</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-700">Our Locations</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-700">Contact Us</a></li>
          <li><a href="#" className="text-gray-700 hover:text-green-700">More <i className="fas fa-angle-down"></i></a></li>
        </ul>
      </nav>

      {/* Icons */}
      <div className="flex items-center space-x-4">
        <a href="#" className="text-gray-700 hover:text-green-700">
          <i className="fas fa-user text-xl"></i>
        </a>
        <a href="#" className="text-gray-700 hover:text-green-700">
          <i className="fas fa-shopping-bag text-xl"></i>
        </a>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default HomePage;
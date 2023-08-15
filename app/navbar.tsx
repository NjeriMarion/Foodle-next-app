import React from 'react';

function Navbar() {
return (
<nav className="bg-grey-200 text-red">
<div className="container mx-auto flex justify-between items-center py-4">
<span className="logo text-xl text-red-500 font-semibold">Foodle</span>
<ul className="flex items-center space-x-3">
<div className="centered-links hidden md:flex space-x-4">
<li>Home</li>
<li>Offers</li>
<li>Services</li>
<li>Menu</li>
<li>About Us</li>
</div>
<div className="flex items-center space-x-8">
<button className="text-red-400 border border-none px-3 py-1">Login</button>
<button className="text-red-500 border border-red-500 px-3 py-1">Sign Up</button>
</div>
</ul>
</div>
</nav>
);
}

export default Navbar;
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/assets/logo.svg'

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 flex items-center justify-between">
      {/* Logo Section */}
      <div className="flex items-center">
        {/* Replace with actual Image component or logo */}
        <Image 
            className='ml-10'
          src={logo}
          alt="Astral Paints Logo" 
          width={150} 
          height={50} 
        />
      </div>
      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-4 text-sm">
        <li><Link href="/about" className="py-2 px-4 rounded-2xl hover:bg-white hover:text-blue-600">About</Link></li>
        <li><Link href="/category" className="py-2 px-4 rounded-2xl hover:bg-white hover:text-blue-600">Category</Link></li>
        <li><Link href="/services" className="py-2 px-4 rounded-2xl hover:bg-white hover:text-blue-600">Services</Link></li>
        <li><Link href="/colours" className="py-2 px-4 rounded-2xl hover:bg-white hover:text-blue-600">Colours</Link></li>
        <li><Link href="/downloads" className="py-2 px-4 rounded-2xl hover:bg-white hover:text-blue-600">Downloads</Link></li>
        <li><Link href="/become-a-dealer" className="py-2 px-4 rounded-2xl hover:bg-white hover:text-blue-600">Become A Dealer</Link></li>
        <li><Link href="/blogs" className="py-2 px-4 rounded-2xl hover:bg-white hover:text-blue-600">Blogs</Link></li>
        <li><Link href="/contact" className="py-2 px-4 rounded-2xl hover:bg-white hover:text-blue-600">Contact</Link></li>
      </ul>

      {/* Enquire Now Button */}
      <div>
        <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-full hover:bg-gray-100">
          Enquire Now
        </button>
      </div>
    </nav>
  );
};

export default Navbar;

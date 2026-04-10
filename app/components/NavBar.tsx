import Image from 'next/image';

const NavBar = () => {
  return (
    <nav className="bg-white py-2 px-4 shadow-md">
      <div className="container flex flex-row justify-start items-center space-x-4">
        <Image
          src="/logo.png"
          alt="Center Market Logo"
          width={100}
          height={50}
          loading="eager"
        />
        <div className="flex space-x-5">
          <a href="#" className="hover:text-primary hover:font-bold">
            Food
          </a>
          <a href="#" className="hover:text-primary hover:font-bold">
            Deals
          </a>
          <a href="#" className="hover:text-primary hover:font-bold">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

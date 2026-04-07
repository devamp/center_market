import Image from "next/image";

const NavBar = () => {
  return (
    <nav className="bg-white py-2 px-4 shadow-md">
      <div className="container mx-auto flex flex-row justify-start items-center space-x-4">
        <Image src="/logos.png" alt="Center Market Logo" width={100} height={50} loading="eager"/>
        <div className="flex space-x-5">
          <a href="#" className="hover:text-primary hover:font-bold">Home</a>
          <a href="#" className="hover:text-primary hover:font-bold">Products</a>
          <a href="#" className="hover:text-primary hover:font-bold">Locations</a>
          <a href="#" className="hover:text-primary hover:font-bold">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
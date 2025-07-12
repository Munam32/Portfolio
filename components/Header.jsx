import Link from "next/link";
import { Button } from "./ui/button";

//components
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white p-2">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold header">
            Abdul<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* desktop nav & Hire me button*/}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button className="cursor-pointer">Hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden header">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;

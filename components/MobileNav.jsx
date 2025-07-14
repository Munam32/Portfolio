// "use client";

// import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
// import { usePathname } from "next/navigation";
// import Link from "next/link";
// import { CiMenuFries } from "react-icons/ci";

// const links = [
//   {
//     name: "home",
//     path: "/",
//   },
//   {
//     name: "services",
//     path: "/services",
//   },
//   {
//     name: "resume",
//     path: "/resume",
//   },
//   {
//     name: "work",
//     path: "/work",
//   },
//   {
//     name: "contact",
//     path: "/contact",
//   },
// ];

// const MobileNav = () => {
//   const pathName = usePathname();

//   return (
//     <Sheet>
//       <SheetTrigger className="flex justify-center items-center">
//         <CiMenuFries className="text-[32px] text-accent cursor-pointer"></CiMenuFries>
//       </SheetTrigger>
//       <SheetContent className="flex flex-col">
//         {/* Logo */}

//         <div className="mt-32 mb-40 text-center text-2xl">
//           <Link href="/">
//             <h1 className="text-4xl font-semibold">
//               Abdul<span className="text-accent">.</span>
//             </h1>
//           </Link>
//         </div>

//         {/* nav */}
//         <nav className="flex flex-col justify-center items-center gap-8">
//           {links.map((link, index) => {
//             return (
//               <Link
//                 href={link.path}
//                 key={index}
//                 className={`${
//                   link.path === pathName &&
//                   "text-accent border-b-2 border-accent"
//                 }text-xl capitalize hover:text-accent transition-all`}
//               >
//                 {link.name}
//               </Link>
//             );
//           })}
//         </nav>
//       </SheetContent>
//     </Sheet>
//   );
// };

// export default MobileNav;

"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useEffect, useState } from "react";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const MobileNav = () => {
  const pathName = usePathname();

  const [showSidebar, setShowSidebar] = useState(false);

  // Add `open` state to control <Sheet>
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setShowSidebar(false); // original behavior
    setOpen(false); // also close the Sheet when path changes
  }, [pathName]);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger className="flex justify-center items-center">
        <CiMenuFries className="text-[32px] text-accent cursor-pointer" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        {/* Logo */}
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href="/" onClick={() => setOpen(false)}>
            <h1 className="text-4xl font-semibold">
              Abdul<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>

        {/* nav */}
        <nav className="flex flex-col justify-center items-center gap-8 ">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                onClick={() => setOpen(false)}
                className={`${
                  link.path === pathName &&
                  "text-accent border-b-2 border-accent"
                }text-xl capitalize hover:text-accent transition-all`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;

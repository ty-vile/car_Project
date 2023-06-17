import Link from "next/link";
import Image from "next/image";
import { footerLinks } from "@/constants";

function Footer() {
  return (
    <footer className="w-full pb-10">
      <nav className="flex flex-col gap-10 max-w-[1800px] mx-auto p-4 lg:flex-row lg:justify-between">
        <div className="flex items-center justify-start h-full">
          <Link href="/">
            <Image
              src="/logo.svg"
              height={180}
              width={180}
              alt="Company logo"
              className="object-contain"
            />
          </Link>
        </div>
        {footerLinks.map((link) => (
          <div key={link.title} className="flex flex-col gap-5">
            <h3 className="font-bold text-xl">{link.title}</h3>
            {link.links.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="text-gray-primary hover:text-gray-dark"
              >
                {item.title}
              </Link>
            ))}
          </div>
        ))}
      </nav>
    </footer>
  );
}

export default Footer;

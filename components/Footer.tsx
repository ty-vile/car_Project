import Link from "next/link";
import Image from "next/image";
import Button from "./Button";
function Footer() {
  return (
    <footer className="w-full absolute z-10">
      <nav className="flex items-center justify-between max-w-[1800px] mx-auto  p-4">
        <div>
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
        <div>
          <Button title="Sign In" />
        </div>
      </nav>
    </footer>
  );
}

export default Footer;

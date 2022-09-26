import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="h-[200px]">
        <div className="flex justify-center my-20">
          <Link href="/">footer_link</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;

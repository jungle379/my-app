import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="h-[200px]">
        <div className="text-4xl">my-app</div>
        <div>
          <Link href="/">link</Link>
        </div>
      </div>
    </>
  );
};

export default Header;

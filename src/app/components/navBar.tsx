import Link from "next/link";

const navBar = () => {
    return (
      <header className="bg-gradient-to-b from-cyan-50 to-cyan-200 p-2 flex gap-5">
        <Link className="text-blue-600 transition-colors hover:text-green-500" href={"/"}>
          Home Page
        </Link>
        <Link className="text-blue-600 transition-colors hover:text-green-500" href={"/UserPost"}>
          User Post Page
        </Link>
      </header>
    );
  
  };
  
export default navBar;
  
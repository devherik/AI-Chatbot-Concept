export default function NavBarComp() {
  return (
    <nav style={{ width: "50vw" }} className="flex justify-center items-center p-4 bg-[var(--primary-color)]">
      <ul className="flex space-x-4">
        <li>
          <a href="#" className="text-black hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-black hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default function NavBarComp() {
  return (
    <nav
      style={{
        width: "50vw",
        border: "1px solid var(--grey-color)",
        backgroundColor: "var(--grey-color)",
        borderRadius: "8px",
        padding: "1rem 2rem",
        height: "auto"
      }}
      className="flex justify-center items-center p-4"
    >
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

import { Link } from "react-router";

export default function AuthHeader() {
  return (
    <header className="bg-gray-50 text-gray-700">
      <nav className="mx-auto flex max-w-7xl items-center p-4">
        <h2 className="text-themeOrange text-2xl font-extrabold">
          One<span className="text-themeGreen">Helper</span>
        </h2>
        <ul className="absolute left-2/4 flex -translate-x-2/4 items-center gap-4">
          <Link to="/dashboard" className="text-sm hover:underline">
            Dashboard
          </Link>
          <Link to="/schedule" className="text-sm hover:underline">
            Schedule
          </Link>
          <Link to="/todo" className="text-sm hover:underline">
            To-do
          </Link>
          <Link to="/sleep" className="text-sm hover:underline">
            Sleep
          </Link>
        </ul>
        <div className="ml-auto flex items-center gap-4">
          <div className="rounded-full border border-black p-4"></div>
          <p>Hello Norwen</p>
        </div>
      </nav>
    </header>
  );
}

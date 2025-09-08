import { Link } from "react-router";

export default function AuthHeader() {
  return (
    <header className="bg-gray-50">
      <nav className="max-w-7xl mx-auto p-4 flex items-center">
        <h2 className="text-2xl font-extrabold text-themeOrange">
          One<span className="text-themeGreen">Helper</span>
        </h2>
        <ul className="flex items-center gap-4 absolute left-2/4 -translate-x-2/4">
          <Link to="/dashboard" className="hover:underline text-sm">
            Dashboard
          </Link>
          <Link to="/schedule" className="hover:underline text-sm">
            Schedule
          </Link>
          <Link to="/todo" className="hover:underline text-sm">
            To-do
          </Link>
          <Link to="/sleep" className="hover:underline text-sm">
            Sleep
          </Link>
        </ul>
        <div className="ml-auto flex items-center gap-4">
          <div className="border rounded-full p-4 border-black"></div>
          <p>Hello Norwen</p>
        </div>
      </nav>
    </header>
  );
}

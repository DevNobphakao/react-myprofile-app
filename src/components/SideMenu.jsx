import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiUser,
  FiBookOpen,
  FiLayers,
  FiBriefcase,
  FiCode,
  FiMessageSquare,
} from "react-icons/fi";

const menus = [
  { to: "/", label: "Home", Icon: FiHome },
  { to: "/about", label: "About", Icon: FiUser },
  { to: "/eduexp", label: "Education & Experience", Icon: FiBookOpen },
  { to: "/spec", label: "Specializations", Icon: FiLayers },
  { to: "/projects", label: "Projects", Icon: FiBriefcase },
  { to: "/skills", label: "Skills", Icon: FiCode },
  { to: "/contactme", label: "Contact", Icon: FiMessageSquare },
];

export default function SideMenu() {
  return (
    <nav
      aria-label="เมนูหลัก"
      className="flex flex-col gap-4 rounded-full border border-neutral-700 bg-[#1c1c1c] px-2 py-4"
    >
      {menus.map(({ to, label, Icon }) => (
        <NavLink
          key={to}
          to={to}
          end
          title={label}
          aria-label={label}
          className={({ isActive }) =>
            `text-lg transition-colors ${
              isActive ? "text-orange-500" : "text-neutral-500 hover:text-neutral-300"
            }`
          }
        >
          <Icon />
        </NavLink>
      ))}
    </nav>
  );
}
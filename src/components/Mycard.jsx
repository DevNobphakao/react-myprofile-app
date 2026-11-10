import { FaFacebook, FaInstagram, FaLinkedin, FaGoogle } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function MyCard({
  name = "Nobphakao",
  studentId = "6852410005",
  role = "Fullstack Web Developer",
  image = "/profile.jpg", // วางรูปไว้ที่ public/profile.jpg
}) {
  const icons = [FaFacebook, FaXTwitter, FaInstagram, FaLinkedin, FaGoogle];

  return (
    <aside className="w-48 rounded-xl border border-neutral-700 bg-[#1c1c1c] p-3 text-white">
      <p className="mb-2 text-xs text-neutral-300">{name}</p>

      <img
        src={image}
        alt={name}
        className="aspect-[4/5] w-full rounded-lg bg-white object-cover"
      />

      <div className="mt-2 text-center">
        <p className="text-[10px] font-medium">STU ID: {studentId}</p>
        <p className="text-[8px] text-neutral-400">{role}</p>
      </div>

      <div className="mt-3 flex justify-center gap-2 text-sm">
        {icons.map((Icon, i) => (
          <Icon key={i} />
        ))}
      </div>

      <button className="mt-3 w-full rounded bg-orange-600 py-1 text-[10px] font-semibold tracking-wide hover:bg-orange-500">
        HIRE ME !
      </button>
    </aside>
  );
}
import { Outlet } from "react-router-dom";
import MyCard from "./Mycard";
import SideMenu from "./SideMenu";

export default function Layout() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#0f0f0f] p-4">
      <div className="flex w-full max-w-5xl items-start gap-6 rounded-2xl bg-[#1a1a1a] p-6 text-white">
        <MyCard />
        <main className="min-w-0 flex-1">
          <Outlet />
        </main>
        <SideMenu />
      </div>
    </div>
  );
}
import { Route, Routes, useLocation } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import Story from "../story/Story";
import Search from "../../components/search/Search";
import Auth from "../auth/Auth";

export default function Router() {

    // 현재경로
    const { pathname } = useLocation();

    return (
        <div>
            {pathname !== "/login" && pathname !== "/signup" ? (
                <div className="flex">
                    <div className="w-[20%] border border-l-slate-500">
                        <Sidebar />
                    </div>
                    <div className="w-full">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/username" element={<Profile />} />
                            <Route path="/story" element={<Story />} />
                            <Route path="/search" element={<Search />} />
                        </Routes>
                    </div>
                </div>
            ) : (
                <Routes>
                    <Route path="/signup" element={<Auth />} />
                    <Route path="/login" element={<Auth />} />
                </Routes>
            )}
        </div>
    );
}

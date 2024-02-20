import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Home from "../home/Home";
import Profile from "../profile/Profile";
import Story from "../story/Story";
import Search from "../../components/search/Search";

export default function Router() {
    return (
        <div>
            <div className="flex">
                <div className="w-[20%] border border-l-slate-500">
                    <Sidebar />
                </div>
                <div className="w-full">
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/username' element={<Profile />} />
                        <Route path='/story' element={<Story />} />
                        <Route path='/search' element={<Search />} />
                    </Routes>
                </div>
            </div>
        </div>
    )
}
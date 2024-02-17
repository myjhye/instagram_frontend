import { Route, Routes } from "react-router-dom";
import Sidebar from "../../components/sidebar/Sidebar";
import Home from "../home/Home";

export default function Router() {
    return (
        <div>
            <div className="flex">
                <div className="w-[20%] border border-l-slate-500">
                    <Sidebar />
                </div>
                <div>
                    <Routes>
                        <Route 
                            path='/' 
                            element={<Home />}
                        >

                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}
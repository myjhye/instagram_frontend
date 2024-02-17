import {IoReorderThreeOutline} from "react-icons/io5";
import { menu } from "./SidebarConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Sidebar() {

    const [activeTab, setActiveTab] = useState();

    const navigate = useNavigate();

    const handleTabClick = (title) => {
        // 클릭된 아이콘
        setActiveTab(title);
        
        if (title === "홈") {
            navigate("/");
        }
        else if (title === "프로필") {
            navigate("/username");
        }
        
    };

    return (
        <div className="sticky top-0 h-[100vh]">
            <div className="flex flex-col justify-between h-full px-10">
                {/* 플랫폼아이콘 & 탭 */}
                <div>
                    <div className="pt-10">
                        <img 
                            className="w-40" 
                            src="https://i.imgur.com/zqpwkLQ.png" 
                            alt="" 
                        />
                    </div>
                    <div className="mt-10">
                        {menu.map((item) => (
                            <div
                                onClick={() => handleTabClick(item.title)} 
                                className="flex items-center mb-5 cursor-pointer text-lg"
                            >
                                {/* 탭 아이콘 */}
                                { activeTab === item.title ? item.isActiveIcon : item.icon}
                                {/* 탭 이름 */}
                                <p className={`${activeTab === item.title ? "font-bold" : ""}`}>{item.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
                {/* 더 보기 */}
                <div className="flex items-center cursor-pointer pb-10">
                    <IoReorderThreeOutline className="text-2xl" />
                    <p className="ml-5">더 보기</p>
                </div>
            </div>
        </div>
    )
}
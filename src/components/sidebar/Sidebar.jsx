import { IoReorderThreeOutline } from "react-icons/io5";
import { menu } from "./SidebarConfig";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreatePostModal from "../post/CreatePostModal";
import { useDisclosure } from "@chakra-ui/react";

export default function Sidebar() {

    const [activeTab, setActiveTab] = useState();

    const navigate = useNavigate();

    const { isOpen, onOpen, onClose }  = useDisclosure();

    const handleTabClick = (title) => {
        // 클릭된 아이콘
        setActiveTab(title);
        
        // 네비게이션
        if (title === "홈") {
            navigate("/");
        }
        else if (title === "프로필") {
            navigate("/username");
        }
        else if (title === "만들기") {
            onOpen();
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

            {/* '만들기' 클릭 시 열리는 모달 (게시물 생성 모달) */}
            <CreatePostModal 
                onClose={onClose}
                isOpen={isOpen}
            />
        </div>
    )
}
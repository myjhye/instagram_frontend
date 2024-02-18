import { AiOutlineTable, AiOutlineUser } from 'react-icons/ai';
import { RiVideoAddLine } from 'react-icons/ri';
import { BiBookmark } from 'react-icons/bi';
import { useState } from 'react';
import ReqUserPostCard from './ReqUserPostCard';

export default function ReqUserPostPart() {
    const [activeTab, setActiveTab] = useState();

    const tabs = [
        {
            tab: "게시물",
            icon: <AiOutlineTable />,
            activeTab: ""
        },
        {
            tab: "릴스",
            icon: <RiVideoAddLine />,
            activeTab: ""
        },
        {
            tab: "저장됨",
            icon: <BiBookmark />,
            activeTab: ""
        },
        {
            tab: "태그됨",
            icon: <AiOutlineUser />,
            activeTab: ""
        },
    ]

    return (
        <div>
            <div className='flex space-x-14 border-t relative'>
                {tabs.map((item) => (
                    <div
                        onClick={() => setActiveTab(item.tab)} 
                        className={`${
                            activeTab === item.tab ? "border-t border-black" : "opacity-60"
                            } flex items-center cursor-pointer py-2 text-sm`}
                    >
                        <p>{item.icon}</p>
                        <p>{item.tab}</p>
                    </div>
                ))}
            </div>
            <div>
                <div className='flex flex-wrap'>
                    {[1,1,1,1].map((item) => (
                        <ReqUserPostCard />
                    ))}
                </div>
            </div>
        </div>
    )
}
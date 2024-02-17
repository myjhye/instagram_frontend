import {
    AiOutlineHome,
    AiFillHome,
    AiOutlineSearch,
    AiOutlineCompass,
    AiFillCompass,
    AiOutlineMessage,
    AiFillMessage,
    AiOutlineHeart,
    AiFillHeart,
    AiOutlinePlusCircle,
    AiFillPlusCircle,
} from 'react-icons/ai';
import { RiVideoLine, RiVideoFill } from 'react-icons/ri';
import { CgProfile } from 'react-icons/cg';

export const menu = [
    {
        title: "홈",
        icon: <AiOutlineHome className="text-2xl mr-5" />,
        isActiveIcon: <AiFillHome className="text-2xl mr-5" />
    },
    {
        title: "검색",
        icon: <AiOutlineSearch className="text-2xl mr-5" />,
        isActiveIcon: <AiOutlineSearch className="text-2xl mr-5" />
    },
    {
        title: "탐색 탭",
        icon: <AiOutlineCompass className="text-2xl mr-5" />,
        isActiveIcon: <AiFillCompass className="text-2xl mr-5" />
    },
    {
        title: "릴스",
        icon: <RiVideoLine className="text-2xl mr-5" />,
        isActiveIcon: <RiVideoFill className="text-2xl mr-5" />
    },
    {
        title: "메시지",
        icon: <AiOutlineMessage className="text-2xl mr-5" />,
        isActiveIcon: <AiFillMessage className="text-2xl mr-5" />
    },
    {
        title: "알람",
        icon: <AiOutlineHeart className="text-2xl mr-5" />,
        isActiveIcon: <AiFillHeart className="text-2xl mr-5" />
    },
    {
        title: "만들기",
        icon: <AiOutlinePlusCircle className="text-2xl mr-5" />,
        isActiveIcon: <AiFillPlusCircle className="text-2xl mr-5" />
    },
    {
        title: "프로필",
        icon: <CgProfile className="text-2xl mr-5" />,
        isActiveIcon: <CgProfile className="text-2xl mr-5" />
    },
    
]
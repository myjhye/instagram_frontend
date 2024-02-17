import { TbCircleDashed } from "react-icons/tb";

export default function ProfileUserDetails() {
    return (
        <div className="py-10 w-full">
            <div className="flex items-center">
                <div className="w-[15%]">
                    <img className='w-32 h-32 rounded-full' src="https://media.istockphoto.com/id/1266509972/vector/french-bulldog-in-profile-funny-little-dog-flat-style-cartoon-character-of-brown-color.jpg?s=170667a&w=0&k=20&c=0HFBJg8LcEv96UjvPHu8jHWU7q-iGo3dliazKaQzTzA=" alt="" />
                </div>
                <div className="space-y-5">
                    <div className="flex space-x-10 items-center">
                        <p>username</p>
                        <button>프로필 편집</button>
                        <TbCircleDashed />
                    </div>
                    <div className="flex space-x-10">
                        <div>
                            <span>게시물</span>
                            <span className="font-semibold ml-2">10</span>
                        </div>
                        <div>
                            <span>팔로워</span>
                            <span className="font-semibold ml-2">12</span>
                        </div>
                        <div>
                            <span>팔로우</span>
                            <span className="font-semibold ml-2">14</span>
                        </div>
                    </div>
                    <div>
                        <p className="font-semibold">Full name</p>
                        <p className="font-thin text-sm">biography</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
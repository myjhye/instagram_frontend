import { useState } from 'react';
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import { RiSendPlaneLine } from 'react-icons/ri';
import "./PostCard.css";
import CommentModal from '../comment/CommentModal';
import { useDisclosure } from '@chakra-ui/react';

export default function PostCard() {
    const [showDropDown, setShowDropDown] = useState(false);
    const [isPostLiked, setIsPostLiked] = useState(false);
    const [isPostSaved, setIsPostSaved] = useState(false);

    // 모달 설정
    const { isOpen, onOpen, onClose } = useDisclosure();

    // 게시물 설정 열기
    const handleClick = () => {
        setShowDropDown(!showDropDown);
    };

    // 좋아요
    const handlePostLike = () => {
        setIsPostLiked(!isPostLiked);
    };

    // 북마크
    const handlePostSave = () => {
        setIsPostSaved(!isPostSaved);
    };

    // 모달 열기
    const handleOpenCommentModal = () => {
        onOpen();
    };

    return (
        <div>
            <div className='border rounded-md w-full'>
                <div className='flex justify-between items-center w-full py-4 px-5'>
                    {/* 업로드한 유저 정보 */}
                    <div className="flex items-center">
                        <img className='h-12 w-12 rounded-full' src="https://media.istockphoto.com/id/1266509972/vector/french-bulldog-in-profile-funny-little-dog-flat-style-cartoon-character-of-brown-color.jpg?s=170667a&w=0&k=20&c=0HFBJg8LcEv96UjvPHu8jHWU7q-iGo3dliazKaQzTzA=" alt="" />
                        <div className="pl-2">
                            <p className="font-semibold text-sm">username</p>
                            <p className="font-thin text-sm">location</p>
                        </div>
                    </div>
                    {/* 게시물 설정 */}
                    <div className='dropdown'>
                        <BsThreeDots className='dots' onClick={handleClick} />
                        <div className='dropdown-content'>
                            {showDropDown && <p className='bg-black text-white py-1 px-4 rounded-md cursor-pointer'>Delete</p>}
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <img className='w-full' src="https://brandyarn.co.kr/web/product/big/202106/c25bd4da7e004a5a4fe1927c1af4022a.jpg" alt="" />
                </div>
                <div className='flex justify-between items-center w-full px-5 py-4'>
                    <div className='flex items-center space-x-2'>
                        {/* 좋아요 */}
                        {isPostLiked 
                            ? <AiFillHeart 
                                className='text-2xl hover:opacity-50 cursor-pointer text-red-700' 
                                onClick={handlePostLike} 
                              /> 
                            : <AiOutlineHeart 
                                className='text-2xl hover:opacity-50 cursor-pointer' 
                                onClick={handlePostLike} 
                              />
                        }
                        {/* 코멘트 */}
                        <FaRegComment 
                            onClick={handleOpenCommentModal} 
                            className='text-xl hover:opacity-50 cursor-pointer' 
                        />
                        {/* 네비게이션 */}
                        <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
                    </div>
                    <div>
                        {/* 북마크 */}
                        {isPostSaved 
                            ? <BsBookmarkFill 
                                className='text-xl hover:opacity-50 cursor-pointer' 
                                onClick={handlePostSave} 
                              /> 
                            : <BsBookmark 
                                className='text-xl hover:opacity-50 cursor-pointer' 
                                onClick={handlePostSave} 
                              />
                        }
                    </div>
                </div>
                <div className='w-full py-2 px-5'>
                    <p>좋아요 10개</p>
                    <p className='opacity-50 py-2 cursor-pointer'>댓글 3개 모두 보기</p>
                </div>
                {/* 댓글 입력창 */}
                <div className='border border-t w-full'>
                    <div className='flex w-full items-center py-15 px-5'>
                        <BsEmojiSmile />
                        <input className='commentInput flex-1 ml-2' type="text" placeholder='댓글 달기...' />
                    </div>
                </div>
            </div>

            {/* 코멘트 클릭 시 나타나는 게시물 모달 */}
            <CommentModal 
                handlePostLike={handlePostLike} 
                onClose={onClose}
                isOpen={isOpen}
                handlePostSave={handlePostSave}
                isPostLiked={isPostLiked}
                isPostSaved={isPostSaved} 
            />
        </div>
    )
}

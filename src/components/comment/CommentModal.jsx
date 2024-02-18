import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { BsBookmark, BsBookmarkFill, BsEmojiSmile, BsThreeDots } from "react-icons/bs";
import CommentCard from "./CommentCard";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { RiSendPlaneLine } from "react-icons/ri";
import "./CommentModal.css";

export default function CommentModal({ onClose, isOpen, isPostLiked, isPostSaved, handlePostLike, handlePostSave }) {
    return (
        <div>
            <Modal size={"4xl"} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay>
                    <ModalContent>
                        <ModalBody>
                            <div className="flex h-[75vh]">
                                <div className="w-[45%] flex flex-col justify-center">
                                    <img 
                                        className="max-h-hull w-full" 
                                        src="https://brandyarn.co.kr/web/product/big/202106/c25bd4da7e004a5a4fe1927c1af4022a.jpg" 
                                        alt="" 
                                    />
                                </div>
                                <div className="w-[55%] pl-10 relative">
                                    <div className="flex justify-between items-center py-5">
                                        <div className="flex items-center">
                                            <div>
                                                <img 
                                                    className='w-9 h-9 rounded-full' 
                                                    src="https://media.istockphoto.com/id/1266509972/vector/french-bulldog-in-profile-funny-little-dog-flat-style-cartoon-character-of-brown-color.jpg?s=170667a&w=0&k=20&c=0HFBJg8LcEv96UjvPHu8jHWU7q-iGo3dliazKaQzTzA=" 
                                                    alt="" 
                                                />
                                            </div>
                                            <div className="ml-2">
                                                <p>username</p>
                                            </div>
                                        </div>
                                        <BsThreeDots />
                                    </div>
                                    <hr />
                                    <div className="comment">
                                        {[1,1,1,1,1,1,1].map(() => (
                                            <CommentCard />
                                        ))}
                                    </div>

                                    <div className="absolute bottom-0 w-[90%]">
                                        <div className='flex justify-between items-center w-full py-4'>
                                            <div className='flex items-center space-x-2'>
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
                                                <FaRegComment className='text-xl hover:opacity-50 cursor-pointer' />
                                                <RiSendPlaneLine className='text-xl hover:opacity-50 cursor-pointer' />
                                            </div>
                                            <div>
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
                                        <div className="w-full py-2">
                                            <p>좋아요 3개</p>
                                            <p className="opacity-50 text-sm">3일 전</p>
                                        </div>
                                        <div className='flex items-center w-full'>
                                            <BsEmojiSmile />
                                            <input 
                                                className='commentInputs' 
                                                type="text" 
                                                placeholder='댓글 달기...' 
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ModalBody>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </div>
    )
}
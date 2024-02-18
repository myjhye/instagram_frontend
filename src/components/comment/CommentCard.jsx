import { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

export default function CommentCard() {

    const [isCommentLike, setIsCommentLike] = useState();

    const handleCommentLike = () => {
        setIsCommentLike(!isCommentLike);
    };

    return (
        <div>
            <div className="flex items-center justify-between py-5">
                <div className="flex items-center">
                    <div>
                        <img className="w-9 h-9 rounded-full" src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSILNEphLP_0BXWUMxp-on8gvX9LMsmZ4Xgn_2x7U1nNcCMf_P_" alt="" />
                    </div>
                    <div className="ml-3">
                        <p>
                            <span className="font-semibold">username</span>
                            <span className="ml-2">nice post!</span>
                        </p>
                        <div className="flex items-center space-x-3 text-xs opacity-60 pt-2">
                            <span>3분</span>
                            <span>좋아요 3개</span>
                        </div>
                    </div>
                </div>
                {isCommentLike 
                    ? <AiFillHeart 
                        className="text-xs hover:opacity-50 cursor-pointer text-red-700" 
                        onClick={handleCommentLike} 
                      /> 
                    : <AiOutlineHeart 
                        className="text-xs hover:opacity-50 cursor-pointer" 
                        onClick={handleCommentLike} 
                      />
                }
            </div>
        </div>
    )
}
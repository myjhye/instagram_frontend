import { AiFillHeart } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import "./ReqUserPostCard.css";

export default function ReqUserPostCard() {
    return (
        <div className="p-2">
            <div className="post w-60 h-60">
                <img src="https://d2gfz7wkiigkmv.cloudfront.net/pickin/2/1/2/rnQniJf1R16JmuHEoA2GSw" alt="" />
                <div className="overlay">
                    <div className="overlay-text flex justify-between">
                        <div>
                            <AiFillHeart /> 
                            <span>10</span>
                        </div>
                        <div>
                            <FaComment />
                            <span>30</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
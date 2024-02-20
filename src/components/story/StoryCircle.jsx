import { useNavigate } from "react-router-dom"

export default function StoryCircle() {

    const navigate = useNavigate();

    const handleNavigate = () => {
        navigate('/story')
    };

    return (
        <div 
            onClick={handleNavigate} 
            className="cursor-pointer flex flex-col items-center"
        >
            <img className="w-16 h-16 rounded-full" src="https://img3.daumcdn.net/thumb/R658x0.q70/?fname=https://t1.daumcdn.net/news/202303/02/bemypet/20230302170052142ncnl.jpg" alt="" />
            <p>username</p>
        </div>
    )
}
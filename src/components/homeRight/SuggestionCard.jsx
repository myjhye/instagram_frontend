export default function SuggestionCard() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                <img
                    className="w-9 h-9 rounded-full" 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfSBhjJoYQ11rAgDUMFaAg3ztP4z_LziFGyA&usqp=CAU" 
                    alt="" 
                />
                <div className="ml-2">
                    <p className="text-sm font-semibold">username</p>
                    <p className="text-sm opacity-70">회원님을 팔로우합니다</p>
                </div>
            </div>
            <p className="text-blue-700 text-sm font-semibold">팔로우</p>
        </div>
    )
}
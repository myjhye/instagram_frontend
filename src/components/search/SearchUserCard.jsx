export default function SearchUserCard() {
    return (
        <div className="py-2 cursor-pointer">
            <div className="flex items-center">
                <img
                    className="w-10 h-10 rounded-full" 
                    src="https://media.istockphoto.com/id/1266509972/vector/french-bulldog-in-profile-funny-little-dog-flat-style-cartoon-character-of-brown-color.jpg?s=170667a&w=0&k=20&c=0HFBJg8LcEv96UjvPHu8jHWU7q-iGo3dliazKaQzTzA=" 
                    alt="" 
                />
                <div>
                    <p>username</p>
                    <p className="opacity-70">full name</p>    
                </div>
            </div>
        </div>
    )
}
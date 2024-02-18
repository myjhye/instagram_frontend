import SuggestionCard from "./SuggestionCard";

export default function HomeRight() {
    return (
        <div>
            <div>
                <div className="flex justify-between items-center">
                    <div className="flex items-center">
                        <div>
                            <img
                                className="w-12 h-12 rounded-full" 
                                src="https://media.istockphoto.com/id/1266509972/vector/french-bulldog-in-profile-funny-little-dog-flat-style-cartoon-character-of-brown-color.jpg?s=170667a&w=0&k=20&c=0HFBJg8LcEv96UjvPHu8jHWU7q-iGo3dliazKaQzTzA=" 
                                alt="" 
                            />
                        </div>
                        <div>
                            <p className="font-semibold text-sm">username</p>
                        </div>
                    </div>
                    <div>
                        <p className="text-blue-700 font-semibold text-sm">전환</p>
                    </div>
                </div>
                <div className="space-y-5 mt-10">
                    {[1,1,1,1,1,1].map((item) => (
                        <SuggestionCard />
                    ))}
                </div>
            </div>
        </div>
    )
}
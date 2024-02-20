import "./Search.css";
import SearchUserCard from "./SearchUserCard";

export default function Search() {
    return (
        <div className="searchContainer">
            <div className="px-3 pb-5">
                <h1 className="text-xl pb-5">검색</h1>
                <input 
                    type="text"
                    placeholder="검색"
                    className="searchInput" 
                />
            </div>
            
            <hr />
            
            <div className="px-3 pt-5">
                {[1,1,1,1].map((item, index) => (
                    <SearchUserCard key={index} />
                ))}
            </div>
        </div>
    );
}

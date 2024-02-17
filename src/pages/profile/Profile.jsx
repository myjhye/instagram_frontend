import ProfileUserDetails from "../../components/profile/ProfileUserDetails";
import ReqUserPostPart from "../../components/profile/ReqUserPostPart";

export default function Profile() {
    return (
        <div className="px-20">
            <div>
                <ProfileUserDetails />
            </div>
            <div>
                <ReqUserPostPart />
            </div>
        </div>
    )
}
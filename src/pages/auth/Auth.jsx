import { useLocation } from "react-router-dom";
import Signin from "../../components/register/Signin";
import Signup from "../../components/register/Signup";

export default function Auth() {

    // 현재경로
    const { pathname } = useLocation();

    return (
        <div>
            <div className="flex justify-center items-center h-screen">
                <div>
                    <div className="h-[35.3rem] w-[36rem]">
                        <img
                            className="h-full w-full " 
                            src="https://user-images.githubusercontent.com/35039342/55468409-ef956b80-5620-11e9-9906-7e8ca89b4b49.png"
                            alt="" 
                        />
                        <div className="mobileWallpaper">

                        </div>
                    </div>
                </div>
                <div className="w-[40vw] lg:w-[25vw]">
                    {pathname === "/login" ? (
                        <Signin />
                    ) : (
                        <Signup />
                    )}
                </div>
            </div>
        </div>
    )
}
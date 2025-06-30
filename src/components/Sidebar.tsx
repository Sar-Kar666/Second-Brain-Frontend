import { Logo } from "../icons/Logo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { SidebarItem } from "./SidebarItems";

export function Sidebar(){

    return <div className="h-screen bg-white border-r-4 border-gray-100   w-76 fixed left-0 top-0 pl-6 ">
        <div>
            <div className="flex text-2xl pt-4 items-center">
                <div className=" p-1 pr-2 text-purple-600">
                    <Logo/>
                </div>
                Brainly
            </div>
        </div>
        <div className="pt-9 pl-10 ">
            <SidebarItem text="Twitter" icon={<TwitterIcon/>}/>
            <SidebarItem text="Youtube" icon={<YoutubeIcon/>}/>

        </div>
    </div>
}
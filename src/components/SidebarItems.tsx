import type { ReactElement } from "react";


export function SidebarItem({ text, icon }: {
    text: String;
    icon: ReactElement;
}) {
    return <div className="flex items-center text-gray-500 py-2 cursor-pointer hover:bg-gray-100 ">
        <div className="pr-2">
            {icon}
        </div>
        <div>
            {text}
        </div>

    </div>
}
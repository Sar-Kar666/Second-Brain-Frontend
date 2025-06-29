import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

export function CreateContentModal({open,onClose}){
    return<div>
   {open && <div className=" w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm bg-gray-500/40 z-40">
    <div className=" flex flex-col justify-center   shadow rounded ">

        <span className=" bg-white opacity-100 rounded">
            <div className="flex justify-end p-1 cursor-pointer">
                <div onClick={onClose} >
                    <CrossIcon/>
                </div>
                
            </div>
            <div >
                <Input placeholder={"Title"}/>
                <Input  placeholder={"Link"}/> 
            </div>  
            <div className="flex justify-center p-2 ">
                <Button variant="primary" text="Submit" />
            </div>
            
        </span>
        </div>
        
    </div>} 
    </div>
}

function Input({onChange,placeholder}:{onChange:()=>void}){
    return <div>
        {/* @ts-ignore */}
        <input type={"text"}  placeholder={placeholder} className="px-4 py-2 border rounded m-2" onChange={onchange}/>
    </div>
}
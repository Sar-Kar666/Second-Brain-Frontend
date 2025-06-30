import { CrossIcon } from "../icons/CrossIcon";
import { Button } from "./Button";

export function CreateContentModal({open,onClose}){
    return<div>
   {open && <div className=" w-screen h-screen fixed top-0 left-0 flex justify-center items-center backdrop-blur-sm bg-gray-500/40 z-40">
    <div className=" flex flex-col justify-center   shadow rounded-2xl ">

        <span className=" bg-white opacity-100 h-60 w-100 border-0 rounded-2xl">
             <div className="flex justify-end pr-3 pt-1.5 cursor-pointer ">
                <div onClick={onClose} >
                    <CrossIcon/>
                </div>
                
            </div>
            <div className="flex justify-center pb-1 text-lg ">
                Add Content
            </div>
           
            <div  >
                <div className="flex justify-center">
                    <Input placeholder={"Title"}/>
                </div>
                <div className="flex justify-center">
                    <Input  placeholder={"Link"}/> 
                </div>
                
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
        <input type={"text"}  placeholder={placeholder} className="px-12 py-2 border rounded-2xl m-2" onChange={onchange}/>
    </div>
}
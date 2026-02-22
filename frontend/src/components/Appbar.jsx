import { Button } from "./Button"
import { useNavigate } from "react-router-dom"
export function Appbar({name}){
    const navigate = useNavigate()
    return <div className="p-1 px-8 items-center border-gray-300 rounded-xl flex justify-between border ">
        <div>PayTM App</div>
        <div className="flex items-center gap-2">
            <div><Button label="logOut" onClick={
                async ()=>{
                    localStorage.removeItem("token" )
                    navigate("/signin")
                }
            } /></div>
                <div className="bg-blue-200 p-1  h-8 w-8 flex justify-center items-center rounded-4xl">
                    {name}
                </div>
        </div>
    </div>
}
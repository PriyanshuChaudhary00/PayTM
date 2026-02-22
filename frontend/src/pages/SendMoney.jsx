import { Title } from "../components/Title"
import { UserInfoGreen } from "../components/UserInfoGreen"
import { useSearchParams } from "react-router-dom"
import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export function SendMoney(){

    const navigate = useNavigate()
    const [searchParams] = useSearchParams()
    const [amount , setAmount] = useState(0)
    const id = searchParams.get("id")

    return <div className="rounded-xl  bg-white  p-15 text-xl">
        <div className="mx-auto"><Title label = "Send Money"/></div>
        <div className="m-2 mt-7 pt-3 ">
            <UserInfoGreen img={searchParams.get("name")[0].toUpperCase()} name={searchParams.get("name")} />
        </div>
        <div className="m-2 mt-3 text-gray-600" >Amount (in Rs)</div>
        <div className="m-2 ">
            <input onChange={(e)=>{
                setAmount(e.target.value)
            }} className="p-1 px-3 border border-gray-400 rounded" type="text" placeholder="Enter Amount"/>
        </div>
            <div className="m-2 mt-7 ">
                <button onClick={async ()=>
                    {
                        await axios.post("http://localhost:3000/api/v1/account/transfer",{
                            to : id,
                            amount:amount,
                        }, {
                            headers:{
                                Authorization: "Bearer "+localStorage.getItem("token")
                            }
                        })
                        navigate("/dashboard")
                    }
                } className="bg-green-500 cursor-pointer rounded-md w-full p-2 px-4 text-white" type="button">Initiate Transfer</button>
            </div>
    </div>
}
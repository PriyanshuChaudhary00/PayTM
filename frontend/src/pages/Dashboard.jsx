import { User } from "../components/User";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance"
import axios from "axios"
import {  useState , useEffect} from "react";

export function Dashboard(){
    const [amount , setAmount] = useState(0)
    async function find(){
        const url = "http://localhost:3000/api/v1/account/balance"
        const money = await axios.get(url,{
            headers:{
                Authorization: "Bearer "+localStorage.getItem("token")
            }
        })
        setAmount(money.data.balance)
    }
    useEffect(()=>{
        find()
    },[])

    return <div className="bg-white min-w-screen min-h-screen">
        <div className="m-10 mt-25   ">
            <Appbar name="U" />
            <Balance amount={amount.toFixed(2)} />
            <User />
        </div>
    </div>
}
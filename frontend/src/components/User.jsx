// import { UserInfoBlue } from "./UserInfoBlue"
import { useState , useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
export function User(){
    const [users , setUsers] = useState([])

        async function info(search) {
            const url = `http://localhost:3000/api/v1/user/bulk?filter=${search}`
            const response = await axios.get(url)

            console.log(response.data.user[0].firstName)

            setUsers(response.data.user)
        }
        useEffect(()=>{
            info('')
        },[])
  

    return <div>
        <div className="m-2 p-2 mb-1 pb-0 font-bold">Users</div>
        <div className="m-2 mt-1 pt-0 p-2">
            <input onChange={e=>{
                        info(e.target.value)
            }} className="border-gray-300 border w-full p-1 px-3 rounded-md" type="text" placeholder="Search users..." />
        </div>
        {users.map(u => (
            <UserInfoBlue 
                user = {u}
                img={u.firstName[0].toUpperCase()}
                name={u.firstName+" "+u.lastName}
            />
            ))}
    </div>
}

function UserInfoBlue({img , name , user}){
    const navigate = useNavigate()
    return <div className="flex items-center justify-between ">

            <div className="flex gap-3  items-center">
                <div className="bg-blue-400 text-white text-xl  h-10 w-10 justify-center flex rounded-full items-center">{img}</div>
                <div className="text-xl font-medium">{name}</div>
            </div>
            <div>
                <button onClick={(e)=>{
                    navigate("/sendmoney?id="+ user._id + "&name=" + user.firstName )
                }} className="p-2 m-2 cursor-pointer bg-gray-800 px-4 hover:bg-gray-900 rounded-md text-gray-200 hover:text-white">Send Money</button>
            </div>
    </div>
}
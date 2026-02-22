import {Title} from "../components/Title"
import {Button} from "../components/Button"
import {Input} from "../components/Input"
import { SubTitle } from "../components/SubTitle"
import { NextPage } from "../components/NextPage"
import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export function Signin(){
        const [username, setUsername] = useState("")
        const [password, setPassword] = useState("")
        const navigate = useNavigate() 

    return <div> 
        <div className=" p-4 py-6 m-10 rounded-2xl border-1 border-gray-200 bg-white w-[350px] mx-auto flex flex-col ">
            <Title label="Sign in"/>
            <SubTitle label="Enter your information to log in to your account" />
            
            <Input onChange={e=>{
                setUsername(e.target.value)
            }} title = "Email" place = "helloworld82025840@gmail.com" />

            <Input onChange={e=>{
                setPassword(e.target.value)
            }} title = "password" place = "123456" />

            <Button  label = "Sign in" onClick={
                async ()=>{
                const response = await axios.post("http://localhost:3000/api/v1/user/signin", {
                username: username,
                password: password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
                }
            }/>
            <NextPage name="You Don't Have Account " btn=" Sign up" to="/signup" />
        </div>
    </div>
}
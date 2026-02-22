import {Title} from "../components/Title"
import {Button} from "../components/Button"
import {Input} from "../components/Input"
import { SubTitle } from "../components/SubTitle"
import { NextPage } from "../components/NextPage"
import { useState } from "react"
import axios from "axios";
import { useNavigate } from "react-router-dom"

export function Signup(){
    const [Firstname , setFirstName] = useState("")
    const [LastName , setLastName] = useState("")
    const [Password , setPassword] = useState("")
    const [Email , setEmail] = useState("")
    const navigate = useNavigate();

    return <div className="p-4 py-6 border-1 border-gray-200 m-10 items-center rounded-2xl bg-white w-[350px] mx-auto flex flex-col ">
        <Title label="Sign Up"/>
        <SubTitle label="Enter your information to create account" />
        
        <Input onChange={e=>{
                setFirstName(e.target.value)            
        }} title = "First Name" place = "John" />
       
        <Input onChange={e=>{
                setLastName(e.target.value)            
        }} title = "Last Name" place = "Deo" />
        <Input onChange={e=>{
                setEmail(e.target.value)            
        }} title = "Email" place = "helloworld82025840@gmail.com" />
        <Input onChange={e=>{
                setPassword(e.target.value)            
        }} title = "password" place = "123456" />
         <div className="pt-4">
          <Button onClick={async () => {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                username: Email,
                firstName: Firstname,
                lastName: LastName,
                password: Password
            });
            localStorage.setItem("token", response.data.token)
            navigate("/dashboard")
          }} label={"Sign up"} />
        </div>

        <NextPage name="Already have account " btn=" Sign in" to="/signin" />

    </div>
}
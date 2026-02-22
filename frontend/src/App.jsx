import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";

function App() {

  return (
    <div className="min-h-screen min-w-screen  flex justify-center bg-blue-50 items-center">
      <BrowserRouter>
        <Routes>
            <Route path = "/signup" element = {<Signup/>} />
            <Route path = "/signin" element = {<Signin/>} />
            <Route path = "/dashboard" element = {<Dashboard/>} />
            <Route path = "/sendmoney" element = {<SendMoney/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

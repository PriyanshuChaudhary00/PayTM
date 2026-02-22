import { Link } from "react-router-dom";
export function NextPage({name , btn , to}){
    return <div className="flex justify-center gap-[5px] p-2 pb-3">
        <div>
            {name}
        </div>
       <div className="underline">
            <Link to={to}>
                {btn}
            </Link>
       </div>
    </div>
}
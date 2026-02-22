export function Input({title , place , onChange}){
    return <div className="p-2 mx-auto">
        <div className="">
            {title}
        </div>
        <input onChange={onChange}  className="invalid:text-gray-500 valid:text-black m-1 border-1 px-[10px] py-[5px]  border-gray-500 rounded-md w-[300px]" type="text" placeholder={place}/>
    </div>
}
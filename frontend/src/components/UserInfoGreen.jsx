export function UserInfoGreen({img , name}){
    return <div className="flex gap-3  items-center">
        <div className="bg-green-500  text-white text-xl  h-10 w-10 justify-center flex rounded-full items-center">{img}</div>
        <div className="text-xl font-medium">{name}</div>
    </div>
}
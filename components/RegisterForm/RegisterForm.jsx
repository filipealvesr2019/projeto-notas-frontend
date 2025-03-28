import { useState } from "react"

export default function RegisterForm(){
    const [csrfToken, setCsrfToken] = useState("");

    useEffect(() => {
        const fetchCsfr = async () => {
            try{
                const res = await fetch("", {credentials: "include"});
            }catch(error){

            }
        }
    })
    return (
        <form action="">
        </form>
    )
}
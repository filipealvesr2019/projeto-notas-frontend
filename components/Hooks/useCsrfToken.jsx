import { useEffect, useState } from "react";

export default function useCsrfToken(){
    const [csrfToken, setCsrfToken] = useState("");

    useEffect(() => {
        const fetchCsfr = async () => {
            try{
                 const res = await fetch("http://localhost:3000/csrf-token", 
                    {   method: "GET",
                        credentials: "include"
                    })
                const data = await res.json();
                setCsrfToken(data.csrfToken)
                console.log('CSRF Token:', data.csrfToken)
            }catch(error){
                console.log('Erro ao buscar', error);
            }
        }
        fetchCsfr()
    }, [])
    return csrfToken;
}
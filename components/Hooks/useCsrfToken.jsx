import { useEffect } from "react";
import { useFormState } from "react-dom";

export default function useCsrfToken(){
    const [csrfToken, setCsrfToken] = useFormState("");

    useEffect(() => {
        const fetchCsfr = async () => {
            try{
                const res = await fetch("", {credentials: "include"});
                const data = await res.json();
                setCsrfToken(data.csrfToken)
            }catch(error){
                console.log('Erro ao buscar', error);
            }
        }
        fetchCsfr()
    }, [])
    return csrfToken
}
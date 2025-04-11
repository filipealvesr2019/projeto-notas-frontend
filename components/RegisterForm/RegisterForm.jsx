import { useState } from "react"
import useCsfrToken from '../Hooks/useCsrfToken'
export default function RegisterForm(){
    const csrfToken = useCsfrToken();
    const [nome, setNome] = useState("")
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();

        try{
            const res = await fetch('', {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "csrf-token": csrfToken
                },
                body: JSON.stringify({nome, email, senha })
            });

            const data = await res.json();
            if(res.ok){
                setMensagem("Registro com sucesso!");
            }

        }catch(error){
            console.log(error)
        }
    } 
    return (
        <form action="">
        </form>
    )
}
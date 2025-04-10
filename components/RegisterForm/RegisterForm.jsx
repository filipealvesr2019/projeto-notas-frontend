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
                method: "POST"
            })

        }catch(error){
            console.log(error)
        }
    } 
    return (
        <form action="">
        </form>
    )
}
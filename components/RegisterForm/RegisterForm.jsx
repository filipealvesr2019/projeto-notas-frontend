import { useState } from "react"
import useCsfrToken from '../Hooks/useCsrfToken'
export default function RegisterForm(){
    const csrfToken = useCsfrToken();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");
    return (
        <form action="">
        </form>
    )
}
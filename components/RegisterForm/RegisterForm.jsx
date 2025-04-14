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
                setMensagem("✅ Registro com sucesso!");
                setNome("");
                setEmail("");
                setSenha("");
            } else {
                setMensagem("❌ " + (data.errors ? data.errors[0].msg : data.error) || 'erro ao registrar' )
            }

        }catch(error){
            console.log(error)
            setMensagem("❌ Erro ao registrar");

        }
    } 
    return (
        <form onSubmit={handleRegister}>
            <h2>Registrar</h2>
            <div>
                <label htmlFor="">Nome</label>
                
            </div>
        </form>
    )
}
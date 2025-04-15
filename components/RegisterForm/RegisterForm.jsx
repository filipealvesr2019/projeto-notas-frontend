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
            {mensagem && <p>{mensagem}</p>}
            <h2>Registrar</h2>
            <div>
                <label>Nome</label>
                <input type="text"  value={nome} onChange={(e) => setNome(e.target.value)} required/>
                
            </div>
            <div>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </div>
            <div>
                <label>Senha</label>
                <input type="text" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            </div>
        </form>
    )
}
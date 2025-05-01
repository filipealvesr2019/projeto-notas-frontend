"use client"
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
    
        if (!csrfToken) {
            setMensagem("❌ Erro ao registrar: CSRF token não encontrado");
            return;
        }
    
        try {
            const res = await fetch('http://localhost:3000/api/users/register', {
                method: "POST",
                credentials: "include",
                headers: {
                    "Content-Type": "application/json",
                    "csrf-token": csrfToken
                },
                body: JSON.stringify({ nome, email, senha })
            });
    
            // Verifica se a resposta não é OK (status 200)
            if (!res.ok) {
                const errorMessage = await res.text(); // Captura a resposta como texto
                throw new Error(`Erro: ${errorMessage}`);
            }
    
            // Tenta fazer o parse da resposta como JSON
            const data = await res.json();
            setMensagem("✅ Registro com sucesso!");
            setNome("");
            setEmail("");
            setSenha("");
        } catch (error) {
            console.error("Erro na requisição:", error);
            // Adiciona uma mensagem de erro mais útil para o usuário
            setMensagem(`❌ Erro ao registrar: ${error.message || 'Erro desconhecido'}`);
        }
    };
    
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
            <button type="submit" disabled={!csrfToken}>Registrar</button>
        </form>
    )
}
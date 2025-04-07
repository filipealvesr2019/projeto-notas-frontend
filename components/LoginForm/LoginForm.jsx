import {useState } from 'react';
import useCsfrToken from '../Hooks/useCsrfToken';

export default function LoginForm(){
    const csrfToken = useCsfrToken();
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [mensagem, setMensagem] = useState("");

   const handleLogin = async (e) => {
    e.preventDefault();

    try{
        const res = await fetch("http://localhost:3000/api/users/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-type": "aplication/json",
                "csrf-token": csrfToken
            },
            body: JSON.stringify({ email, senha})
        })

    }catch(error){
        console.log(error)
    }
   }
}
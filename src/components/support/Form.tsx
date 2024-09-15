import { useState } from "react"
import emailjs from '../../../node_modules/@emailjs/browser/es/index'

export function Form() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()

        if (name === '' || email === '' || message === '') {
            alert("Preencha todos os campos!! \nFill in all fields!!")
            return
        }

        const templateParams = {
            from_name: name,
            email: email,
            reply_to: name,
            message: message
        }

        emailjs.send("service_dg9sjbg", "template_jjyqkc8", templateParams, "fW6ODjQbqrlm7mE2M")
            .then(() => {
                setName('')
                setEmail('')
                setMessage('')
            })
    }

    return (
        <div className='text-center'>
            <h1 className='text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl font-semibold text-emerald-700 mb-10'>
                Suporte
            </h1>

            <form onSubmit={handleSubmit} className='inline-table tracking-wide pr-4'>
                <input className='w-full px-2 py-2 m-2 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-slate-200 placeholder:text-slate-800' placeholder="Insira seu nome..." type="text" onChange={(e) => setName(e.target.value)} value={name} />

                <input className='w-full px-2 py-2 m-2 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-slate-200 placeholder:text-slate-800' placeholder="Insira seu e-mail..." type="email" onChange={(e) => setEmail(e.target.value)} value={email} />

                <textarea className='w-full px-2 py-5  m-2 rounded-lg shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] bg-slate-200 placeholder:text-slate-800' placeholder="Messagem..." onChange={(e) => setMessage(e.target.value)} value={message}></textarea>

                <button type='submit' className="py-2 m-2 w-full hover:opacity-80 text-white rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-800 font-bold">
                    ENVIAR
                </button>
            </form>

            <p className='text-center py-1 font-bold'>Ou</p>

            <div className="space-x-4 sm:space-x-7 pt-2">
                <button><a href="https://github.com/Francine02" target="_blank">
                    <img src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="github" className=' hover:opacity-80 w-10' />
                </a></button>

                <button><a href="https://www.linkedin.com/in/francine-ccruz/" target="_blank">
                    <img src="https://img.icons8.com/?size=100&id=wWBzvvvi0f5P&format=png&color=000000" alt="linkedin" className=' hover:opacity-80 w-10' />
                </a></button>

                <button><a href="https://wa.me/5551986283397" target="_blank">
                    <img src="https://img.icons8.com/?size=100&id=nAWVyuNAXlYM&format=png&color=000000" alt="whatsapp" className=' hover:opacity-80 w-10' />
                </a></button>
            </div>

        </div>
    )
}
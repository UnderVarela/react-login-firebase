import React, { useContext, useRef } from 'react'
import { useForm } from '../../hooks/useForm'
import { UserContext } from '../../context/UserContext'

export function LoginForm () {
  const { _signInWithEmailAndPassword } = useContext(UserContext)
  const { email, password, handleChange } = useForm({ email: 'homegoma@gmail.com', password: '123456' })
  const emailRef = useRef()
  const passwordRef = useRef()

  const handleSubmit = () => {
    if (!email.length) {
      emailRef.current.focus()
      return
    }
    if (!password.length) {
      passwordRef.current.focus()
      return
    }
    // Envio los datos a papá
    _signInWithEmailAndPassword(email, password)
  }

  return (
    <div className='flex flex-col px-8 pt-6 pb-8 mb-4 bg-white rounded shadow-md'>
      <div className='mb-4'>
        <label className='block mb-2 text-sm font-bold text-grey-darker' htmlFor='email'>
          Correo electrónico
        </label>
        <input className='w-full px-3 py-2 border rounded shadow appearance-none text-grey-darker' id='email' ref={emailRef} onChange={handleChange} name='email' value={email} type='email' placeholder='pepito@gmail.com' />
      </div>
      <div className='mb-6'>
        <label className='block mb-2 text-sm font-bold text-grey-darker' htmlFor='password'>
          Contraseña
        </label>
        <input className='w-full px-3 py-2 mb-3 border rounded shadow appearance-none border-red text-grey-darker' id='password' ref={passwordRef} onChange={handleChange} name='password' value={password} type='password' placeholder='******************' />
        <p className='text-xs italic text-red'>Por favor escribe una contraseña.</p>
      </div>
      <div className='flex items-center justify-start gap-2'>
        <button onClick={handleSubmit} className='px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700' type='button'>
          Acceso
        </button>
      </div>
    </div>
  )
}

LoginForm.propTypes = {}

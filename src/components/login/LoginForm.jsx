import React, { useRef } from 'react'
import { useForm } from '../../hooks/useForm'
import PropTypes from 'prop-types'

export function LoginForm ({ onSubmit, onSignOut }) {
  const { email, password, handleChange } = useForm({ email: '', password: '' })
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
    onSubmit({ email, password })
  }

  return (
    <div className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col'>
      <div className='mb-4'>
        <label className='block text-grey-darker text-sm font-bold mb-2' htmlFor='email'>
          Correo electrónico
        </label>
        <input className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker' id='email' ref={emailRef} onChange={handleChange} name='email' value={email} type='email' placeholder='pepito@gmail.com' />
      </div>
      <div className='mb-6'>
        <label className='block text-grey-darker text-sm font-bold mb-2' htmlFor='password'>
          Contraseña
        </label>
        <input className='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3' id='password' ref={passwordRef} onChange={handleChange} name='password' value={password} type='password' placeholder='******************' />
        <p className='text-red text-xs italic'>Por favor escribe una contraseña.</p>
      </div>
      <div className='flex items-center justify-start gap-2'>
        <button onClick={handleSubmit} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='button'>
          Acceso
        </button>
        <button onClick={() => onSignOut()} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' type='button'>
          Acceso
        </button>
      </div>
    </div>
  )
}

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onSignOut: PropTypes.func.isRequired
}

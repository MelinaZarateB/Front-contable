import './SignUp.css';
import { useState } from 'react';

const SignUp = () => {
    const [ newUser, setNewUser ] = useState({
        name: '',
        cuil: '',
        phone: '',
        address: '',
        province: '',
        city: '', 
        email: '',
        password: ''
    })
    return(
        <section className='parent-sign-up'>
        <div className='container-sign-up-box'>
            <div className="sign-up-box">
            <div className='input-box-sign-up'>
                <input 
                type="text" 
                name="name" 
                id=""
                placeholder='Nombre'
                className="input-field-sign-up"
                autoComplete='off'
                value={newUser.name} />
            </div>
            <div className='input-box-sign-up'>
                <input 
                type="text" 
                name="name" 
                id=""
                placeholder='Cuil'
                className="input-field-sign-up"
                autoComplete='off'
                value={newUser.cuil} />
            </div>
            <div className='input-box-sign-up'>
                <input 
                type="text" 
                name="name" 
                id=""
                placeholder='Telefono'
                className="input-field-sign-up"
                autoComplete='off'
                value={newUser.phone} />
            </div>
            <div className='input-box-sign-up'>
                <input 
                type="text" 
                name="name" 
                id=""
                placeholder='Dirección'
                className="input-field-sign-up"
                autoComplete='off'
                value={newUser.address} />
            </div>
                </div>

                <div className='sign-up-box'>
                <div className='input-box-sign-up'>
                <input 
                type="text" 
                name="name" 
                id=""
                placeholder='Dirección'
                className="input-field-sign-up"
                autoComplete='off'
                value={newUser.address} />
            </div>
            <div className='input-box-sign-up'>
                <input 
                type="text" 
                name="name" 
                id=""
                placeholder='Ciudad'
                className="input-field-sign-up"
                autoComplete='off'
                value={newUser.city} />
            </div>
            <div className='input-box-sign-up'>
                <input 
                type="text" 
                name="name" 
                id=""
                placeholder='Email'
                className="input-field-sign-up"
                autoComplete='off'
                value={newUser.email} />
            </div>
            <div className='input-box-sign-up'>
                <input 
                type="text" 
                name="name" 
                id=""
                placeholder='Contraseña'
                className="input-field-sign-up"
                autoComplete='off'
                value={newUser.password} />
            </div>
                    

                </div>
        </div>
                </section>
    )

}
export default SignUp; 
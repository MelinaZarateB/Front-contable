import './Login.css';

const Login = () => {
    return(
       <section className='login-box'>
        <div className='login-header'></div>
        <header>Ingresar</header>

        <div className='input-box'>
            <input type="text" className='input-field' placeholder='Email' autoComplete='off' required id="" />
        </div>
        <div className='input-box'>
            <input type="text" className='input-field' placeholder='Email' autoComplete='off' required id="" />
        </div>

       </section>
    )

}
export default Login;
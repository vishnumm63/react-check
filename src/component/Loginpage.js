
import { Link } from 'react-router-dom'
import './login.css'
import loginimage from './img/draw2.webp'



export default function loginpage() {
    const background={
        backgroundColor:"#e8e8e8"
    }
    const margin={
        marginLeft: "90px"
    }
    const btnsize={
        marginRight:"270px"
    }
  return (
      <>
      <div className="main" style={background}>
          <div className="image">
            <img src={loginimage} alt="" />
          </div>
          <div className="form">
            <h3>Sign in with
                <Link to="/"><i class="bi bi-facebook"></i></Link>
                <Link to="/"><i class="bi bi-twitter"></i></Link>
                <Link to="/"><i class="bi bi-linkedin"></i></Link>
            </h3>
            <br />
            or
            <br /><br />
            <input type="email" placeholder='Email address'  size={40}/>
            <br /> <br />
            <input type="password" placeholder='Password' size={40} />
            <br />
            <input type="checkbox" id='checkbox' />
            <label htmlFor="checkbox">Remember me</label>
            <Link to="/" style={margin}>Forget password?</Link> 
            <br /> <br />
            <button className='btn btn-primary' style={btnsize}>Login</button>
            <p className='ptag'>Don't have an account? <a href="/">Register</a></p>


          </div>
      </div>
      </>
  );
}

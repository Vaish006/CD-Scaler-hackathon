import React, { useState } from 'react';
import Image1 from 'assets/images/reg_bg_5.jpg';
import Image2 from 'assets/images/reg_bg_5.jpg';
import { GoogleIcon } from 'assets/icons/icons';
import ProfilePicker from 'components/profile-picker/ProfilePicker';
import { useHistory } from 'react-router';

const Auth = () => {
  const history = useHistory();
  const [active, setActive] = useState('');

  const bgColorCss = active ? 'signup' : 'signin';
  const activeCss = active ? 'active' : '';
  const ToggleCss = () => {
    setActive(!active);
  };
  const handleSubmit = () => {
    history.push('/complete-profile');
  };
  return (
    <div className={`auth-container ${bgColorCss}`}>
      <div className={`container ${activeCss}`}>
        <div className="user siginBx">
          <div className="imgBx">
            <img src={Image1} alt="tape" style={{ height: '100%' }} />
          </div>
          <div className="formBx">
            <form onSubmit={handleSubmit}>
              <ul>
                <li>S</li>
                <li>I</li>
                <li>G</li>
                <li>N</li>
                <li>I</li>
                <li>N</li>
              </ul>
              <input
                type="email"
                required
                name=""
                placeholder="Enter Email Address"
              />
              <input
                type="password"
                required
                name=""
                placeholder="Enter Password"
              />
              <input type="submit" name="" value="login" />
              <div className="separator">OR</div>
              <button type="button">
                {' '}
                <GoogleIcon /> &nbsp; Continue with Google
              </button>
              <p className="reg">
                Don't have an account ?{' '}
                <span onClick={() => ToggleCss()}>Sign Up</span>
              </p>
            </form>
          </div>
        </div>
        <div className="user signupBx">
          <div className="formBx">
            <form>
              <ul>
                <li>S</li>
                <li>I</li>
                <li>G</li>
                <li>N</li>
                <li>U</li>
                <li>P</li>
              </ul>

              <ProfilePicker />
              <input type="text" required placeholder="Enter Username" />
              <input type="email" required placeholder="Enter Email Address" />
              <input type="password" required placeholder="Enter Password" />
              <input
                type="password"
                required
                placeholder="Enter Confirm Password"
              />
              <input type="submit" name="" value="Sign Up" />
              <p className="reg">
                Already have an account ?{' '}
                <span onClick={() => ToggleCss()}>Sign in</span>
              </p>
            </form>
          </div>
          <div className="imgBx">
            <img src={Image2} alt="tape" style={{ height: '100%' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;

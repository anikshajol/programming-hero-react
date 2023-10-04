import logo from '../../assets/logo.png'
import moment from 'moment';

const Header = () => {
    return (
        <div className='flex flex-col items-center space-y-2'>
            <img src={logo} alt="" />
            <p>Journalism Without Fear or Favour</p>
        <p>
        {  moment().format('MMMM D YYYY,')}
        </p>
        </div>
    );
};

export default Header;
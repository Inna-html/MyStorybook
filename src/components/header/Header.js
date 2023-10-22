
import { Link } from "react-router-dom";

const Header = () => {

    return (
        <div>
             <ul>
                <li> <Link to={'/home'}>Home</Link> </li>
                <li> <Link to={'/post'}>Post</Link> </li>
                <li> <Link to={'/user'}>User</Link> </li>
            </ul>
        </div>
       
    );
};

export { Header };

import {useNavigate} from 'react-router-dom'

function NavBar (){
    let navigate = useNavigate();
    return(
        <nav>
            <div className = "banner">
                <div className = "nav-bar">
                    <img className = "nav-logo" onClick={() => {navigate('/')}} src="/Foodle-Logo.png" alt="Foodle Logo" href="/"/>
                    <button onClick={() => {
                            navigate('/Favorites')}}
                            >My Favorites</button>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
import './header.css'

function Header() {
    return (
        <div>
            <header>
                <div className="container">
                    <img src="./0.png" alt="" />
                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Sign Up</a></li>
                            <button className='btn0'> What are you looking for?</button>
                        </ul>
                    </nav>
                </div>
            </header>
            <hr />
        </div>
    )
}

export default Header

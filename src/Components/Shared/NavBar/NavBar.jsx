// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userIcon from '../../../assets/icons/userIcon.png';
import { AuthContext } from '../../../providers/AuthProvider';
import './Navbar.css'

const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleSignOut = () => {
        logOut()
        .then(()=> console.log("logout successfull"))
        .catch((error) => console.log(error.message))
    }
    return (
        <nav style={{ background: "#e7e7e0"}} className="navbar navbar-expand-lg bg-body-tertiary border">
            <div className="container">
                <Link className="navbar-brand fw-semibold" to='/'>Figurama</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarText">
                    <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/all-toys'>All Toys</NavLink>
                        </li>
                        {
                            user !== null ? 
                                <>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to='/my-toys'>My Toys</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to='/add-a-toy'>Add A Toy</NavLink>
                                    </li>
                                </>
                                : ""
                        }
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/blogs'>Blog</NavLink>
                        </li>
                    </ul>
                    <span>
                        {
                            user !== null ? user.photoURL !== null ? <section className='d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center user'>
                                <img title={user.displayName !== null ? user.displayName : ""} style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={user.photoURL} alt="profile picture" />

                                <button onClick={handleSignOut} className='btn text-dark fw-bold'>Logout</button>
                            </section>
                                : <section className='d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center user'>
                                    <img title={user.displayName !== null ? user.displayName : ""} style={{ width: "50px", height: "50px", borderRadius: "50%" }} src={userIcon} alt="profile picture" />

                                    <button onClick={handleSignOut} style={{ backgroundColor: "var(--secondary-background)" }} className='btn text-dark fw-bold'>Logout</button>
                                </section>

                                : <section className='d-flex flex-column flex-md-row gap-3 justify-content-center align-items-center'>
                                    <Link to='/login'><button className='btn text-dark fw-bold'>Login</button></Link>
                                </section>
                        }
                    </span> 
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
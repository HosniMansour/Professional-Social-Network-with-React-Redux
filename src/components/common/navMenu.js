import React, {Component} from "react";
import {logout} from "../../actions/AuthActions";
import {connect} from "react-redux";
import {NavLink, Link} from "react-router-dom";

class NavMenu extends Component{

    logout(e) {
        e.preventDefault();
        this.props.logout();
        window.location.replace("/");
    }

    render(){
        let user = JSON.parse(localStorage.getItem('user'));
        return (
            <header>
                <div className="container">
                    <div className="header-data">
                        <div className="logo">
                            <Link to="/" title=""><img src="/images/logo.png" alt="" /></Link>
                        </div>
                        <div className="search-bar">
                            <form>
                                <input type="text" name="search" placeholder="Search..." />
                                    <button type="submit"><i className="la la-search"></i></button>
                            </form>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <NavLink to="/dashboard" title="">
                                        <span><img src="/images/icon1.png" alt="" /></span> Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/network" title="">
                                        <span><img src="/images/icon4.png" alt="" /></span> My Network
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/jobs" title="">
                                        <span><img src="/images/icon5.png" alt="" /></span> Jobs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="messages" title="" className="not-box-open">
                                        <span><img src="/images/icon6.png" alt="" /></span> Messages
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/notification" title="" className="not-box-open">
                                        <span><img src="/images/icon7.png" alt="" /></span> Notification
                                    </NavLink>
                                </li>
                                <li>
                                    <a href="/logout" onClick={this.logout.bind(this)} className="not-box-open">
                                        <span><img src="/images/icon2.png" alt="" /></span> Logout
                                    </a>
                                </li>
                            </ul>
                        </nav>

                        <div className="menu-btn">
                            <a href="/" title=""><i className="fa fa-bars"></i></a>
                        </div>

                        <div className="user-account">
                            <Link to="/profile">
                                <div className="user-info">
                                    <img src={user.image_path} height="20" alt="" />
                                        <strong>{user.prenom}</strong>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        );

    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, { logout })(NavMenu);

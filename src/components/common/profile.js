import React, {Component} from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class Profile extends Component{
    render(){
        let user = JSON.parse(localStorage.getItem('user'));
        return (
            <div className="user-data full-width">
                <div className="user-profile">
                    <div className="username-dt">
                        <div className="usr-pic">
                            <img src={user.image_path} alt="" />
                        </div>
                    </div>
                    <div className="user-specs">
                        <h3> {user.prenom} {user.nom} </h3>
                        <span> {user.titre_profil} </span>
                    </div>
                </div>
                <ul className="user-fw-status">
                    <li>
                        <Link to="/profile" title="">View Profile</Link>
                    </li>
                </ul>
            </div>
        );

    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, {})(Profile);

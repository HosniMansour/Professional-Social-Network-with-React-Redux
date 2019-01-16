import React, { Component } from "react";
import NavMenu from "../common/navMenu";
import {Footer} from "../common/items"
import Profile from "../common/profile";
import Suggesstion from "../common/sugesstion";
import {connect} from "react-redux";
import {Showami1,Showami2,RemoveAmi} from "../../actions/AmisActions";
import {Link} from "react-router-dom";

class OneNetwork extends Component{

    componentDidMount(){
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    }

    removee(e,id) {
        e.preventDefault();
        this.props.RemoveAmi(id);
    }

	render(){
        return (
            <div className="col-lg-4 col-md-5 col-sm-6">
                <div className="company_profile_info">
                    <div className="company-up-info">
                        <img src={this.props.user.image_path} alt="" />
                        <h3>{this.props.user.prenom} {this.props.user.nom}</h3>
                        <h4>{this.props.user.titreProfil}</h4>
                        <ul>
                            <li><a href="/delete" onClick={(e => this.removee(e,this.props.id))} className="follow">Delete friend</a> </li>
                            <li><Link to={"messages"}  title="" className="message-us"><i className="fa fa-envelope"></i></Link></li>
                        </ul>
                    </div>
                    <Link to={{ pathname: '/profile', state: { id: this.props.user.id} }} title="" className="view-more-pro">View Profile</Link>
                </div>
            </div>
        );
    }
}

class Networks extends Component {

    constructor(props){
        super(props);
        this.state = {
            data: null
        };
    }

    componentDidMount(){
        this.props.Showami1();
        this.props.Showami2();
        window.scrollTo(0, 0);
    }

	render() {
        let prp = this;
		return (
			<div>
                <NavMenu />
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <div className="col-lg-3 col-md-4 pd-left-none no-pd">
                                        <div className="main-left-sidebar no-margin">
                                            <Profile/>
                                            <Suggesstion />
                                        </div>
                                    </div>

                                    <div className="col-lg-9 col-md-9 no-pd">
                                        <section>
                                            <div className="container">
                                                <div className="company-title">
                                                    <h3>All Connexion</h3>
                                                </div>

                                                <div className="companies-list">
                                                    <div className="row">
                                                        {
                                                            this.props.data.ami1.map(function(a) {
                                                                return (
                                                                    <OneNetwork {...prp.props} key={a.id} id={a.id} user={a.utilisateurByIdUtilisateur2}/>
                                                                );
                                                            })
                                                        }

                                                        {
                                                            this.props.data.ami2.map(function(a) {
                                                                return (
                                                                    <OneNetwork {...prp.props} key={a.id} id={a.id} user={a.utilisateurByIdUtilisateur1}/>
                                                                );
                                                            })
                                                        }

                                                    </div>
                                                </div>
                                            </div>
                                        </section>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
			</div>
		);
	}
}

function mapStateToProps(state) {
    return {
        data: state.ami
    };
}

export default connect(mapStateToProps, {Showami1,Showami2,RemoveAmi}) (Networks);

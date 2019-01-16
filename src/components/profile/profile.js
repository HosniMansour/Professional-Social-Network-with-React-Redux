import React, { Component } from "react";
import NavMenu from "../common/navMenu";
import {Footer} from "../common/items"
import {connect} from "react-redux";
import {GetUser,GetFormation,GetExperience,GetSkills} from "../../actions/ProfileActions";
import {Link} from "react-router-dom";

class Profile extends Component {

    constructor(props){
        super(props);
        let currentid = JSON.parse(localStorage.getItem('user')).id
        if(props.location.state!==undefined){
            currentid = props.location.state.id
        }
        this.state = {
            id: currentid
        };

        console.log(props.location.state);
    }

    componentDidMount(){
        this.props.GetUser(this.state.id);
        this.props.GetFormation(this.state.id);
        this.props.GetExperience(this.state.id);
        this.props.GetSkills(this.state.id);
        window.scrollTo(0, 0);
    }

	render() {
		return (
			<div>
                <NavMenu />
                <section className="cover-sec">
                    <img src="/images/bgi.jpg" height="300" alt="" />
                </section>
                <main>
                    <div className="main-section">
                        <div className="container">
                            <div className="main-section-data">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="main-left-sidebar">
                                            <div className="user_profile">
                                                <div className="user-pro-img">
                                                    <img src={this.props.data.user.image_path} height="200" alt="" />
                                                </div>

                                                <div className="user_pro_status">

                                                    <div className="star-descp text-center">
                                                        <h2>{this.props.data.user.prenom} {this.props.data.user.nom}</h2>
                                                        <span>Web developer</span>
                                                    </div>

                                                    <ul className="flw-hr">
                                                        <ul className="flw-status">
                                                            <li>
                                                                <span>Pays</span>
                                                                <b>{this.props.data.user.pays}</b>
                                                            </li>
                                                            <li>
                                                                <span>Secteur</span>
                                                                <b>{this.props.data.user.secteur}</b>
                                                            </li>
                                                        </ul>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="right-sidebar">
                                                <div className="message-btn">
                                                    <Link to="/messages" title=""><i className="fa fa-envelope"></i> Message</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-9">
                                        <div className="main-ws-sec">

                                            <div>
                                                <div className="user-profile-ov">
                                                    <h3>Overview</h3>
                                                    <p>{this.props.data.user.description}</p>
                                                </div>
                                                <div className="user-profile-ov st2">
                                                    <h3>Experience</h3>
                                                    <hr/>
                                                    {
                                                        this.props.data.xp.map(function(a) {
                                                            return (
                                                                <div key={a.id}>
                                                                    <h4>{a.cause} - {a.role} </h4>
                                                                    <span> {a.dateDebut} - {a.dateFin} </span>
                                                                    <p>{a.description}</p>
                                                                    <hr/>
                                                                </div>
                                                            );
                                                        })
                                                    }

                                                </div>
                                                <div className="user-profile-ov">
                                                    <h3>Education</h3>
                                                    <hr/>
                                                    {
                                                        this.props.data.forma.map(function(a) {
                                                            return (
                                                                <div key={a.id}>
                                                                    <h4>{a.ecole}</h4>
                                                                    <span> {a.dateDebut} - {a.dateFin} </span>
                                                                    <p>{a.discipline} </p>
                                                                    <hr/>
                                                                </div>
                                                            );
                                                        })
                                                    }


                                                </div>

                                                <div className="user-profile-ov">
                                                    <h3>Skills</h3>
                                                        <ul>
                                                            {
                                                                this.props.data.skills.map(function(a) {
                                                                    return (
                                                                        <li key={a.id}>{a.nomCompetence}</li>
                                                                    );
                                                                })
                                                            }
                                                        </ul>
                                                </div>

                                            </div>
                                            <div className="product-feed-tab" id="portfolio-dd">
                                            </div>
                                        </div>
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

const mapStateToProps = state => {
    return {
        data:state.profile
    };
};


export default connect(mapStateToProps,{GetUser,GetFormation,GetExperience,GetSkills}) (Profile);

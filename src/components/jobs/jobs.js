import React, { Component } from "react";
import NavMenu from "../common/navMenu";
import {Footer} from "../common/items"
import Profile from "../common/profile";
import Suggesstion from "../common/sugesstion";
import {connect} from "react-redux";
import {ShowJobs} from "../../actions/JobsActions";

function OneJo(props) {
	return(
        <div>
            <div className="post-bar">
                <div className="post_topbar">
                    <div className="usy-dt">
                        <img src={props.user.image_path} height="50" alt="" />
                        <div className="usy-name">
                            <h3>
                                {props.user.prenom}
                            </h3>
                            <h3>
                                {props.user.nom}
                            </h3>
                        </div>
                    </div>

                </div>
                <div className="epi-sec">
                    <ul className="descp">
                        <li><img src="/images/icon8.png" alt="" /><span>{props.user.titreProfil}</span>
                        </li>
                        <li><img src="/images/icon9.png" alt="" /><span>{props.user.pays}</span></li>
                    </ul>
                </div>
                <div className="job_descp">
                    <h3>
                        {props.title}
                    </h3>
                    <ul className="job-dt">
                        <li><a href="/" title="">Full Time</a></li>
                    </ul>
                    <p>
                        {props.desc}
                    </p>
                    <ul className="skill-tags">
                        <li><a href="/" title="">{props.tech1}</a></li>
                        <li><a href="/" title="">{props.tech2}</a></li>
                        <li><a href="/" title="">{props.tech3}</a></li>
                    </ul>
                </div>
            </div>
        </div>
	);
}

class Jobs extends Component {

    constructor(props){
        super(props);
        this.state = {
            jobs: null
        };
    }

    componentDidMount(){
        this.props.ShowJobs();
        window.scrollTo(0, 0);
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);
    }

	render() {
        console.log(this.props.jobs.jobs)
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
                                        <div className="main-ws-sec">
                                            <div className="posts-section">

                                                {
                                                    this.props.jobs.jobs.map(function(a) {
                                                        return (
                                                            <OneJo key={a.id} user={a.utilisateur} title={a.nomOffre} desc={a.descOffre} tech1={a.hashtag1} tech2={a.hashtag2} tech3={a.hashtag3} />
                                                        );
                                                    })
                                                }
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

function mapStateToProps(state) {
    return {
        jobs: state.jbs
    };
}

export default connect(mapStateToProps, {ShowJobs}) (Jobs);

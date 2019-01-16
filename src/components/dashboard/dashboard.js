import React, { Component } from "react";
import TimeAgo from 'react-timeago'
import NavMenu from "../common/navMenu";
import {Footer} from "../common/items"
import Profile from "../common/profile";
import Suggesstion from "../common/sugesstion";
import TopJobs from "../common/topjobs";
import {Link} from "react-router-dom";

import {connect} from "react-redux";
import {Showstats, Addstats,ShowCmt,Addcmt} from "../../actions/StatsActions";

class Express extends Component{
    constructor(props){
        super(props);

        this.state = {
            content: ""
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        const {content} = this.state;
        this.props.Addstats({content});
        this.setState({ content: "" });
    }
    render(){
        let text = "Express yourself, " + (JSON.parse(localStorage.getItem('user')).prenom);
        return(
            <div className="post-topbar p-0">
                <form onSubmit={this.onSubmit}>
                    <div className="p-1">
					<textarea value={this.state.content} name="content" onChange={this.onChange} className="form-control rounded-0"
                              style={{border:0}} rows="3"
                              placeholder={text}></textarea>
                    </div>
                    <hr className="m-0" />
                    <div className="">
                        <button type="submit" className="btn btn-primary btn-sm pull-right rounded-0 m-2">Publier</button>
                    </div>
                </form>
            </div>
        );
    }


}


class Status extends Component{

    constructor(props){
        super(props);

        this.state = {
            cmtcontent: "",
            idpub:this.props.sts.id
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e){
        e.preventDefault();
        const {cmtcontent,idpub} = this.state;
        this.props.Addcmt({cmtcontent,idpub});
        this.setState({ cmtcontent: "" });
    }

    render(){
        const comments = this.props.comments.filter(obj => obj.publication === this.props.sts.id);
        let user = JSON.parse(localStorage.getItem('user'));
        return(
            <div className="posts-section" style={{paddingBottom:30}}>
                <div className="posty">
                    <div className="post-bar no-margin">
                        <div className="post_topbar">
                            <div className="usy-dt">
                                <div className="user-picy">
                                    <img src={this.props.sts.utilisateur.image_path} alt="" />
                                </div>
                                <div className="usy-name">
                                    <Link to={{ pathname: '/profile', state: { id: this.props.sts.utilisateur.id} }} ><h3>{this.props.sts.utilisateur.prenom} {this.props.sts.utilisateur.nom}</h3></Link>
                                    <span><img src="/images/clock.png" alt="" /> <TimeAgo date={this.props.sts.date} /> </span>
                                </div>
                            </div>

                        </div>

                        <div className="job_descp">
                            <p>{this.props.sts.contenu}</p>
                        </div>

                        <div className="job-status-bar">
                            <ul className="like-com">
                                <li>
                                    <a href="#/"><i className="la la-heart"></i>Like</a>
                                </li>
                                <li style={{marginBottom:-6}}><a href="#/" title="" className="com"><img src="/images/com.png" alt="" />Comments</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="comment-section">
                        <div className="comment-sec">
                            <ul>
                                {
                                    comments.map(function(a) {
                                        return (
                                            <li key={a.id}>
                                                <div className="comment-list p-0">
                                                    <div className="bg-img">
                                                        <Link to={{ pathname: '/profile', state: { id: a.utilisateur.id} }} ><img src={a.utilisateur.image_path} height="40" alt="" /></Link>
                                                    </div>
                                                    <div className="comment">
                                                        <p className="bg-light rounded p-2 border">{a.contenu}</p>
                                                        <span><img src="/images/clock.png" alt="" /> <TimeAgo date={a.date} /> </span>
                                                    </div>
                                                </div>
                                            </li>
                                        );
                                    })
                                }

                            </ul>
                        </div>
                        <div className="post-comment">
                            <div className="cm_img">
                                <img height="40" src={user.image_path} alt="" />
                            </div>
                            <div className="comment_box">
                                <form onSubmit={this.onSubmit}>
                                    <input type="text" value={this.state.cmtcontent} name="cmtcontent" onChange={this.onChange} placeholder="your comment" autoComplete="off" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

class Dashboard extends Component {

    componentDidMount(){

        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);

        this.props.Showstats();
        this.props.ShowCmt();
        window.scrollTo(0, 0);
    }

    statt(){
        let aee = this.props.data.cmts;
        let prp = this;
        if(this.props.data.data instanceof Array){
            return(
                this.props.data.data.map(function(a) {
                    return (
                        <Status {...prp.props} key={a.id} sts={a} comments={aee}  />
                    );
                })
            );
        }else{
            return null;
        }

    }

	render() {
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

                                    <div className="col-lg-6 col-md-8 no-pd">
                                        <div className="main-ws-sec">
											<Express {...this.props} />
                                            {
                                               this.statt()
                                            }
                                        </div>
                                    </div>
                                    <div className="col-lg-3 pd-right-none no-pd">
                                        <div className="right-sidebar">
											<TopJobs/>
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
        data:state.stats
    };
};


export default connect(mapStateToProps,{Showstats,Addstats,ShowCmt,Addcmt}) (Dashboard);

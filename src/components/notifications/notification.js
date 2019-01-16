import React, { Component } from "react";
import NavMenu from "../common/navMenu";
import {Footer} from "../common/items";
import Profile from "../common/profile";
import TimeAgo from 'react-timeago'
import {ShowNotif} from "../../actions/NotifActions";

import {connect} from "react-redux";


class Notification extends Component {

    componentDidMount(){
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);

        this.props.ShowNotif();
        window.scrollTo(0, 0);
    }


    render() {
        console.log(this.props.data.notif);
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
                                            <div className="suggestions full-width">
                                                <div className="sd-title">
                                                    <h3>Suggestions</h3>
                                                </div>
                                                <div className="suggestions-list">
                                                    <a data-height="200" className="twitter-timeline" href="https://twitter.com/MHosniMansour?ref_src=twsrc%5Etfw">Tweets
                                                        by MHosniMansour</a>
                                                </div>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="col-lg-9 col-md-9 no-pd">
                                        <div className="acc-setting">
                                            <h3>Notifications</h3>
                                            <br/>
                                            {
                                                this.props.data.notif.map(function(a) {
                                                    return (
                                                        <div key={a.id} className="notifications-list" style={{marginTop:5,marginBottom:5,marginLeft:5,marginRight:5}}>
                                                            <a href="{a.lien}">
                                                                <div className="noty-user-img">
                                                                    <img src={a.utilisateur.image_path} alt="" />
                                                                </div>
                                                                <div className="notification-info">
                                                                    <h3>{a.objet}</h3>
                                                                    <span><TimeAgo date={a.date} /></span>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    );
                                                })
                                            }

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
        data:state.notif
    };
};


export default connect(mapStateToProps,{ShowNotif}) (Notification);

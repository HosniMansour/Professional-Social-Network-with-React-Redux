import React, { Component } from "react";
import NavMenu from "../common/navMenu";
import {Footer} from "../common/items"
import { Showami1} from "../../actions/AmisActions";
import {connect} from "react-redux";

class Messages extends Component {

    componentDidMount(){
        this.props.Showami1();
        window.scrollTo(0, 0);
    }

	render() {
		return (
			<div>
                <NavMenu />
                <section className="messages-page">
                    <div className="container">
                        <div className="messages-sec">
                            <div className="row">
                                <div className="col-lg-4 col-md-12 no-pdd">
                                    <div className="msgs-list" id="style-4">
                                        <div className="msg-title">
                                            <h3>Messages</h3>
                                        </div>
                                        <div className="messages-list">
                                            <ul>
                                                {
                                                    this.props.data.ami1.map(function(a) {
                                                        return (
                                                            <li key={a.id}>
                                                                <div className="usr-msg-details">
                                                                    <div className="usr-ms-img">
                                                                        <img src={a.utilisateurByIdUtilisateur2.image_path} alt="" />
                                                                    </div>
                                                                    <div className="usr-mg-info">
                                                                        <h3>{a.utilisateurByIdUtilisateur2.prenom} {a.utilisateurByIdUtilisateur2.nom}</h3>
                                                                    </div>
                                                                </div>
                                                            </li>
                                                        );
                                                    })
                                                }

                                                <li>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-8 col-md-12 pd-right-none pd-left-none">
                                    <div className="main-conversation-box">
                                        <div className="messages-list">
                                            <div className="message-bar-head">
                                                <div className="usr-msg-details">
                                                    <div className="usr-ms-img">
                                                        <img src="/images/users/avatar.jpg" alt="" />
                                                    </div>
                                                    <div className="usr-mg-info">
                                                        <h3>Hosni Mansour</h3>
                                                        <p>Web developer</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="messages-line" id="style-4" style={{marginTop:100}}>
                                                <div className="chat-messages">
                                                    {/*<div className="main-message-box ta-right">
                                                        <div className="message-dt">
                                                            <div className="message-inner-dt">
                                                                <p style={{width:500}}>Hi there what's up ?</p>
                                                            </div>
                                                            <span>2 min ago</span>
                                                        </div>
                                                        <div className="messg-usr-img">
                                                            <img src="/images/users/avatar.jpg" alt="" />
                                                        </div>
                                                    </div>

                                                    <div className="main-message-box st3">
                                                        <div className="message-dt st3">
                                                            <div className="message-inner-dt">
                                                                <p>Hi there !</p>
                                                            </div>
                                                            <span>1 min ago</span>
                                                        </div>
                                                        <div className="messg-usr-img">
                                                            <img src="/images/users/avatar.jpg" alt="" />
                                                        </div>
                                                    </div>*/}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="message-send-area">
                                            <form>
                                                <div className="mf-field">
                                                    <input type="text" autoComplete="off" name="messageToSend"
                                                           placeholder="Type a message here" />
                                                        <button type="submit">Send</button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
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

export default connect(mapStateToProps, {Showami1}) (Messages);

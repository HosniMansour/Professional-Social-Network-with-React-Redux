import React, { Component } from "react";
import {LogedoutMenu,Footer} from "../common/items"
import {connect} from "react-redux";
import {loginUser,registerUser} from "../../actions/AuthActions";


const Error = (props) => {
    if(props.val){
        return(
            <div className="alert alert-warning alert-dismissible fade show" role="alert">
                {props.val}
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        );
    }
    return <div></div>;
};

class Home extends Component {

    constructor(props){
        super(props);

        this.state = {
            email: "",
            password: "",
            nom: "",
            prenom: "",
            pays: "",
            titre: "",
            email1: "",
            password1: "",
        };

        this.onChange = this.onChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onRegister = this.onRegister.bind(this);
    }
    onChange(e){
        this.setState({ [e.target.name]: e.target.value });
    }

    onLogin(e){
        e.preventDefault();
        const {email, password} = this.state;
        this.props.loginUser({email, password});
    }

    onRegister(e){
        e.preventDefault();
        const {email1,prenom,nom,pays,titre,password1} = this.state;
        this.props.registerUser({email1,prenom,nom,pays,titre,password1});
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.isAuthenticated || nextProps.isRegistred){
            this.props.history.push("/dashboard");
        }
    }

    render() {
		return (
			<div>
				<LogedoutMenu />
                <div className="wrapper">
                    <div className="sign-in-page">
                        <div className="signin-popup">
                            <div className="signin-pop" style={{marginBottom:100}}>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="cmp-info">
                                            <div className="cm-logo">
                                                <img src="./images/logo_black.png" height="50" alt="" />
                                                    <br/>
                                                    <p>Linkedin2.0, is a global freelancing platform and social
                                                        networking where businesses and independent professionals
                                                        connect and collaborate remotely</p>
                                            </div>
                                            <img src="./images/cm-main-img.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="login-sec">
                                            <ul className="sign-control">
                                                <li data-tab="tab-1" className="current"><a href="/" title="">Sign
                                                    in</a></li>
                                                <li data-tab="tab-2"><a href="/" title="">Sign up</a></li>
                                            </ul>
                                            <div className="sign_in_sec current" id="tab-1">
                                                <h3>Sign in</h3>
                                                <Error val={this.props.error} />
                                                <form onSubmit={this.onLogin}>
                                                    <div className="row">
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input value={this.state.email} type="email" name="email"  onChange={this.onChange} placeholder="Email..." required />
                                                                    <i className="la la-user"></i>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="sn-field">
                                                                <input value={this.state.password} name="password" type="password" onChange={this.onChange} placeholder="Password" required />
                                                                    <i className="la la-lock"></i>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 no-pdd">
                                                            <div className="checky-sec">
                                                                <div className="fgt-sec">
                                                                    <input type="checkbox" name="cc" id="c1" />
                                                                        <label htmlFor="c1">
                                                                            <span></span>
                                                                        </label>
                                                                        <small>Remember me</small>
                                                                </div>
                                                                <a href="/" title="">Forgot Password?</a>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-12 no-pdd">
                                                            <button type="submit" value="submit">Sign in</button>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                            <div className="sign_in_sec" id="tab-2">
                                                <div className="dff-tab current" id="tab-3">
                                                    <Error val={this.props.error} />
                                                    <form onSubmit={this.onRegister}>
                                                        <div className="row">
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input value={this.state.email1} type="name" name="email1"  onChange={this.onChange} placeholder="Email..." required />
                                                                        <i className="la la-briefcase"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input value={this.state.prenom} type="text" name="prenom" onChange={this.onChange} placeholder="Prenom" required />
                                                                        <i className="la la-user"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input value={this.state.nom} type="text" name="nom" placeholder="Nom" onChange={this.onChange} required />
                                                                        <i className="la la-user"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input value={this.state.pays} type="text" name="pays" placeholder="Pays" onChange={this.onChange} required />
                                                                        <i className="la la-globe"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input value={this.state.titre} type="text" name="titre" placeholder="titre" onChange={this.onChange} required />
                                                                        <i className="la la-code-fork"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="sn-field">
                                                                    <input value={this.state.password1} type="password" name="password1" placeholder="Password" onChange={this.onChange} required />
                                                                        <i className="la la-lock"></i>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <div className="checky-sec st2">
                                                                    <div className="fgt-sec">
                                                                        <input type="checkbox" name="cc" id="c2" />
                                                                            <label htmlFor="c2">
                                                                                <span></span>
                                                                            </label>
                                                                            <small>Yes, I understand and agree to the Linkedin2.0 Terms & Conditions.
                                                                            </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-12 no-pdd">
                                                                <button type="submit">Get Started</button>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
			</div>
		);
	}
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isRegistred: state.auth.isRegistred,
        error: state.auth.error,
        loading:state.auth.loading,
        user:state.auth.user
    };
};

export default connect(mapStateToProps,{loginUser,registerUser}) (Home);

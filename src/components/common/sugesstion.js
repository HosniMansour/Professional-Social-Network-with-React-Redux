import React, {Component} from "react";


export function OneSug(props) {
    return(
        <div className="suggestion-usd">
            <div className="sgt-text">
                <span>{props.title}</span>
            </div>
        </div>
    );
}

class Suggesstion extends Component{

    render(){
        return (
                <div className="suggestions full-width">
                    <div className="sd-title">
                        <h3>Suggestions</h3>
                    </div>
                    <div className="suggestions-list">

                        <OneSug img="/images/users/avatar.jpg" name="Hosni Mansour" title="I am too lazy to make something dynamic -_- " id="1" />

                       {/* <a data-height="600" className="twitter-timeline" href="https://twitter.com/MHosniMansour?ref_src=twsrc%5Etfw">Tweets
                            by MHosniMansour</a>*/}
                    </div>
                </div>
        );

    }
}


export default Suggesstion;

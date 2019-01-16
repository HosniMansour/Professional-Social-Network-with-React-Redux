import React,{Component} from "react";
import {connect} from "react-redux";
import {ShowJobs} from "../../actions/JobsActions";

function OneJob(props) {
    return(
        <div className="job-info">
            <div className="job-details">
                <h3>{props.title.slice(0, 45)}...</h3>
                <p>{props.desc.slice(0, 100)}...</p>
            </div>
            <div className="hr-rate">
                <span>{props.tech}</span>
            </div>
        </div>
    );
}

export class TopJobs extends Component{

    constructor(props){
        super(props);
        this.state = {
            jobs: null
        };
    }

    componentDidMount(){
        this.props.ShowJobs();
        window.scrollTo(0, 0);
    }

    render(){
        return(
            <div className="widget widget-jobs">
                <div className="sd-title">
                    <h3>Top Jobs</h3>
                    <i className="la la-ellipsis-v"></i>
                </div>
                <div className="jobs-list">
                    {
                        this.props.jobs.jobs.map(function(a) {
                            return (
                            <OneJob key={a.id} title={a.nomOffre} desc={a.nomOffre} tech={a.hashtag1} />
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        jobs: state.jbs
    };
}

export default connect(mapStateToProps, {ShowJobs}) (TopJobs);
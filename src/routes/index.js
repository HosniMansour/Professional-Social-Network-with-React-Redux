import React from "react";
import {Route, Switch} from "react-router-dom";

import Home from "../components/home/home";
import requireAuth from "../utils/requireAuth";
import Dashboard from "../components/dashboard/dashboard";
import Jobs from "../components/jobs/jobs";
import Messages from "../components/messages/messages";
import Networks from "../components/networks/networks";
import Notification from "../components/notifications/notification";
import Profile from "../components/profile/profile";

export default () => (
	<Switch>
		<Route path="/" exact component={Home} />
		<Route path="/dashboard" exact component={requireAuth(Dashboard)} />
		<Route path="/jobs" exact component={requireAuth(Jobs)} />
		<Route path="/network" exact component={requireAuth(Networks)} />
		<Route path="/messages" exact component={requireAuth(Messages)} />
		<Route path="/notification" exact component={requireAuth(Notification)} />
		<Route path="/profile" exact component={requireAuth(Profile)} />
	</Switch>
);
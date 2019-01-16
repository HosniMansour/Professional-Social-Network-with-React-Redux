import React from "react";

export function LogedoutMenu() {
    return (
        <header>
            <div className="container">
                <div className="header-data">
                    <div className="logo" style={{marginBottom:10}}>
                        <a href='/' title=""><img src="/images/logo_white.png" height="35" alt="" /></a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export function Footer() {
	return (
        <footer>
            <div className="footy-sec mn no-margin">
                <div className="container">
                    <ul>
                        <li><a href="/" title="">Help Center</a></li>
                        <li><a href="/" title="">Privacy Policy</a></li>
                    </ul>
                    <p><img src="/images/copy-icon2.png" alt="" />Copyright 2018</p>
                    <img className="fl-rgt" src="/images/logo_black.png" height="20" alt="" />
                </div>
            </div>
        </footer>
	);
}

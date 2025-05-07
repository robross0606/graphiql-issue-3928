import React from 'react';

const Nav = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/sample">Sample Page</a></li>
                    <li><a href="/graphiql">Graph<i>i</i>QL</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Nav;
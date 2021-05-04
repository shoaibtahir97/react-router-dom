import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
    render() {
        return(
            <div>
                <h1>
                    This is About Page
                </h1>
                <Link to="/"> Go to Home</Link>
            </div>
        )
    }
}

export default About;
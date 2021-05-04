import React from 'react';
import  { Link } from 'react-router-dom';


class Home extends React.Component {
    goto_home=() => {
        this.props.history.push('/about');
    }
    render() {
        return(
            <div>
                <h1>
                    This is Home Page
                </h1>
                {/* <Link to="/about"> Go to about </Link> */}
                <button onClick={this.goto_home}>Go to About </button>
            </div>
            
        )
    }
}

export default Home;
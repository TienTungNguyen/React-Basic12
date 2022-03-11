import React from 'react';
// import { withRouter } from "react-router";
// import Color from '../HOC/Hoc'
class Home extends React.Component{
    // componentDidMount(){
    //     setTimeout(
        // ()=>{this.props.history.push('/todo')},2000)
    // }

       
    render(){
        return(
            <>
                <div className="web-title">
                    <h1>WELCOME TO MY WEBSITE</h1>
                </div>
            </>
        )
    }
}
// export default withRouter(Home);
// export default Color(Home);
export default Home;
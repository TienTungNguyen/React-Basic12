import React from 'react';
import {withRouter} from 'react-router-dom';
import axios from 'axios';
class DetailUser extends React.Component{
    state={
        user:{}
    }
    componentDidMount(){
        if(this.props.match && this.props.match.params){
            let id= this.props.match.params.id
            axios.get(`https://reqres.in/api/users/${id}`)
                .then((respone)=>{
                    this.setState({
                        user:respone.data&&respone.data.data?respone.data.data:{}
                    })
                })
                .catch((reject)=>{
                    console.log(reject)
                })
        }
    }
    handleBack=(user)=>{
        this.props.history.push('/user')
    }
    render(){
        let {user}=this.state
        let Isuser=Object.keys(user).length === 0
        console.log(this.state.user)
        return(
            <>
                {Isuser===false ? 
                <div className='infor-user'>
                    <h4 className='user_name'>User Name: {user.first_name} {user.last_name}</h4>
                    <h4 className='user_email'>Email: {user.email}</h4>
                    <img src={user.avatar}/>
                    <button onClick={()=>{this.handleBack(user)}}>Back</button>
                </div>
                :null
                    
                }
            </>
        )
    }
}
export default withRouter(DetailUser);
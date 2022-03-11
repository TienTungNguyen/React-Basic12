import React from 'react';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
class User extends React.Component{
    state={
        dataId:[],
    }
    componentDidMount(){
        axios.get('https://reqres.in/api/users?page=1')
            .then((rel)=>{
               {rel&&rel.data&&rel.data.data?
            this.setState({
                dataId:rel.data.data
            })
            :
            this.setState({
                dataId:[]
            })}
            })
            .catch((resolve)=>{
                console.log(resolve)
            })
    }
    handleUser=(user)=>{
        console.log(this.props)
        this.props.history.push(`user/${user.id}`)
    }
    render(){
        let users= this.state.dataId
        let Isuser=users.length>0
        return(
            <>
                <div className='user-container'>
                  <div className='user-child'>
                      {users&&Isuser?
                      users.map((item, index)=>{
                          return(
                              <>
                                <h4 onClick={()=>{
                                    {this.handleUser(item)}
                                }}>{index+1}: {item.last_name} {item.first_name}</h4>
                              </>
                          )
                      })
                        :
                        null}
                        
                  </div>
                </div>
            </>
        )
    }
}
export default withRouter(User);
import React from "react";
import {withRouter} from "react-router";
class About extends React.Component{
    state={
        Jobs:[{title:'IT', salary:'2000'},
            {title:'CEO', salary:"5000"}],
        Inputtitle:{title:''},
        Inputsalary:{salary:''},
        isShow:false
    }
    
    handleTitle=(event)=>{
       this.setState({
           Inputtitle:{
               title:event.target.value
           }
       })
        
    }
    handleSalary=(event)=>{
        this.setState({
            Inputsalary:{
                salary:event.target.value
            }
        }) 
     }
    handleShowHide=()=>{
        let isshow=!this.state.isShow
        this.setState({
            isShow:isshow
        })
        console.log(this.state.isShow)
    }
    handleClick=(event)=>{
         event.preventDefault()
        // phần hoàn thiện thông báo và đẩy object vào mảng Jobs
        let isTitle=this.state.Inputtitle.title.length===0
        let isSalary=this.state.Inputsalary.salary.length===0
        if(!isTitle===true&& !isSalary===true){
            let {Inputtitle,Inputsalary} =this.state
            let Inputform={...Inputtitle,...Inputsalary}
            let copyJobs=this.state.Jobs
            let newJobs= copyJobs.push(Inputform)
            this.setState({
                Jobs:copyJobs 
            })
            alert('Nhap thong tin thanh cong')
            this.setState({
                Inputtitle:{title:''},
                Inputsalary:{salary:''}
            })
                
        }else{
            alert('Nhap thong tin that bai')
        }
        // {(!isTitle && !isSalary)?
        //     alert('Nhap thong tin thanh cong')
        //     : alert('Nhap thong tin that bai')
        // }
           
     }
     componentDidMount(){
         setTimeout(()=>{
             this.props.history.push('/user')
         },5000)
     }
    render(){
        let title=this.state.Inputtitle.title
        let salary=this.state.Inputsalary.salary
        let Jobs=this.state.Jobs
        let isShow=this.state.isShow
        return (
            <>
                <div className='about-title'>
                    <h3>Vui long nhap thong tin</h3>
                </div>
                {/* phần nhập thông tin input */}
                <div className="input-container">
                    <form>
                        <label htmlFor="fname">Title:{title}</label><br/>
                        <input type="text" id="fname" name="fname" value={title} onChange={(event)=>{this.handleTitle(event)}}/><br/>
                        <label htmlFor="lname">Salary:{salary}</label><br/>
                        <input type="text" id="lname" name="lname" value={salary} onChange={(event)=>{this.handleSalary(event)}}/><br></br>
                        <input type="submit" value="Submit" onClick={(event)=>{this.handleClick(event)}}/>
                    </form> 
                </div>
                {/* phần ẩn hiện show vs hide */}
                <div className="showJobs">
                    {isShow?
                        <button onClick={()=>{this.handleShowHide()}}>Show</button>
                        :<>
                        {Jobs.map((item, index)=>{
                            return(
                                <>
                                    <h2 key={index}>{index+1}:{item.title} - {item.salary}</h2>
                                </>
                            )
                        })}
                        <button onClick={()=>{this.handleShowHide()}}>Hide</button>
                        </>
                    }   
                </div>
            </>
        )
    }
}
export default withRouter(About);
import React from "react";
import { Redirect } from "react-router-dom";

class Detail extends React.Component{
    componentDidMount(){
        console.log(this.props)
        const {location,history} = this.props;
        
        // undefined상태
        // Redirect해주기
        if (location.state===undefined){
            console.log(this.props)
                history.push("/");
        }
    }
    render(){
        const{location} = this.props;
        if(location.state){
            return <span>{location.state.title}</span>
        }else{
        return null;
        }
    }
}
export default Detail;
import React from 'react';

export default class BronnFetch extends React.Component{
    
    state = {
        loading: true
    }

    componentDidMount(){

    }
    
    render(){
        return <div>
            {
                this.state.loading ? <div>loading...</div> : <div>succsess</div>
            }
            </div>
    }
    
}
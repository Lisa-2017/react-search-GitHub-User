import React, {Component} from 'react'
import Search from './components/search'
import List from  './components/list'

class App extends Component {
    state ={
        isFirst:true,
        isLoading:false,
        users:[],
        errMsg:''
    }
    updateAppState = ({ isFirst,isLoading,errMsg,users  })=>{
        this.setState({
            isFirst,
            isLoading,
            users,
            errMsg
        })
    }
    render() {
        return (
            <div className="container">
                <Search updateAppState={this.updateAppState} />
                <List appState={this.state} />
            </div>
        )
    }
}

export default App
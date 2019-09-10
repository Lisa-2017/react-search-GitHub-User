import React, {Component} from 'react'
import Search from './components/search'
import List from  './components/list'

class App extends Component {
    state ={
       keyWord:'' // 搜索关键词
    }
    setKeyWord = (keyWord)=>{
        this.setState({ keyWord })
    }
    render() {
        return (
            <div className="container">
                <Search setKeyWord={this.setKeyWord} />
                <List keyWord={this.state.keyWord} />
            </div>
        )
    }
}

export default App
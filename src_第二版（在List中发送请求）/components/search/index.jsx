import React, {Component} from 'react'

class Search extends Component {

    search = ()=>{
        let { setKeyWord } = this.props

        //1.获取用户输入
        let keyWord = this.refs.keyWord.value.trim()

        //2.给List传递搜索的关键词 （借助父组件App）
        setKeyWord(keyWord)

    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref="keyWord"/>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}

export default Search
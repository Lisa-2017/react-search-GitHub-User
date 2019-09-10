import React, {Component} from 'react'
import axios from 'axios'

class Search extends Component {
    keywordRef = React.createRef()

    search = ()=>{
        let { updateAppState } = this.props
        //1.获取用户输入
        let keyWord = this.keywordRef.current.value.trim()




        //2. 发送请求
        updateAppState({ // 发请求前，更新下状态，加载Loading
            isFirst:false,
            isLoading:true,
            users:[],
            errMsg:''
        })

        const  url = `https://api.github.com/search/users222?q=${keyWord}`
        axios.get(url)
            .then( (result)=>{
                console.log(result)
                let users = result.data.items
                updateAppState({
                    isFirst:false,
                    isLoading:false,
                    users,
                    errMsg:''
                })
            } )
            .catch( (err)=>{
                // console.log(err);
                updateAppState({
                    isFirst:false,
                    isLoading:false,
                    users:[],
                    errMsg:err.toString()
                })
            } )
        //3. 维护数据状态
    }
    render() {
        return (
            <section className="jumbotron">
                <h3 className="jumbotron-heading">Search Github Users</h3>
                <div>
                    <input type="text" placeholder="enter the name you search" ref={this.keywordRef }/>
                    <button onClick={this.search}>Search</button>
                </div>
            </section>
        )
    }
}

export default Search
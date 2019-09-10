import React, {Component} from 'react'
import axios from "axios";

import Item from  '../item'

class List extends Component {
    state = {
        isFirstView:true,
        isLoading:false,
        users:[],
        errMsg:''
    }

    async   UNSAFE_componentWillReceiveProps({keyWord}) {  // 解构赋值，获取newprops上面的keyWord   // console.log(nextProps);

        this.setState({
            isFirstView:false,
            isLoading:true,
            users:[],
            errMsg:''
        })
      /*  const  url = `https://api.github.com/search/users?q=${keyWord}`
        axios.get(url)
            .then( (response)=>{
                console.log(response)
                let users = response.data.items
                this.setState({
                    isFirstView:false,
                    isLoading:false,
                    users,
                    errMsg:''
                })
            } )
            .catch( (err)=>{
                // console.log(err);
                this.setState({
                    isFirstView:false,
                    isLoading:false,
                    users:[],
                    errMsg:err.toString()
                })
            } )*/

       const  URL = `https://api.github.com/search/users?q=${keyWord}`
        try {
            let  response = await axios.get(URL)

            //遍历item,提取需要用到的的信息组成新的数组，节约性能
            let users = response.data.items.map((item,index)=>{
                return {
                    userAvatarUrl:item.avatar_url,
                    userRepoUrl:item.html_url,
                    userName:item.login,
                }
            })

            this.setState({
                isFirstView:false,
                isLoading:false,
                users,
                errMsg:''
            })
        }
        catch (err) {
            this.setState({
                isFirstView:false,
                isLoading:false,
                users:[],
                errMsg:err.message // 获取错误信息的字符串，以便输出到页面时使用，效果和toString类似
            })
        }
    }

    render() {
        let { isFirstView,isLoading,errMsg,users } = this.state

        if(isFirstView){
           return <h2> 请输入关键字进行搜索 </h2>
        }else if(isLoading){
            return <h2> 正在加载中。。。。 </h2>
        }else if(errMsg){
            return <h2> {errMsg}</h2>
        }else{
            return (
                <div className="row">
                    {
                        users.map((user,index)=>{
                            return <Item key={index} user={user}/>
                        })
                    }
                </div>
            )


        }
    }
}

export default List
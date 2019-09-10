import React, {Component} from 'react'
import Item from  '../../components/item'
class List extends Component {

    render() {
        let { isFirst,isLoading,errMsg,users } = this.props.appState
        if(isFirst){
           return <h2> 请输入关键字进行搜索 </h2>
        }else if(isLoading){
            return <h2> 正在加载中。。。。 </h2>
        }else if(errMsg){
            return <h2> {errMsg}</h2>
        }else{
            return (
                <div className="row">
                    {
                        users.map((item)=>{
                            return <Item key={item.login} {...item}/>
                        })
                    }
                </div>
            )
        }
    }
}

export default List
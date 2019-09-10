import React, {Component} from 'react'
import '../../components/item/index.css'
class Item extends Component {
    render() {
        return (
            <div className="card">
                <a href="https://github.com/reactjs" target="_blank">
                    <img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3146277763,293920617&fm=111&gp=0.jpg" style={{width:'100px'}}/>
                </a>
                <p className="card-text">reactjs</p>
            </div>
        )
    }
}

export default Item
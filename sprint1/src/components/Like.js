import React from "react";
import Icon from "../../src/components/Icon";
import Text from "../../src/components/Text";

export default class Like extends React.Component {
    constructor(props){
        super(props)
        this.state={
            isLiked: false,
        }
    }
    buttonLike=() => {
        this.setState({
            isLiked: !this.state.isLiked,
        })
    }
    render() {

        return(
            <div>
                <div className="likes">
                    <button className="likes btn btn-transparency" onClick={this.buttonLike}><Icon gustar={this.state.isLiked}/></button>
                    <p className="texto-like"><Text isLiked={this.state.isLiked}/></p>
                </div>

            </div>
        )
    }
}
 
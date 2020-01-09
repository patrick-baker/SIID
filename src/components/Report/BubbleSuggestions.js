import React, { Component } from 'react';
import { connect } from 'react-redux';

class BubbleSuggestions extends Component {

    render() {
        // let item = this.props.item;
        //console.log(this.props.data.expected);

        return (            
            <div>
                {this.props.data.map((x,i)=>{
                    console.log('this is the x', x, 'this is i', i, 'this is .message', x.messsage);
                    return <>
                     <p className="problemWord">{x.actual}</p>
                     <p className="message">{x.messsage}
                         
                     </p></>
                })}
               
            </div>

        )
    }
}

{/* cleanBubbleData map, item is:  
{actual: "girl", count: 1, expected: Array(3), messsage: "`girl` may be insensitive, when referring to a person, use `kid`, `child`, `youth` instead", note: undefined}
actual: "girl"
count: 1
expected: (3) ["kid", "child", "youth"]
messsage: "`girl` may be insensitive, when referring to a person, use `kid`, `child`, `youth` instead"
note: undefined */}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(BubbleSuggestions);
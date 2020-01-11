import React, { Component } from 'react';
import { connect } from 'react-redux';

class BubbleSuggestions extends Component {
 
    render() {
        return (         
            <>   
            {/* <h2 className="report__header2">Consider the context of these words:</h2> */}
            <div className="report__bubble__text__suggestions">
                {/* <h2 className="report__header2">Consider the context of these words:</h2> */}
                {this.props.data.map((x,i)=>{
                    console.log('this is the x', x, 'this is i', i, 'this is .message', x.messsage);
                    return <p><span class="problem">{x.actual}</span> <span class="message">{x.messsage}</span></p>
                    
                })}
               
            </div>
            </>

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
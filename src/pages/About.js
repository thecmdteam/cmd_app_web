import React from 'react'

class About extends React.Component {

    constructor(props){
        super(props);
            this.handleSubmit = this.handleSubmit.bind(this)
        }

        handleSubmit(e){
            e.preventDeafult();
            alert("This is a new form" +this.input.value)
        }
    render() {
        return (
            <div>
                <h2 style={{marginTop: '6rem'}}>About Page</h2>
                {/* <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input type="text" ref={(input) => this.input = input} />
                    </label>
                    <input type="submit" value="Submit" />
                </form> */}
            </div>
        )
    }
}

export default About

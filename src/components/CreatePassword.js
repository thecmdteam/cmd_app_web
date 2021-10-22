import React from 'react'


class CreatePassword extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            password: '',
            confirmPassword: ''
        }
    }

    render(){
        return (
            <div>
                <h2 style={{marginTop: '6rem'}}>Create Password Page</h2>
                <div className="col-12" id="userReg">
                    <label htmlFor="">Password</label>
                    <input className="form-control impsClr" placeholder="********" type="password"/>
                    <label htmlFor="">Confirm Password</label>
                    <input className="form-control impsClr" placeholder="********" type="password"/>
                </div>
            </div>
        )
    }
}

export default CreatePassword

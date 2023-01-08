import React from "react";


class InputForm extends React.Component {

    constructor(props){
        super(props);
        this.state = {value: ''};


        this.handleChange = this.handleChange.bind(this);
        this.handleChange = this.handleSubmit.bind(this);
    }
}

import React, { Component } from 'react'
import { connect } from 'react-redux'

import Form from '../../components/Form/Form'
import * as actions from '../../store/actions/actions'

class SlotDetails extends Component {

    state = {
        formData: {
            firstName: "",
            lastName: "",
            phoneNumber: ""
        }
    }

    componentDidMount() {
        
        const previousformData = this.props.slots.find(slot => slot.id === this.props.currentSlotId)
        const data = {
            firstName: previousformData.firstName,
            lastName: previousformData.lastName,
            phoneNumber:previousformData.phoneNumber
        }
        this.setState({formData:data})
    }

    changeInputHandler = (event) => {
        const data = { ...this.state.formData }
        if (event.target.name === "firstName") {
            data.firstName = event.target.value
        }
        if (event.target.name === "lastName") {
            data.lastName = event.target.value 
        }
        if (event.target.name === "phoneNumber") {
            data.phoneNumber = event.target.value
        }
        this.setState({ formData: data})
    }

    onSubmit = (event) => {
        event.preventDefault()
        this.props.history.push("/")
        const formData = {
            firstName: this.state.formData.firstName,
            lastName: this.state.formData.lastName,
            phoneNumber: this.state.formData.phoneNumber,
        }
        this.props.savingFormData(this.props.currentSlotId,formData)
    }


    render() {

        const previousformData = this.props.slots.find(slot => slot.id === this.props.currentSlotId)
        return (
            <React.Fragment>
                <Form time={previousformData.time}
                    firstName={previousformData.firstName}
                    lastName={previousformData.lastName}
                    phoneNumber={previousformData.phoneNumber}
                    change={(event) => this.changeInputHandler(event)}
                    submit={(event) => this.onSubmit(event)}/>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        slots: state.slots,
        currentSlotId: state.currentSlotId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        savingFormData: (id,formData) => dispatch(actions.saveSlotDetails(id,formData))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SlotDetails)
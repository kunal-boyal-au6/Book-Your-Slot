import React, { Component } from 'react'
import {connect} from 'react-redux'

import Slot from '../../components/Slots/Slot'
import * as actions from '../../store/actions/actions'

class SlotBook extends Component {

    onSlotClick = (id) => {
        this.props.storeSlotId(id)
        this.props.history.push('/slotDetails')
    }

    render() {
        const slots = this.props.slots.map(slot => {
            return <Slot clicked={(id) => this.onSlotClick(slot.id)} time={slot.time} booked={slot.booked} key={slot.id} />
        })
        return (
            <React.Fragment>
                <h1 style={{ textAlign: "center" }}>Book Your Slot Here !</h1>
                <div style={{ textAlign: 'center' }}>
                    {slots}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        slots:state.slots
    }
}

const mapDispatchToProps = dispatch => {
    return {
        storeSlotId:(id) => dispatch(actions.storingSlotId(id))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SlotBook)
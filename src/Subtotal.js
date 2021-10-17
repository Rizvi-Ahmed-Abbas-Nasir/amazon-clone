import React from 'react'
import './Subtotal.css'

function Subtotal() {
    return (
        <div className="Subtotal">
            <p>Subtotal (0 Item ): <strong>0</strong></p>
            <small className="Subtotal__gift">
                <input type="checkbox" /> This Order Contain a Gift
            </small>
            <button>Proced To Buy</button>
        </div>
    )
}

export default Subtotal

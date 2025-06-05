import React from 'react';

const ConfirmationStep = ({ orderDetails }) => {
    const { selectedSkip, wasteType, placement, deliveryDate } = orderDetails;

    // Format price to GBP
    const formattedPrice = selectedSkip ? new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    }).format(selectedSkip.price) : '£0.00';

    return (
        <div>
            <h2>3. Confirm Your Order</h2>
            <p>Please review your order details below before confirming.</p>
            <div className="confirmation-summary">
                <div className="summary-item">
                    <span className="label">Skip Choice</span>
                    <span className="value">{selectedSkip?.name} ({selectedSkip?.size})</span>
                </div>
                <div className="summary-item">
                    <span className="label">Waste Type</span>
                    <span className="value">{wasteType}</span>
                </div>
                <div className="summary-item">
                    <span className="label">Placement</span>
                    <span className="value">{placement}</span>
                </div>
                <div className="summary-item">
                    <span className="label">Delivery Date</span>
                    <span className="value">{deliveryDate}</span>
                </div>
                 <div className="summary-item">
                    <span className="label">Total Price</span>
                    <span className="value price">{formattedPrice}</span>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationStep;
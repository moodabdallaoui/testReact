import React from 'react';

const DetailsStep = ({ orderDetails, onDetailsChange }) => {
    const handleInputChange = (e) => {
        onDetailsChange({ ...orderDetails, [e.target.name]: e.target.value });
    };
    
    // Get today's date in YYYY-MM-DD format for min attribute of date input
    const today = new Date().toISOString().split('T')[0];

    return (
        <div>
            <h2>2. Provide Your Details</h2>
            <div className="form-group">
                <label>Waste Type</label>
                <div className="radio-group">
                    <label>
                        <input type="radio" name="wasteType" value="Mixed" checked={orderDetails.wasteType === 'Mixed'} onChange={handleInputChange} />
                        <span>Mixed Waste</span>
                    </label>
                     <label>
                        <input type="radio" name="wasteType" value="Inert" checked={orderDetails.wasteType === 'Inert'} onChange={handleInputChange} />
                        <span>Inert Waste</span>
                    </label>
                </div>
            </div>

            <div className="form-group">
                <label>Skip Placement</label>
                 <div className="radio-group">
                    <label>
                        <input type="radio" name="placement" value="Private Property" checked={orderDetails.placement === 'Private Property'} onChange={handleInputChange} />
                        <span>Private Property (Driveway)</span>
                    </label>
                     <label>
                        <input type="radio" name="placement" value="Public Road" checked={orderDetails.placement === 'Public Road'} onChange={handleInputChange} />
                        <span>Public Road (Permit may be required)</span>
                    </label>
                </div>
            </div>
            
            <div className="form-group">
                <label htmlFor="deliveryDate">Preferred Delivery Date</label>
                <input
                    type="date"
                    id="deliveryDate"
                    name="deliveryDate"
                    value={orderDetails.deliveryDate}
                    onChange={handleInputChange}
                    min={today}
                />
            </div>
        </div>
    );
};

export default DetailsStep;
import React, { useState } from 'react';
import SkipSelectionStep from './components/SkipSelectionStep';
import DetailsStep from './components/DetailsStep';
import ConfirmationStep from './components/ConfirmationStep';
import './styles.css';

const App = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [orderDetails, setOrderDetails] = useState({
        selectedSkip: null,
        wasteType: 'Mixed',
        placement: 'Private Property',
        deliveryDate: new Date().toISOString().split('T')[0],
    });

    const handleNext = () => {
        if (currentStep < 3) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleBack = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };
    
    const handleConfirm = () => {
        alert('Order Confirmed!\n\n' + JSON.stringify(orderDetails, null, 2));
    }

    const isNextDisabled = () => {
        if (currentStep === 1) return !orderDetails.selectedSkip;
        if (currentStep === 2) return !orderDetails.deliveryDate;
        return false;
    };


    const formatPrice = (price) => new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);

    return (
        <div className="wizard-container">

            
            <div className="wizard-content">
                {currentStep === 1 && (
                    <>
                        <h2>Choose Your Skip Size</h2>
                        <p className="subtitle">Select the skip size that best suits your needs</p>
                        <SkipSelectionStep 
                            onSkipSelect={(skip) => setOrderDetails({...orderDetails, selectedSkip: skip})} 
                            selectedSkip={orderDetails.selectedSkip} 
                        />
                    </>
                )}
                {currentStep === 2 && <DetailsStep orderDetails={orderDetails} onDetailsChange={setOrderDetails} />}
                {currentStep === 3 && <ConfirmationStep orderDetails={orderDetails} />}
            </div>

         
            <div className="wizard-footer">
                <div className="footer-summary">
                    {orderDetails.selectedSkip ? (
                        <>
                           Selected: <span>{orderDetails.selectedSkip.name}</span> / <span>{formatPrice(orderDetails.selectedSkip.price)}</span> / <span>{orderDetails.selectedSkip.hire_period} day hire</span>
                        </>
                    ) : (
                        "Please select a skip to continue."
                    )}
                </div>
                <div className="footer-nav-buttons">
                    {currentStep > 1 && (
                        <button className="btn" onClick={handleBack}>Back</button>
                    )}
                     {currentStep < 3 ? (
                        <button className="btn btn-primary" onClick={handleNext} disabled={isNextDisabled()}>
                            Continue →
                        </button>
                    ) : (
                        <button className="btn btn-primary" onClick={handleConfirm}>Confirm Order</button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default App;
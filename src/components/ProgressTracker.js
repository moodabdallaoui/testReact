import React from 'react';

const ProgressTracker = ({ currentStep }) => {
    const steps = ['Choose Skip', 'Details', 'Confirm'];

    return (
        <div className="progress-tracker">
            {steps.map((step, index) => (
                <div key={index} className={`step ${index + 1 === currentStep ? 'active' : ''}`}>
                    <div className="step-number">{index + 1}</div>
                    <div className="step-label">{step}</div>
                </div>
            ))}
        </div>
    );
};

export default ProgressTracker;
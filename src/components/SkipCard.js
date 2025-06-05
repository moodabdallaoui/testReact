import React from 'react';

const SkipCard = ({ skip, onSelect, isSelected }) => {
    
    const { name, size, price, image_url, hire_period } = skip;


    const formattedPrice = new Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(price);

    return (
        <div className={`skip-card ${isSelected ? 'selected' : ''}`}>
            <div className="skip-image-container">
                <img src={image_url} alt={name} className="skip-image" />
                <div className="skip-yard-badge">{size}</div>
            </div>
            
            <div className="skip-card-content">
                <h3>{name}</h3>
                <p className="skip-hire-period">{hire_period}</p>
                <p className="skip-price">{formattedPrice}</p>
                
                <button 
                    className="btn-select-skip" 
                    onClick={() => onSelect(skip)}
                >
                    {isSelected ? 'Selected' : 'Select This Skip →'}
                </button>
            </div>
        </div>
    );
};

export default SkipCard;
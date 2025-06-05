import React, { useState, useEffect } from 'react';
import SkipCard from './SkipCard';

const SkipSelectionStep = ({ onSkipSelect, selectedSkip }) => {
    const [skips, setSkips] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSkips = async () => {
            try {
                const response = await fetch('https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const rawData = await response.json();


                const transformedSkips = rawData.map(skip => {
                    const finalPrice = skip.price_before_vat * (1 + skip.vat / 100);

                    return {
                        id: skip.id,
                        name: `${skip.size} Yard Skip`, 
                        size: `${skip.size} Yard`,  
                        price: finalPrice,                  
                        hire_period: `${skip.hire_period_days} day hire period`, 
                        
                    };
                });

                setSkips(transformedSkips);

            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchSkips();
    }, []);

    if (loading) return <p style={{color: 'white', textAlign: 'center'}}>Loading skip options...</p>;
    if (error) return <p style={{color: 'red', textAlign: 'center'}}>Error loading skips: {error}</p>;

    return (
        <div className="skip-selection-container">
            {skips.map(skip => (
                <SkipCard
                    key={skip.id}
                    skip={skip}
                    onSelect={onSkipSelect}
                    isSelected={selectedSkip && selectedSkip.id === skip.id}
                />
            ))}
        </div>
    );
};

export default SkipSelectionStep;
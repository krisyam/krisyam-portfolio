import './Privacy.css'
import React from 'react'
import MyAcademyPrivacyPolicy from './myAcademyPrivacyPolicy'
import { useLocation } from 'react-router-dom';

export default function PrivacyPolicyComponent() {
    const { pathname } = useLocation();
    
    const determinePrivacyPolicy = (currentPath) => {
        if (currentPath.includes('/myacademy')) {
            return 'MyAcademy';
        // } else if (currentPath.includes('/calculator')) {
        //     return 'Calculator';
        } else { 
            return null;
        }
    };

    const currentPrivacyPolicy = determinePrivacyPolicy(pathname);

    const renderPrivacyPolicy = () => {
        switch (currentPrivacyPolicy) {
            case 'MyAcademy':
                return <MyAcademyPrivacyPolicy />;
            // case 'Calculator':
            //     return <CalculatorPrivacyPolicy />;
            default:
                return null;
        }
    };

    return (
        <div className="privacy-container">
            <div className="secondary title">
                <div className="text">Privacy Policy</div>
            </div>
            <div style={{display:'flex', justifyContent: 'center'}}>
                <div className='doubleContainer' style={{width: "90%"}}>
                    {renderPrivacyPolicy()}
                </div>
            </div>
            
        </div>
    );
}

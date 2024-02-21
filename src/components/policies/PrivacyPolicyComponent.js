import './Privacy.css'
import React from 'react'
import MyAcademyPrivacyPolicy from './myAcademyPrivacyPolicy'
import { useLocation } from 'react-router-dom';
import AboutMeComponent from '../AboutMeComponent';

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
            <h1 className="">Privacy Policy</h1>
            {renderPrivacyPolicy()}
        </div>
    );
}

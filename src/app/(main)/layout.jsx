import Footers from '@/components/shared/Footers';
import Navbar from '@/components/shared/Navbar';
import React from 'react';

const MainLayout = ({ children }) => {
    return (
        <div>
            <Navbar />
            {children}
            <Footers />
        </div>
    );
};

export default MainLayout;
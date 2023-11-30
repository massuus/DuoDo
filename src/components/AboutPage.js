import React from 'react';
import { Container } from '@mui/system';
import { styled } from '@mui/system';

const RootContainer = styled(Container)({
    minHeight: '91vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height:'100%',
});

const AboutPage = () => {
    return (
        <div style={{  overflowX: 'hidden' }}>
            <RootContainer maxWidth="md">
                <iframe
                    title="Resume"
                    src="/Sam van Remortel CV.pdf"  // Remove the '/public' prefix
                    width="100%"
                    height="600vc"
                    style={{ border: 'none' }}
                />

                    {/* ... (existing content) ... */}
            </RootContainer>
        </div>
    );
};

export default AboutPage;
import React from 'react';
import { Typography, Paper } from '@mui/material';
import { Container } from '@mui/system';
import { styled } from '@mui/system';

const RootContainer = styled(Container)({
    minHeight: '91vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    padding: '16px'
});

const RootPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
}));

const HomePage = () => {
    return (
        <div style={{  overflowX: 'hidden' }}>
            <RootContainer maxWidth="md">
                <RootPaper style={{ backgroundColor: '#020112', color: '#038a8a' }}>
                    <Typography variant="h4" gutterBottom>
                        Welkom op de DuoDo App!
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Hier is de opdracht die jullie mij hebben gestuurd:
                    </Typography>

                    <Typography variant="body1" paragraph>
                        Technisch:
                        <br />
                        - op basis van het Proof-of-Concept in de bijlage (incl. Context & Hooks);
                        <br />
                        - waardoor een gebruiker in staat wordt gesteld om items toe te voegen, aanpassen, afvinken en verwijderen;
                        <br />
                        - Waarbij de items alleen worden opgeslagen in de GlobalState (ze mogen dus verdwijnen na refresh);
                        <br />
                        - Gebruik makende van Lodash of ES6 methoden (zoals Array.filter etc.) voor data manipulatie.
                    </Typography>

                    <Typography variant="body1" paragraph>
                        UI:
                        <br />
                        - Gebruik makende van Material-UI componenten voor de interface;
                        <br />
                        - Met een design naar eigen inzicht;
                        <br />
                        - De TODO lijst is onderdeel van een grotere app waarin meerdere pagina's zijn (inhoud onbelangrijk: lorem ipsum), en een pagina daarvan is dus de TODO lijst;
                        <br />
                        - de structuur bestaat uit twee kolommen: links een lijst van alle pagina's, rechts de content van de geselecteerde pagina;
                        <br />
                        - Zorg ervoor dat het ook lekker werkt op de mobiel.
                    </Typography>
                </RootPaper>
            </RootContainer>
        </div>
    );
};

export default HomePage;

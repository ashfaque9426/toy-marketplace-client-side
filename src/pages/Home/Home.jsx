// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Home = () => {
    useTitle("Home");
    const [selectedTabData, setSelectedTabData] = useState([]);

    const handleSelectedTab = e => {
        const tabStr = e.target.innerText;
        const whiteSpaceReplacer = tabStr.replace(/ /g, "%20");

        fetch(`https://b7a11-toy-marketplace-server-side-ashfaque9426-j702e8udy.vercel.app/toyCollectionBySubCategory/${whiteSpaceReplacer}`)
        .then(res => res.json())
            .then(data => setSelectedTabData(data))
    }

    return (
        <main role='main'>
            <h2 className='text-center mt-5 mb-3'>This Is Home</h2>
            <section>
                <h2 className='fw-bold text-center mt-5 mb-3'>Gaming Action Figures</h2>
                <Tabs className='mb-5 px-5'>
                    <TabList onClick={handleSelectedTab}>
                        <Tab>Assassin&apos;s Creed</Tab>
                        <Tab>Batman</Tab>
                        <Tab>The Legend of Zelda</Tab>
                    </TabList>
                    
                    <TabPanel>
                        {
                            selectedTabData.length
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            selectedTabData.length
                        }
                    </TabPanel>
                    <TabPanel>
                        {
                            selectedTabData.length
                        }
                    </TabPanel>
                </Tabs>
            </section>
        </main>
    );
};

export default Home;
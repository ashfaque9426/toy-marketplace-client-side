// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FigureCardForHome from '../../Components/FigureCardForHome/FigureCardForHome';
import './Home.css'

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

    useEffect(()=> {
        fetch(`https://b7a11-toy-marketplace-server-side-ashfaque9426-j702e8udy.vercel.app/toyCollectionBySubCategory/Assassin's%20Creed`)
        .then(res => res.json())
            .then(data => setSelectedTabData(data))
    }, []);

    return (
        <main role='main'>
            <h2 className='text-center mt-5 mb-3'>This Is Home</h2>
            <section>
                <h2 className='fs-3 fw-bold text-center mt-5 mb-3'>Suggested Categories</h2>
                <Tabs className='mb-5 px-5 tabsContainerCustomClass'>
                    <TabList onClick={handleSelectedTab}>
                        <Tab>Assassin&apos;s Creed</Tab>
                        <Tab>Batman</Tab>
                        <Tab>The Legend of Zelda</Tab>
                    </TabList>
                    
                    <TabPanel>
                        <section className='w-75 mx-auto my-5 myTabs row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3'>
                            {
                                selectedTabData.map(tabData => <FigureCardForHome key={tabData._id} tabData={tabData} />)
                            }
                        </section>
                    </TabPanel>
                    <TabPanel>
                        <section className='w-75 mx-auto my-5 myTabs row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3'>
                            {
                                selectedTabData.map(tabData => <FigureCardForHome key={tabData._id} tabData={tabData} />)
                            }
                        </section>
                    </TabPanel>
                    <TabPanel>
                        <section className='w-75 mx-auto my-5 myTabs row row-cols-1 row-cols-md-2 row-cols-xxl-3 g-3'>
                            {
                                selectedTabData.map(tabData => <FigureCardForHome key={tabData._id} tabData={tabData} />)
                            }
                        </section>
                    </TabPanel>
                </Tabs>
            </section>
        </main>
    );
};

export default Home;
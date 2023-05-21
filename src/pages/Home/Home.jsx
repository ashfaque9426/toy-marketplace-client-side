// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import FigureCardForHome from '../../Components/FigureCardForHome/FigureCardForHome';
import './Home.css'
import HomeGallery from '../../Components/HomeGallery/HomeGallery';

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
        <main className='homeMainContainer' role='main'>
            <section className='py-5 bg-dark text-light collectorsCornerContainer'>
                <h2 className='text-center mt-5 mb-3 fs-4 mx-1'>Collector&apos;s Corner: Unleash the Power of Gaming Franchise Action Figures</h2>
                <article>
                    <p className='text-center w-50 mx-auto meaningFullText'>Welcome to our Collector&apos;s Corner, where you deep dive into the world of Gaming Franchise Action Figures and other related accessories! Here, you will explore the captivation realm of toy gaming toy action figures. that bring your favourite video game characters to life.</p>
                    <p className='text-start w-50 mx-auto fw-semibold meaningFullText pt-3'>**Here One of Our User&apos;s Review video of <strong>Minecraft music box set</strong>, Which he has made by collecting accessories from this site.**</p>
                    <div className='text-center pt-3 pb-5'>
                        <iframe className='myIframe' width="620" height="350" src="https://www.youtube.com/embed/j_mOmQ4HSak" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
                    </div>
                </article>
            </section>
            <section className='pt-5 suggestedCategoryContainer'>
                <h2 className='fs-3 fw-bold text-center mt-5 mb-3'>Suggested Categories</h2>
                <Tabs className='mb-5 px-5 tabsContainerCustomClass'>
                    <TabList className='text-center border pt-2 myTablist' onClick={handleSelectedTab}>
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
            <section className='text-center mb-5 myHomeGallery'>
                <h2 className='pt-5 mb-5'>Figure Gallery</h2>
                <HomeGallery />
            </section>
        </main>
    );
};

export default Home;
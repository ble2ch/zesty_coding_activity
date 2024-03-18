import React from 'react';
import Navbar from '../components/Navbar';

const AboutPage = async () => {
    const res = await fetch('https://www.zesty.io/-/instant/7-e93178-vqvclg.json');
    const data_raw = await res.json();
    const data2 = data_raw.data[0].content.page_content;
    return (
        <>
            <Navbar />
            <h1>About</h1>
            <div dangerouslySetInnerHTML={{ __html: data2 }}></div>

            
        </>
    )
}

export default AboutPage
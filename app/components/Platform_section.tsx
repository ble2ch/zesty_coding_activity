'use client';
import React from 'react';

interface Platform_section {
    lang_id: number;
    title: string;
    text_content: string;
}

const Platform_section = async () => {
    const res = await fetch('https://www.zesty.io/-/gql/platform_section.json');
    const users: Platform_section[] = await res.json();
    return (
        <>     
            <div id="platformSection">     
            {users.map(user => 
                <div key={user.lang_id}>
                    <h1>{user.title}</h1>
                    <div dangerouslySetInnerHTML={{ __html: user.text_content }}></div>
                    <br />
                </div>
            )}
            </div>  
        </>
    )
}

export default Platform_section
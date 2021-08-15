import React from 'react';
import Header from './Header';
import Aims from './Aims';
import AddMember from './AddMember';
import Partners from './Partners';
import Footer from './Footer';

function Home() {
    return (
        <>
           <Header/>
           <Aims/>
           <AddMember/>
           <Partners/>
           <Footer/>
        </>
    )
}

export default Home;

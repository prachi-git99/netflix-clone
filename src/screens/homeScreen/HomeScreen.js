import React from 'react'
import Nav from '../../Components/Nav'
import Banner from '../../Components/Banner'
import "../../screens/homeScreen/HomeScreen.css"
import requests from '../../Requests'
import Row from '../../Components/Row'


 function HomeScreen() {
   return (
     <div className='homeScreen'>
        <Nav />
        <Banner />
        <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>
        <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
        <Row title='Top Rated' fetchUrl={requests.fetchTopRated}/>
        <Row title='Action Movies' fetchUrl={requests.fetchActionMovies}/>
        <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies}/>
        <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies}/>
        <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies}/>
        <Row title='Documentries' fetchUrl={requests.fetchDocumentaries}/>
        
    </div>
   )
 }
 
 export default HomeScreen
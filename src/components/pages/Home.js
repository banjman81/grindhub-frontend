import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



function Home() {
    const [planets, setPlanets] = useState([])

    
    async function initialLoad(){
        try{
            let payload = await axios.get('https://swapi.dev/api/planets')
            setPlanets(payload.data.results)
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        initialLoad()
    }, [])

    
    return (
        <div>
            <h1>Home</h1>
            <Link to='/em'><h3>Look for works</h3></Link>
            <ul style={{background: '', minHeight: '50px'}}>
                {planets?.map((planet) => (
                <li key={planet.name}>{planet.name}</li>
                ))}
            </ul>
            
        </div>);
}

export default Home;

import React, { useEffect, useState } from 'react'
import Navbar from "../components/Navbar"
import RateLimitedUI from '../components/RateLimitedUI';
import axios from 'axios';

const HomePage = () => {
    const [isRateLimited, setRateLimited] = useState(true);
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {   
        const fetchNotes = async () => {
            try {
                const res = await axios.get('http://localhost:5001/api/notes');
                console.log(res.data);
            } catch (error) {
                console.log('Failed to fetch notes:');
            } finally {
                setLoading(false);
            }
        };

        fetchNotes();
    });
    
  return (
    <div className='min-h-screen'>
        <Navbar/>

        {isRateLimited && <RateLimitedUI />}
    </div>
  );
};

export default HomePage
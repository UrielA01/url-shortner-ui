import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { fetchURL } from '../services/api';

function ShortUrlRedirect() {
    const { shortId } = useParams();

    useEffect(() => {
        fetchURL(shortId)
            .then(response => {
                const longUrl = response.data.longUrl;
                window.location.href = longUrl; 
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [shortId]);

    return (
        <div>
            Redirecting...
        </div>
    );
}

export default ShortUrlRedirect;

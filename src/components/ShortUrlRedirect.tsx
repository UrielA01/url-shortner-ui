import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchURL } from '../services/api';

function ShortUrlRedirect() {
    const { shortId } = useParams<{ shortId: string }>();

    useEffect(() => {
        if (shortId) {
            fetchURL(shortId)
                .then(response => {
                    const originalUrl: string = response;
                    window.location.href = originalUrl;
                })
                .catch(error => {
                    window.location.href = "/";
                });
        }
    }, [shortId]);

    return (
        <div>
            Redirecting...
        </div>
    );
}

export default ShortUrlRedirect;

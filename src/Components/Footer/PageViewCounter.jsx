// PageViewCounter.js
import React, { useEffect, useState, useRef } from 'react';
import styles from './PageViewCounter.module.css';

function PageViewCounter() {
    const [count, setCount] = useState(() => {
        const storedVisitCount = localStorage.getItem('websiteVisitCount');
        return storedVisitCount ? parseInt(storedVisitCount, 10) : 0;
    });
    const hasRun = useRef(false);  // Use ref to track if effect has already run

    useEffect(() => {
        if (!hasRun.current) {
            const storedVisitCount = localStorage.getItem('websiteVisitCount');
            let visitCount = storedVisitCount ? parseInt(storedVisitCount, 10) : 0;
            
            visitCount += 1;
            
            setCount(visitCount);
            localStorage.setItem('websiteVisitCount', visitCount);
            hasRun.current = true;  // Set the ref to true after running
        }
    }, []); // Empty dependency array ensures useEffect runs only once

    return (
        <div>
            <h3 className={styles.pageviewcounter_content}>You’re among the first</h3>
            <h1 className={styles.pageviewcounter_count}>{count}</h1>
            <p className={styles.pageviewcounter_content}>to explore our page!</p>
            
        </div>
    );
}

export default PageViewCounter;

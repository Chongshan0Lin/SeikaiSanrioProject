import React, { useEffect } from 'react';

const homePage = () => {

    useEffect(() => {
        fetch('https://example.com/api/history')
          .then(response => response.json())
          .then(data => console.log(data));
      }, []);
      
}
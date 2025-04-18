import React, { useEffect, useState } from 'react';
import axios from 'axios';

const QuotesGenerator = () => {
  const [quoteDatas, setQuoteDatas] = useState({ content: '', author: '' });
  const [loading, setLoading] = useState(true);

  const fetchQuote = () => {
    setLoading(true);
    axios
      .get('https://api.quotable.io/random')
      .then((res) => {
        setQuoteDatas({
          content: res.data.content,
          author: res.data.author,
        });
        setLoading(false); 
      })
      .catch((err) => {
        console.log('Failed to fetch quote: ', err);
        setLoading(false);  
      });
  };
  

  useEffect(() => {
    fetchQuote();
  }, []);

  return (
    <div style={styles.card}>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <p style={styles.content}>"{quoteDatas.content}"</p>
          <p style={styles.author}>— {quoteDatas.author}</p>
          <button onClick={fetchQuote} style={styles.button}>
            New Quote
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  card: {
    maxWidth: '500px',
    margin: '50px auto',
    padding: '30px',
    borderRadius: '12px',
    textAlign: 'center',
    fontFamily: 'sans-serif',
    backgroundColor: '#fdfdfd',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  },
  content: {
    fontSize: '20px',
    fontStyle: 'italic',
    color: '#333',
  },
  author: {
    marginTop: '16px',
    fontWeight: 'bold',
    color: '#555',
  },
  button: {
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '16px',
    fontWeight: '700',
    cursor: 'pointer',
    background: '#f19733',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
  },
};

export default QuotesGenerator;

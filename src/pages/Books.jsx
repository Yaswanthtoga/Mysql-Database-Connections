import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Books = () => {
  const [books,setBooks] = useState([]);
  useEffect(()=>{
    const fetchAllBooks = async ()=>{
        try {
            const data = await axios.get("http://localhost:8800/books");
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    fetchAllBooks();
  },[])
  return (
    <div>Books</div>
  )
}

export default Books
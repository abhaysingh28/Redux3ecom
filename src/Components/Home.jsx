import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { add,remove } from '../store/slices/cartSlice';
import "./Home.css"

const Home = () => {
  const dispatch = useDispatch();
  const value = useSelector((state)=>{
    return state.cart
  })
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const { data } = await axios.get('https://fakestoreapi.com/products');
    setdata(data);
    console.log(data);
    setloading(false);
  }
  const clickHandler = (e)=>{
    dispatch(add(e))
  }
  const removeHandler = (e)=>{
    dispatch(remove(e))
  }
  return (
    <>
     <div className="nav">
      <Link to="/cart">cart</Link>
       <h1>{value.length} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"/><path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"/></svg></h1>
     </div>
      <div className="home">
        {
          loading ? <h1></h1> :
          data.map((e, i) => (
            <div  key={i} className="home__container">
              <img className='home__containerImage'  src={`${e.image}`}
               alt="" />
               <div className="homeContainerTitle">

               <h1>{e.title}</h1>
               </div>
               <div className="cem">

               <button onClick={()=>clickHandler(e)} >add</button>
               </div>
            </div>
          ))
        }

      </div>

    </>
  );
}

export default Home;

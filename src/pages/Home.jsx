import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';
// import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  width: "80vw",
  height: '50vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: 'brown',
};

const Home = () => {
  const [items, setitems] = useState([]);
  const [item, setitem] = useState("chicken")
  let SearchRef = useRef()
  let getRecipe = async () => {
    //mathod1
    // let res = await fetch("https://api.edamam.com/search?q=chicken&app_id=88503222&app_key=9f28dc46486133bc3ea90dde6a0af45c")
    //     let data = await res.json();
    //     console.log(data);

    //method2 axios
    let res = await axios.get(`https://api.edamam.com/search?q=${item}&app_id=88503222&app_key=9f28dc46486133bc3ea90dde6a0af45c`)
    // console.log(res)
    console.log(res.data.hits)
    setitems(res.data.hits)

  }
  const handleSearch = (e) => {
    e.preventdefaiunt();
    console.log("pagal..")
    let value = SearchRef.current.value
    console.log(value);
    setitem(value)
    SearchRef.current.value = ""
  }
  useEffect(() => {
    getRecipe();
  }, [item])



  return (
    <div className='pt-5'>
      <form className="d-flex col-6 m-auto my-4" role="search">
        <input ref={SearchRef} className="form-control me-2" type="search" placeholder="Search recipe here.." aria-label="Search" />
        <button onClick={handleSearch} className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <div className="row m-0 p-0 gap-3 justify-contect-center">

        {
          items.map((elm, index) => {
            return <div className="card" style={{ width: '18rem' }}>
              <img src={elm.recipe.image} className="card-img-top" alt="...food" />
              <div classname="card-body">
                <h5 classname="card-body">{elm.recipe.label}</h5>
                {/* <p classname="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                {/* <Link to="/Single" state={elm} className="btn btn-success" />View recipe<Link /> */}
                <Link to="/single" state={elm} className="btn btn-success">View recipe </Link>
              </div>
            </div>


          })
        }

      </div>
<h1>hii</h1>
    </div>
  )
}

export default Home

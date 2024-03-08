import { useEffect, useState } from 'react'
import { apiUrl, filterData } from "./data.js";
import { toast } from "react-toastify";
import Navbar from './components/Navbar.jsx'
import Filter from './components/Filter.jsx'
import Cards from './components/Cards.jsx'
import Spinner from './components/Spinner.jsx'


function App() {
  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);

  async function fetchData() {
    setLoading(true);

    try{
      let response = await fetch(apiUrl);
      let output = await response.json();
      //output
      setCourses(output.data); 
    } 
    catch{
      toast.error("Error Occurred");
      
    }
    setLoading(false);
  }

  useEffect( () => {
   fetchData();
  }, []);

  return (
    <div className='min-h-screen flex flex-col bg-[#4A4E69]'>
      <div>
        <Navbar />
      </div>

      <div className=''>
        <div>
          <Filter filterData={filterData}
           category={category}
           setCategory={setCategory}
          />
        </div>

        <div className="w-11/12 max-w-[1200px] min-h-[50vh] mx-auto flex flex-wrap justify-center items-center">
          
          {/* {
            (courses.length === 0 || Object.keys(courses).length === 0) ? 
            (<div className='w-max max-h-screen'>No Courses Found</div>) :  
            (loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>))
          } */}
          
          {
            loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)
          }
        </div>
      </div>

      
      
    </div>
  )
}

export default App

import { useState, useEffect } from "react";
import { API_URL } from "../../appconstants";

const People = () => {
  const [data, setData] = useState([]);

  const fetchPeople = () => {
    fetch(`${API_URL}people/`)
      .then((res) => res.json())
      .then((json) => setData(json?.results));
  };

  useEffect(() => {
    fetchPeople();
  }, []);

 const handlePlanets = () =>{

 }
  return (
    <div className="container">
      <h1>People List</h1> <button onClick = {handlePlanets}>Planets</button>
      <table>
        <thead>
          <tr>
          <th>Name</th>
            <th>Height</th>
            <th>Hair Color</th>
            <th>Birth Year</th>
            <th>Gender</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.hair_color}</td>
              <td>{item.birth_year}</td>
              <td>{item.gender}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default People;

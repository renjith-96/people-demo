import { useState, useEffect } from "react";
import { API_ROUTES, API_URL } from "../../appconstants";
import { useNavigate } from "react-router-dom";

const People = () => {
  const [data, setData] = useState([]);
  const { PEOPLE } = API_ROUTES;
  let navigate = useNavigate();

  const fetchPeople = () => {
    fetch(`${API_URL}${PEOPLE}`)
      .then((res) => res.json())
      .then((json) => setData(json?.results));
  };

  useEffect(() => {
    let mounted = true;
    mounted && fetchPeople();

    return () => (mounted = false);
  }, []);

  // handles the route to people detail page
  const handleClick = (index) => {
    navigate(`/details/${index}`);
  };

  return (
    <div className="container">
      <h1>People List</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Hair Color</th>
            <th>Birth Year</th>
            <th>Gender</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.name}>
              <td>{item.name}</td>
              <td>{item.height}</td>
              <td>{item.hair_color}</td>
              <td>{item.birth_year}</td>
              <td>{item.gender}</td>
              <td>
                <button onClick={() => handleClick(index + 1)}> Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default People;

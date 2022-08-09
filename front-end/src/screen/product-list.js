import React from "react";
import { useNavigate } from "react-router-dom";
import "./styles.css";
import "./styles.css";


function MyList() {
const [state, setState] = React.useState()
let navigate = useNavigate();

React.useEffect(() => {
 fetch("/get")
      .then((response) => response.json())
     .then((data) => {
         setState(data);
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
}, [])
    
 

  const handleNavigate = () => navigate("/", { replace: true });

  return (
    <div className="App">
      <div>
        <button type="submit" className="submit" onClick={handleNavigate}>
          Go to form
        </button>
      </div>
      <div className="App-header">
        <span className="span">Product list</span>

        <table className="table table-striped table-hover table-bordered table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Description</th>
              <th scope="col">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {state?.map((item) => (
              <tr>
                <th scope="row">{item.id}</th>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyList;

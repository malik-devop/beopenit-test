import React from "react"
import "./styles.css";


const defaultValues = {
    id: null,
    name: "",
    description: "",
    quantity: 0
}

function MyList() {
    const [formValues, setFormValues] = React.useState(defaultValues); 
    console.log("🚀 ~ file: product-table.js ~ line 15 ~ MyList ~ formValues", formValues)
    
    const handleSubmit = async () => { 
        const input = {
          ...formValues,
            id: parseInt(formValues.id),
          quantity: parseInt(formValues.quantity),
        };

       await fetch("/create", {
         method: "POST", // or 'PUT'
         headers: {
           Accept: "application/json",
           "Content-Type": "application/json",
         },
         body: JSON.stringify(input),
       })
         .then((response) => response.json())
         .then((data) => {
           console.log("Success:", data);
         })
         .catch((error) => {
           console.error("Error:", error);
         });

    }
    

     const handleFieldChange = React.useCallback(
       (e) => {
         setFormValues({ ...formValues, [e.target.name]: e.target.value });
       },
       // eslint-disable-next-line react-hooks/exhaustive-deps
       [formValues]
     );

    return (
      <>
        <span className="span">Add product form</span>
        <label className="label">Id</label>
        <input
          name="id"
          type="number"
          value={formValues.id}
          onChange={handleFieldChange}
          className="input"
        />
        <label className="label">Name</label>
        <input
          name="name"
          type="text"
          value={formValues.name}
          onChange={handleFieldChange}
          className="input"
        />
        <label className="label">Description</label>
        <input
          name="description"
          type="text"
          value={formValues.description}
          onChange={handleFieldChange}
          className="input"
        />
        <label className="label">Quantity</label>
        <input
          name="quantity"
          type="number"
          value={formValues.quantity}
          onChange={handleFieldChange}
          className="input"
        />
        <button type="submit" className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </>
    );
    
}


export default  MyList
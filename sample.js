import React from "react";
const Data = {
    name: "John Doe",
    id:1,
    email: "john@gmail.com",
    phone: "1234567890",
    children: [
      {
        name: "Jane Doe",
        id:21,
        email: "jane@gmail.com",
        phone: "2345678901",
        subchildren: [
          {
            name: "Janice Doe",
            id:211,
            email: "janice",
      },
        {
            name: "Jack Doe",
            id:212,
            email: "jack@gmail.com"
        }],
    },
    {
        name: "Jim Doe",
        id:31,
        email: "jim@gmail.com",
        phone: "0987654321"
      }
    
    ]
};

const samplepage=()=>{
    return(
        <div
        className="Parent"
        style={{ backgroundColor: "#ccc", fontStyle: "oblique" }}
      >
        <h1>Name:{Data.name}</h1>
  
        <div className="Child">
          {Data.children.map((children) => (
            <h2
              style={{
                backgroundColor: "blueviolet",
                MarginLeft: "12px",
                paddingTop: "2px",
              }}
            >
              Name:{children.name}
              Id:{children.id}
            </h2>
          ))}
        </div>
      </div>
    );
}
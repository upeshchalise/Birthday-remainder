import React from "react";


const List = ({ people }) => {
  return (
    <>
      {people.map((person) => {
        const { id, name, image, age } = person;
        return (
          <article key={id} className="peoples">
            <img src={image} alt={name} />
            <div>
              <h2>{name}</h2>
              <h4>{age} years</h4>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default List;

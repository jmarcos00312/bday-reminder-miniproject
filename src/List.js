import React from 'react';

const List = ({ people }) => {
  const everyperson = people.map(person => {
    return (
      <div>
        <article className="person">
          <img src={person.image} alt={person.name} />
          <div>
            <h4>{person.name}</h4>
            <p>{person.age}</p>
          </div>

        </article>
      </div>
    )
  })

  return (
    <>
      {everyperson}
    </>
  );
};

export default List;

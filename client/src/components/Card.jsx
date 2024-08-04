import React from 'react';
import { Link } from 'react-router-dom';

const Card = () => {
  return (
    <div>
      <div>
        <div>
          <img src={`/images/${cat.image}`} alt="cat" />
        </div>
        <h5>Cat Name</h5>
        <p>
          Age: Cat Age <br />
          Favorite Food: Favorite Food <br />
          Fun Fact: Fun Fact <br />
        </p>
      </div>
      <div>
        <Link path={`/edit/${cat_.id}`}> Edit </Link>
        <form action={`/delete/${cat_.id}`} method="POST">
          <button type="submit">Delete</button>
        </form>
      </div>
    </div>
  );
};

export default Card;

import Image from "next/image";
import Link from "next/link";
import React from "react";

const RecipesComponent = (props) => {
  const { recipes } = props;
  console.log(recipes);
  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Image</th>
            <th scope="col">See More</th>
          </tr>
        </thead>
        <tbody>
          {recipes.map((r) => {
            return (
              <tr key={r.id}>
                <td>{r.id}</td>
                <td>{r.name}</td>
                <td><Image src={r.image} width={50} height={50}/></td>
                <td> <Link className="btn btn-dark" href={`/recipes/${r.id}`}>See Details</Link></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default RecipesComponent;

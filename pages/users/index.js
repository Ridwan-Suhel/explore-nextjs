import React from "react";
import Link from "next/link";

const index = ({ users }) => {
  return (
    <div>
      <h2>This is from users index page - Total users: {users.length}</h2>
      {users.map((user) => (
        <div key={user.id}>
          <h2>Name: {user.name}</h2>
          <Link href={`users/${user.id}`}>
            <button>User</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default index;

export async function getStaticProps(context) {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return {
    props: { users: data }, // will be passed to the page component as props
  };
}

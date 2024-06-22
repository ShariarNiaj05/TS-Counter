import React, { useState } from "react";

const UserInfoWithUseState = () => {
  const [user, setUser] = useState({ name: "", age: 0, hobbies: [] });
  console.log(user);
  return (
    <form>
      <input
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
        className=""
        name="name"
        id="name"
        placeholder="Name"
      />

      <input
        onChange={(e) => setUser({ ...user, age: e.target.value })}
        type="number"
        className=""
        name="age"
        id="age"
        placeholder="Age"
      />
      <input
        onChange={(e) =>
          setUser({ ...user, hobbies: [...user.hobbies, e.target.value] })
        }
        type="text"
        className=""
        name="hobbies"
        id="hobbies"
        placeholder="Hobbies"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserInfoWithUseState;

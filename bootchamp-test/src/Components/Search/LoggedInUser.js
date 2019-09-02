import React, { useState } from "react";
import Contributor from "../../containers/Contributor";
import { useQuery } from "@apollo/react-hooks";
import { GET_CONTRIBUTOR } from "../../API/Queries";

const LoggedInUser = props => {
  const [typedUser, setTypedUser] = useState("");
  const [user, setUser] = useState("Kirby Campbell");

  const { loading, error, data } = useQuery(GET_CONTRIBUTOR, {
    variables: { name: user }
  });
  console.log(data);

  const searchForUser = () => {
    setUser(typedUser);
    // get request for all contributors
    // async function getUser() {
    //   try {
    //     const response = await axios.get(URL + "contributors/");
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // }
    // getUser();
  };

  return (
    <div className="row">
      <div>
        <input
          type="text"
          placeholder="Type UserName"
          value={typedUser}
          onChange={e => setTypedUser(e.target.value)}
        />
        <button onClick={() => searchForUser()}>Search</button>
      </div>

      {!loading &&
        !error &&
        data.contributors.map(contributor => (
          <Contributor key={contributor.id} contributor={contributor} />
        ))}
      {loading && <div>Loading!</div>}
      {error && <div>Error!</div>}
    </div>
  );
};

export default LoggedInUser;
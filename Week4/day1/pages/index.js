import React, { useState } from "react";

const Home = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Yousif",
    },
    {
      id: 2,
      name: "Riadh",
    },
    {
      id: 3,
      name: "muratadha",
    },
  ]);

  return (
    <div
      style={{
        fontSize: 16,
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        height: "100vh",
      }}
    >
      <ul>
        {data.map((e) => (
          <li key={e.id}>
            {e.name}
            <span>
              <button
                onClick={() => {
                  setData(data.filter((a) => a.id !== e.id));
                }}
              >
                Remove!
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
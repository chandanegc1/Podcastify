import React, { useState } from "react";

const Button = () => {
  const [login, setLogin] = useState(false);
  console.log("butn rerenderd");
  return (
    <button onClick={() => setLogin(!login)}>
      {login ? "Logout" : "Login"}
    </button>
  );
};

export default Button;

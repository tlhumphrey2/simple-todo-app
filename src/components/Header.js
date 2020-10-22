import React from "react"

/*The following is the same as the function statement on the next line: const Header = () => { */
function Header(){
  const headerStyle = {
    backgroundColor: "#678c89",
    color: "#fff",
    padding: "10px 15px"
  };

  return (
    <header style={headerStyle}>
      <h1 style={{ fontSize: "25px", marginBottom: "15px" }}>Simple Todo App</h1>
      <p style={{ fontSize: "19px" }}>Please add to-dos item(s) through the input field</p>
    </header>
  )
}

export default Header

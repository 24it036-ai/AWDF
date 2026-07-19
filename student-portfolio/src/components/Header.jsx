function Header({ name, themeColor }) {
  return (
    <header
      style={{
        background: themeColor,
        padding: "40px",
        textAlign: "center",
        color: "white",
        borderRadius: "15px",
      }}
    >
      <h1>{name}</h1>

      <h3>IT Engineering Student</h3>

      <p>Web Developer | Data Science Enthusiast | AI Learner</p>
    </header>
  );
}

export default Header;
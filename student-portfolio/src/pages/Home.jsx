import Header from "../components/Header";
import About from "../components/About";
import Skills from "../components/Skills";
import Footer from "../components/Footer";

function Home() {

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Python",
    "Java",
    "C++"
  ];

  return (
    <div className="container">

      <Header
        name="Riya Kakkad"
        themeColor="linear-gradient(135deg,#667eea,#764ba2)"
      />

      <About />

      <Skills skillList={skills} />

      <Footer />

    </div>
  );
}

export default Home;
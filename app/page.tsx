import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
// import Project from "./components/project";


export default function Home() {

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "40px 20px" }}>
      <Header/>
      <Card/>
      {/*<Project/>*/}
      <Footer/>
    </main>
  );
}

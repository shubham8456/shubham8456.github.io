import Header from "./components/header";
import Footer from "./components/footer";
import Card from "./components/card";
// import Project from "./components/project";


export default function Home() {

  return (
    <main className="min-h-screen w-full flex flex-col items-center py-2 px-2">
      <Header/>
      <Card/>
      {/*<Project/>*/}
      <Footer/>
    </main>
  );
}

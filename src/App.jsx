import Header from "./components/Header";
import Form from "./components/Form";
import Result from "./components/Result";

function App() {
  return (
    <>
      <Header />
      <div className="container mx-auto p-5">
        <div className="md:flex">
          <Form />
          <Result />
        </div>
      </div>
    </>
  );
}

export default App;

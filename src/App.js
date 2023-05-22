import "./App.css";
import Email from "./components/Email";

function App() {
  const data = {
    sender: "React Newsletter",
    subject: "React Newsletter - issue 36",
    date: "Jul 15",
    message: `React Newsletter Issue 3 - July 15th 2016 Read this issue on the web
          http://reactjsnewsletter.com/issues/36?sid=3QGDYBX ### Comme`,
  };
  return (
    <div className="App">
      <Email {...data} />
    </div>
  );
}
export default App;

import "./styles.css";
import Header from "./components/header/header";
import TopNav from "./components/top-nav/top-nav";

export default function App() {
  return (
    <div className="App">
      <TopNav />

      <Header />
    </div>
  );
}

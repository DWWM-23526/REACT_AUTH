import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ArticlesListScreen from "./screens/ArticlesListScreen";
import SeriesListScreen from "./screens/SeriesListScreen";
import TechsListScreen from "./screens/TechsListScreen";
import Navbar from "./components/Navbar";

function App() {
    return (
        <BrowserRouter>
            <div className="container-lg bg-light">
                <Navbar />
                <main>
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/login" element={<LoginScreen />} />
                        <Route path="/register" element={<RegisterScreen />} />
                        <Route path="/articles" element={<ArticlesListScreen />} />
                        <Route path="/series" element={<SeriesListScreen />} />
                        <Route path="/techs" element={<TechsListScreen />} />
                    </Routes>
                </main>
            </div>
        </BrowserRouter>
    );
}

export default App;

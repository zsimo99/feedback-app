import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutIconLink from "./components/AboutIconLink";
import Post from "./components/Post ";
import { FeedbackProvider } from "./context/FeedbackContext";

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header text="Feedback UI" />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm  />
                  <FeedbackStats />
                  <FeedbackList
                  />
                  <AboutIconLink />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
            <Route path="/post/:id/*" element={<Post />} />
          </Routes>
        </div>
      </Router>
    </FeedbackProvider>
  );
}
export default App;

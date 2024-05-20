import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar/Navbar";
// import FetchItems from "../components/Fetchitems";
// import { useSelector } from "react-redux";
// import LoadingSpinner from "../components/LoadingSpinner";

function App() {
  // const fetchStatus = useSelector((store) => store.fetchStatus);

  return (
    <>
      <Navbar />
      {/* <FetchItems /> */}
      {/* {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />} */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

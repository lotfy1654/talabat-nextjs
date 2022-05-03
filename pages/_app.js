import "bootstrap/dist/css/bootstrap.css"; // Add this line
import "../styles/globals.css";
import Navbar from "../Components/Navbar/Navbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <div>
        <Navbar />
        <Component {...pageProps} />

      </div>
    </>
  );
}

export default MyApp;

import Footer from "../Footer";
import Header from "../Header";

const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  height: "100%",
  width: "100%",
  minHeight: "100vh",
};


const Layout = (props) => {
  return (
    <div className="Layout" style={layoutStyle}>
      <Header />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;

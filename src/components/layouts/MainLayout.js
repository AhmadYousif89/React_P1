import Footer from "./Footer";
import Navigation from "./Navigation";

const MainLayout = (props) => {
  return (
    <div>
      <Navigation />
      <div>{props.children}</div>
      <Footer />
    </div>
  );
};

export default MainLayout;

import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans">
      <Navbar />
      <main>{children}</main>
    </div>
  );
};

export default Layout;
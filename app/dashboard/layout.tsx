import Footer from "./components/footer";
import Header from "./components/header";
import SideNavbar from "./components/side-nav";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-primary">
      <SideNavbar />
      <div className="pl-0 lg:pl-64">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default DashboardLayout;

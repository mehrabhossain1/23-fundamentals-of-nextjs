import Footer from "@/components/Footer/Footer";

const BashboardLayout = ({ children }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default BashboardLayout;

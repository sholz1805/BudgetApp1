import Logo from "./Logo";
import "./App.css"
import PageDescription from "./PageDescription"
import AuthButton from "./AuthButton";
import FloatContainer from "./FloatContainer";
import SpecialFeatureHeader from "./SpecialFeatureHeader";
import SpecialFeatures from "./SpecialFeatures";

function App() {
    const links = [
        {
            buttonName: "Reviews",
        },
        {
            buttonName: "Tips",
        },
        {
            buttonName: "Alerts",
        },
        {
            buttonName: "Blog",
        }
    ]
  return (
    <div className="app-container">
      <div className="header-container">
          <div className="everything-header">
            <div className="header">
                <div style={{cursor: "pointer"}}>
                    <Logo/>
                </div>
                <div style={{fontFamily: "'Poppins', sans-serif", display: "flex", justifyContent: "center", width: "50%", color: "white"}}>
                    {links.map((link)=> <h4>{link.buttonName}</h4>)}
                </div>
                <AuthButton/>
            </div>
              <PageDescription/>
              <FloatContainer/>
          </div>
      </div>
        <SpecialFeatureHeader/>
        <SpecialFeatures/>
    </div>
  );
}

export default App;

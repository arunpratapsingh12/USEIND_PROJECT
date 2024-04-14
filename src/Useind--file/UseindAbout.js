import UseindFooter from './Useind_web_footer';
import UseindNavbar from './Useind_web_Navbar';
import UseindAbout from './Useind_About';
import UseindHeaderMobile from './Useind_Mobile_Header';
import FooterMobile from './Useind_Mobile_footer';



export default function UseindAboutUs()
{
    return(
        <div>
          <div className="Useind--navbar--web--view">
       <UseindNavbar/>
      </div>
      <div className="Useind--navbar--mobile--view">
       <UseindHeaderMobile/>
      </div>
           <UseindAbout/>
      <div className="Useind--navbar--web--view">
       <UseindFooter/>
      </div>
      <div className="Useind--navbar--mobile--view">
       <FooterMobile/>
      </div>
    </div>
    );
}
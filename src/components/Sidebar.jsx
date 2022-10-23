import '../styles/components/sidebar.sass' 

import Avatar from "../img/eu.jpg"

import SocialNetWorks from "./SocialNetWorks";
import InformationContainer from './InformationContainer';

const SideBar = () => {
    return ( 
        <aside id="sidebar">
            <img src={Avatar} alt="Wesley Alves" />
            <p className="title">Desenvolvedor</p>
            <SocialNetWorks />
            <InformationContainer />
            <a href="dowload/Profile.pdf" download="Profile.pdf" type="application/pdf" className="btn">
                Dowload currículo
            </a>
        </aside>
     );
}
 
export default SideBar;

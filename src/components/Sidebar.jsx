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
            <a href="https://mail.google.com/mail/u/1?ui=2&ik=309591f9a8&attid=0.1&permmsgid=msg-a:r-3917974658706673674&th=185b24679b2980d7&view=att&disp=inline&realattid=f_lcwhcnd00" download="Profile.pdf" type="application/pdf" className="btn">
                Dowload currículo
            </a>
        </aside>
    );
}

export default SideBar;

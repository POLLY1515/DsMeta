import logo from '../../recursos/IMG/t2.svg'
import './style.css'
function Header() {
    return (
        
            <header>
        <div className="dsmeta_logo-container">
            <img src={logo} alt="DSMeta"/>
            <h1>DSMeta</h1>
            <p>Desenvolvido por <a href="https://www.linkedin.com/in/polianaamarante/"> Poliana Amarante</a> </p>
        </div>

    </header>

        
    )


}

export default Header
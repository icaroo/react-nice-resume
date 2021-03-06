import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

    if(this.props.data){
       var project = this.props.data.project;
       var lattes = this.props.data.lattes;
       var researchGate = this.props.data.researchGate;
       var academia = this.props.data.academia;
      var name = this.props.data.name;
      var description= this.props.data.description;
      var city= this.props.data.address.city;
      var networks= this.props.data.social.map(function(network){
        return <li key={network.name}><a href={network.url}><i className={network.className}></i></a></li>
      })
    }

    return (
      <header id="home">
      {/* <ParticlesBg type="custom" bg={true} /> */}
      <ParticlesBg color="#316AC8"  num={8} type="cobweb" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">Sobre</a></li>
	         <li><a className="smoothscroll" href="#resume">Currículo</a></li>
            <li><a className="smoothscroll" href="#projects">Projetos</a></li>
            <li><a className="smoothscroll" href="#portfolio">Publicações</a></li>
            <li><a className="smoothscroll" href="#contact">Contato</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            <h3>{description}</h3>
            <hr />
            <ul className="social">
               
               <a href={project} className="button btn project-btn"><img className="socialImg" src={'images/icons/orcidid.png'}></img>ORCID</a>
               <a href={lattes} className="button btn lattes-btn"><img className="socialImg" src={'images/icons/lattes.png'}></img>Lattes</a>
               <a href={researchGate} className="button btn research-gate-btn"><img className="socialImg" src={'images/icons/researchgate.png'}></img>ResearchGate</a>
               <a href={academia} className="button btn academia-btn"><img className="socialImg" src={'images/icons/academiaedu.png'}></img>Academia.edu</a>
            </ul>
         </div>
      </div>

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;

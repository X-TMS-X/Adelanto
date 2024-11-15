import React, { useEffect } from 'react';
import '../styles/global.css';

const Portfolio = () => {
  useEffect(() => {
    // Crear el elemento <link> y agregarlo al <head>
    const link = document.createElement('link');
    link.href = 'https://cdn.jsdelivr.net/npm/boxicons@2.1.1/css/boxicons.min.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Limpiar el efecto cuando el componente se desmonte
    return () => {
      document.head.removeChild(link);
    };
  }, []); // El array vacío asegura que esto solo se ejecute una vez cuando el componente se monte

  return (
    <>
      <header className="header">
        <a href="#home" className="Logo">Tomas <span>Osorno Gomez</span></a>
        <div id="menu-icon" className="menu-icon">
          <i className="bx bx-menu"></i>
        </div>
        <nav className="Navbar">
          <a href="#home" className="active">Inicio</a>
          <a href="#education">Educación</a>
          <a href="#services">Servicios</a>
          <a href="#testimonials">Testimonios</a>
          <a href="#contact">Contacto</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h1>Hola, soy <span>Tomas Osorno Gomez</span></h1>
          <h3 className="text-Animation">Soy Diseñador Web</h3>
          <p>Soy estudiante de programación en ingeniería mecánica, apasionado por el 
            desarrollo de software y el aprendizaje de nuevas tecnologías. A lo largo 
            de mi carrera académica, he adquirido habilidades en diversos lenguajes de 
            programación, bases de datos y desarrollo web. Mi objetivo es aplicar mis 
            conocimientos para resolver problemas complejos y crear soluciones innovadoras 
            en el campo de la tecnología. Me interesa seguir creciendo profesionalmente, 
            explorar nuevas oportunidades y colaborar en proyectos que me desafíen a seguir 
            aprendiendo.</p>


          <div className="social-icons">
            <a href="#"><i className='bx bxl-linkedin'></i></a>
            <a href="#"><i className='bx bxl-github'></i></a>
            <a href="#"><i className='bx bxl-instagram-alt'></i></a>
            <a href="#"><i className='bx bxl-twitter' style={{ color: '#12d0ba' }}></i></a>
            <a href="#"><i className='bx bxl-whatsapp' style={{ color: '#49db07' }}></i></a>
            <a href="#"><i className='bx bxl-facebook' style={{ color: '#144ac9' }}></i></a>
          </div>

          <div className="btn-group">
            <a href="#" className="btn">Contratar</a>
            <a href="#contact" className="btn">Contacto</a>
          </div>
        </div>

        <div className="home-img">
          <img src="https://via.placeholder.com/300" alt="Tomas Osorno Gomez" />
        </div>
      </section>

      <section className="education" id="education">
        <h2 className="heading">Educación</h2>
        <div className="timeline-items">
          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-date">2022</div>
            <div className="timeline-content">
              <h3>Escuela Secundaria</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, suscipit? Nobis illum sint similique itaque alias ex tempore dicta accusamus.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <h2 className="heading">Servicios</h2>
        <div className="services-container">
          <p>Describe tus servicios aquí.</p>
        </div>
      </section>
    </>
  );
};

export default Portfolio;

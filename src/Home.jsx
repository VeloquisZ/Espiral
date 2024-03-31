 import './Home.css'
 
 function Home(){

return(
    <>
    <h2>Espiral</h2>
    <nav>
        <ul>

            <li><a class="active" href="Personas">Personas</a></li>
            <li><a href="#news">Noticias</a></li>
            
            <li class="dropdown">
                <a href="" class="dropbtn">Campanhas</a>
                <div class="dropdown-content">
                  <a href="#">P.I.B</a>
                  <a href="#">Espiral</a>
                  <a href="#">Espiral 2</a>
                </div>
              </li>
              
            <li><a href="#about">Ameaças</a></li>
            <li><a href="#creditos">Creditos</a></li>
          

        </ul>


    </nav>

    <div class="card">
        <p> teste numero 1</p>
    </div>
    </>
)

 }

 export default Home
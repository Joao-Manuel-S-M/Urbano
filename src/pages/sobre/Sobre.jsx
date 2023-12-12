import React from 'react'
import * as S from './style'
import Header from '../../components/header/Header'
import bgAbout from '../../assets/images/bgaboutus.svg'
import patternCircle from '../../assets/images/patterncircle.svg'
import patternSquare from '../../assets/images/patternsquare.svg'
import timeFoto1 from '../../assets/images/timeimg1.webp'
import timeFoto2 from '../../assets/images/timeimg2.webp'
import timeFoto3 from '../../assets/images/timeimg3.webp'
import timeFoto4 from '../../assets/images/timeimg4.webp'
import iconInstagram from '../../assets/images/iconinstagram2.svg'
import iconTwitter from '../../assets/images/icontwitter2.svg'
import iconFacebook from '../../assets/images/iconfacebook2.svg'
import patternLocal from '../../assets/images/patternlocal.svg'
import Footer from '../../components/footer/Footer'

const Sobre = () => {
  return (
    <>
        <S.Home>
          {/* <Header /> */}
          <div className="wrappText">
              <h1>Rápido. Fácil. Prático.</h1>
              <p>
              De usuários para usuários, nossa única importância é tornar sua experiência de hospedagem simples e eficiente. Nosso sistema de hospedagem foi projetado com o compromisso de oferecer a você uma estadia perfeita.
              </p>
          </div>
        </S.Home>

        <S.About>
          <div className='wrappText'>
            <h1>Sobre nós</h1>
            <hr />
            <p>
            Nossa jornada é guiada por uma equipe apaixonada e dedicada. Somos um grupo diversificado de indivíduos, unidos por um objetivo comum: proporcionar experiências excepcionais em hospedagem de chalés. 
            </p>
            <a href="">Saiba mais </a>
          </div>
          <img src={bgAbout} className='bg'/>
        </S.About>

        <S.NossoTime>
          <div className="wrappPattern">
            <img src={patternCircle} className='circle'/>
            <div className="wrappText">
              <span>NOSSO TIME</span>
              <h1>Conheça nosso time</h1>
              <p>
                Somos um time formado por grandes profissionais movidos por uma grande força de vontade e anseio por mudar o mercado de hospedagens.
              </p>
            </div>
              <img src={patternSquare} className='square'/>
          </div>
            
            <div className="wrappCards">
              <div className="card">
                <img src={timeFoto1}/>
                <h1>João Manuel</h1>
                <p>CEO</p>
                <img src={iconInstagram} className='icon'/>
                <img src={iconFacebook} className='icon'/>
                <img src={iconTwitter} className='icon'/>
              </div>

              <div className="card">
                <img src={timeFoto2}/>
                <h1>Jhonnatan</h1>
                <p>Relações públicas</p>
                <img src={iconInstagram} className='icon'/>
                <img src={iconFacebook} className='icon'/>
                <img src={iconTwitter} className='icon'/>
              </div>

              <div className="card">
                <img src={timeFoto3}/>
                <h1>Julio</h1>
                <p>Marketing</p>
                <img src={iconInstagram} className='icon'/>
                <img src={iconFacebook} className='icon'/>
                <img src={iconTwitter} className='icon'/>
              </div>

              <div className="card">
                <img src={timeFoto4}/>
                <h1>Gustavo</h1>
                <p>Representante Comercial</p>
                <img src={iconInstagram} className='icon'/>
                <img src={iconFacebook} className='icon'/>
                <img src={iconTwitter} className='icon'/>
              </div>
            </div>
        </S.NossoTime>

        <S.Localização>
          <div className="wrappPattern">
              <img src={patternLocal} className='icon2'/>
              <div className="wrappText">
                <h1>Estamos por toda parte</h1>
                <p>
                  Estamos presente em diversos locais do mundo, proporcionando a você uma boa hospedagem independentemente do local que esteja.
                </p>
              </div>
                <img src={patternLocal} className='icon'/>
          </div>

          <div className="infs">
            <div className='wrapInfs' style={{position: 'relative', left: 22}}>
              <span className='mais'>+</span>
              <span className='valor'>500</span><br />
              <span className='local'>CIDADES</span>
            </div>
            <div className='wrapInfs' style={{position: 'relative', left: 33}}>
              <span className='mais'>+</span>
              <span className='valor'>10</span><br />
              <span className='local' style={{marginLeft: 40}}>PAÍSES</span>
            </div>
            <div className='wrapInfs' style={{position: 'relative', left: 39}}>
              <span className='mais'>+</span>
              <span className='valor'>
                200
                <span style={{fontSize: 35}}>
                  mil
                </span>
              </span><br />
              <span className='local' style={{marginLeft: 80}}>CLIENTES</span>
            </div>
            <div className='wrapInfs' style={{position: 'relative', left: -2}}>
              <span className='mais'>+</span>
              <span className='valor'>
                4
                <span style={{fontSize: 35}}>
                  mil
                </span>
              </span><br />
              <span className='local' style={{marginLeft: 42}}>HOSPEDAGENS</span>
            </div>
          </div>

          <div className="data">
            <div className="dataLeft">

              <div className="wrappHl">
                <div className="wrappHlTop" style={{transform: 'rotate(180deg)'}}>
                  <hr />
                  <hr style={{borderColor: '#F61F4B'}}/>
                </div>

                <div className="wrappHlBottom" style={{transform: 'rotate(180deg)'}}>
                  <hr style={{width: '690px', borderColor: '#F61F4B'}}/>
                  <hr />
                </div>
              </div>
              

              <div className='wrappVt'>
                <div className="wrappVtLeft">
                  <hr style={{width: '370px', border: 'white'}}/>
                  <hr style={{width: '370px', border: 'white'}}/>
                </div>

                <div className="wrappVtMid" style={{transform: 'rotate(180deg)'}}>
                  <hr  style={{width: '355px'}}/>
                  <hr />
                </div>

                <div className="wrappVtRight" style={{transform: 'rotate(180deg)'}}>
                  <hr style={{borderColor: '#F61F4B'}}/>
                  <hr style={{width: '373px'}}/>
                </div>
              </div>
              

              
            </div>

            <div className="dataRight">
              <div className="wrappHl">
                <div className="wrappHlTop">
                  <hr style={{width: '670px', borderColor: '#F61F4B'}}/>
                  <hr />
                </div>

                <div className="wrappHlBottom">
                  <hr />
                  <hr style={{borderColor: '#F61F4B'}}/>
                </div>
              </div>
              

              <div className='wrappVt2'>
                <div className="wrappVtLeft" style={{transform: 'rotate(180deg)'}}>
                  <hr style={{width: '370px'}}/>
                  <hr style={{borderColor: '#F61F4B'}}/>
                </div>
        
                <div className="wrappVtMid">
                  <hr style={{width: '360px'}}/>
                  <hr />
                </div>

                <div className="wrappVtRight">
                  <hr style={{width: '370px' }}/>
                  <hr />
                </div>
              </div>
              </div>
          </div>
        </S.Localização>
        {/* <S.WrappFooter>
          <Footer />
        </S.WrappFooter> */}
    </>
  )
}

export default Sobre
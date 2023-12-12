import React from 'react'
import Header from '../../components/header/Header'
import * as S from './style'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import arrowIcon from '../../assets/images/arrowicon.svg'
import iconInstagram from '../../assets/images/iconinstagram.svg'
import iconFacebook from '../../assets/images/iconfacebook.svg'
import iconTwitter from '../../assets/images/icontwitter.svg'
import iconApple from '../../assets/images/iconapple.svg'
import iconLacta from '../../assets/images/iconlacta.svg'
import iconMicrosoft from '../../assets/images/iconmicrosoft.svg'
import iconSamsung from '../../assets/images/iconsamsung.svg'
import iconNestle from '../../assets/images/iconnestle.svg'
import iconGoogle from '../../assets/images/icongoogle.svg'
import c1 from '../../assets/images/img-c1.webp'
import c2 from '../../assets/images/img-c2.webp'
import c3 from '../../assets/images/img-c3.webp'
import c4 from '../../assets/images/img-c4.webp'
import c5 from '../../assets/images/img-c5.webp'
import c6 from '../../assets/images/img-c6.webp'
import c7 from '../../assets/images/img-c7.webp'
import patternFeed1 from '../../assets/images/patternfeed1.svg'
import Footer from '../../components/footer/Footer'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <S.Container>
      <S.SectionPrincipal>
        {/* <Header /> */}
        <div className='WrapperContent'>
          <p className='frase'>Sua melhor hospedagem No local ideal</p>
          <p className='text'>
            Descubra a excelência da hospedagem no cenário perfeito. Bem-vindo ao melhor que as chalés tem a oferecer, a Urbano, onde o conforto e a hospitalidade se unem para criar momentos memoráveis
          </p>
          <div className='button'>
            <Link to="/hospedagens" >
              Descubra
            </Link>
            <img src={arrowIcon} />
          </div>

        </div>
        
     
        <div className='icons'>
          <a href=""><img src={iconInstagram} /></a>
          <a href=""><img src={iconFacebook} /></a>
          <a href=""><img src={iconTwitter} /></a>
        </div>
        
      </S.SectionPrincipal>

      <S.SectionClientes>
        <div className='contentClientes'>
          <div className='WrappText'>
            <h1 className='tituloClientes'>Nossos clientes</h1>
            <p className='textClientes'>
              Cada estadia é uma oportunidade para criar memórias especiais e construir relacionamentos duradouros. Agradecemos a confiança que depositam em nós e estamos ansiosos para continuar superando suas expectativas a cada visita.
            </p>
          </div>

          <div className="wrappImage">
            <div className='wrappLogos'>
              <div className="grupos" style={{marginTop: '60px'}}>
                <div className="logo" style={{background: "#566AFF"}}>
                  <img src={iconApple} style={{width: '40%'}}/>
                </div>
                <div className="logo" style={{background: '#F61F4B'}}>
                  <img src={iconLacta} />
                </div>
              </div>

              <div className="grupos">
                <div className="logo" style={{background: '#F61F4B'}}>
                  <img src={iconMicrosoft} />
                </div>
                <div className="logo" style={{background: "#648B00"}}>
                  <img src={iconSamsung} />
                </div>
              </div>

              <div className="grupos" style={{marginTop: '30px'}}>
                <div className="logo" style={{background: "#566AFF"}}>
                  <img src={iconNestle} style={{width: '50%'}}/>
                </div>
                <div className="logo" style={{background: '#F61F4B'}}>
                  <img src={iconGoogle} />
                </div>
              </div>
              
            </div>
          </div>
        </div>
      </S.SectionClientes>

      <S.SectionAvaliacoes>
        <h1 className='title'>O que estão dizendo</h1>
        <div className='containerSwiper'>
          <Swiper
            className='swiper'
            modules={[Autoplay]}
            spaceBetween={20} //-55
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{delay: 3700}}
            // navigation
            loop={true}
            breakpoints={{
              750: {
                slidesPerView: 3,
                spaceBetween: 0,
              },}}
            // scrollbar={{ draggable: true }}
          >
            
            <SwiperSlide>
              <div className="containerSlide">
                <img src={c1} />
                <div className='wrappComent'>
                  <span className='nome'>Beatriz Alves</span>
                  <p className='avaliacao'>
                    Estadia incrível! Os chalés eram aconchegantes e bem equipados. A vista panorâmica era deslumbrante. Mal posso esperar para voltar!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containerSlide">
                <img src={c2} />
                <div className='wrappComent'>
                  <span className='nome'>Julia Marques</span>
                  <p className='avaliacao'>
                    Ótimo refúgio! A equipe foi amigável e atenciosa. Os chalés eram impecáveis e a localização é perfeita para relaxar.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containerSlide">
                <img src={c3} />
                <div className='wrappComent'>
                  <span className='nome'>Fernanda Muniz</span>
                  <p className='avaliacao'>
                    Incrível experiência! A tranquilidade do local e a atenção aos detalhes nos chalés tornaram nossa estadia memorável.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containerSlide">
                <img src={c4} />
                <div className='wrappComent'>
                  <span className='nome'>Bruno Ribeiro</span>
                  <p className='avaliacao'>
                    Uma escapada perfeita! A natureza ao redor é de tirar o fôlego. Os chalés eram aconchegantes e confortáveis.                  
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containerSlide">
                <img src={c5} />
                <div className='wrappComent'>
                  <span className='nome'>Mirella Rayssa</span>
                  <p className='avaliacao'>
                    Ficamos impressionados com a hospitalidade! A equipe fez tudo para tornar nossa estadia inesquecível. Voltaremos com certeza!
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containerSlide">
                <img src={c6} />
                <div className='wrappComent'>
                  <span className='nome'>Maria Clara</span>
                  <p className='avaliacao'>
                    Adoramos cada minuto! Os chalés eram espaçosos e bem equipados. As trilhas ao redor são ideais para quem gosta de caminhar.
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="containerSlide">
                <img src={c7} />
                <div className='wrappComent'>
                  <span className='nome'>Esther Munhoz</span>
                  <p className='avaliacao'>
                    Simplesmente maravilhoso! A paz e tranquilidade deste lugar são incomparáveis. Uma experiência que todos deveriam vivenciar.
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
          <div className='wrappPatterns'>
            <img src={patternFeed1} className='pattern1'/>
            <img src={patternFeed1} className='pattern2'/>

          </div>
        </div>
      </S.SectionAvaliacoes>
        
      <S.SectionBeneficios>
        <h1 className='title'>Benefícios da nossa hospedagem</h1>
        <p className='text'>
          Na nossa busca incessante para proporcionar a melhor experiência de hospedagem possível, oferecemos uma série de benefícios excepcionais que tornam a sua estadia verdadeiramente especial.
        </p>

        <div className="motivos">
          <span className='number'>01</span>
          <div className="wrappMotivos">
            <span className='titleMotivos'>Mais conforto</span>
            <p className='textMotivos'>
              Oferecemos uma gama completa de comodidades, desde um delicioso café da manhã servido no seu quarto até Wi-Fi de alta velocidade, para atender a todas as suas necessidades modernas, sem comprometer a experiência rústica.
            </p>
          </div>
        </div>

        <div className="motivos" style={{backgroundColor:'#FFEBEF'}}>
          <span className='number'>02</span>
          <div className="wrappMotivos">
            <span className='titleMotivos'>Atendimento Personalizado</span>
            <p className='textMotivos'>
              Na nossa equipe, a hospitalidade é mais do que uma profissão, é uma paixão. Estamos aqui para garantir que cada aspecto da sua estadia seja perfeito. Do momento em que você faz a reserva até o dia do check-out, nossa equipe dedicada estará à disposição para atender a todas as suas necessidades.
            </p>
          </div>
        </div>

        <div className="motivos">
          <span className='number'>03</span>
          <div className="wrappMotivos">
            <span className='titleMotivos'>Exclusividade e Privacidade</span>
            <p className='textMotivos'>
              Nossos chalés são projetados para proporcionar a privacidade que você deseja em suas escapadas. Desfrute de seu próprio espaço cercado pela beleza da natureza.
            </p>
          </div>
        </div>

        <div className="motivos" style={{backgroundColor:'#FFEBEF'}}>
          <span className='number'>04</span>
          <div className="wrappMotivos">
            <span className='titleMotivos'>Comodidades Premium</span>
            <p className='textMotivos'>
            Oferecemos uma ampla gama de comodidades de primeira classe, desde café da manhã artesanal até lareiras acolhedoras. Wi-Fi de alta velocidade, TVs de tela plana e áreas de convívio confortáveis garantem que você tenha tudo o que precisa.
            </p>
          </div>
        </div>
        
      </S.SectionBeneficios>

      {/* <Footer /> */}
    </S.Container>
  )
}

export default Home
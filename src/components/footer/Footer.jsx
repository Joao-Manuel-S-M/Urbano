import React from 'react'
import * as S from './style' 
import iconInstagram from '../../assets/images/iconinstagram.svg'
import iconFacebook from '../../assets/images/iconfacebook.svg'
import iconTwitter from '../../assets/images/icontwitter.svg'

const Footer = (props) => {
 

  return (
    <S.Footer display={props.display}>
      <div className='wrapper'>
        <span className='logo'>Urbano</span>
        <nav>
          <ul>
            <span className="title">
              Mapa
            </span>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
            <li>
              <a href="/hospedagens">Hospedagens</a>
            </li>
            <li>
              <a href="/contato">Contato</a>
            </li>
          </ul>

          <ul>
            <span className="title">
              Endereço
            </span>
              <li>
                1 - Rua Brasil n°20 - Bastos
              </li>
              <li>
                2 - Hollywood n°222 - Los Angeles
              </li>
          </ul>

          <ul>
            <span className="title">
              Contato
            </span>
            <li>
              +55 (14) 99685-8213
            </li>
            <li>
              +1 (213) 3625-1251
            </li>
          </ul>
        </nav>
      </div>
     
      

      <div className='newsletter'>
        <span className='frase-news'>Fique por dentro de tudo!</span>
        <span className='subfrase'>Assine nossa newsletter diária e mantenha-se informado.</span>
        
        <form>
          <input type="text" placeholder='seuemail222@gmail.com'/>
          <button>Enviar</button>
        </form>
        
        <div className='wrapp-icons'>
          <span className='subfrase'>Nos siga nas redes!</span>
          <div className='icons'>
            <img src={iconInstagram} alt="iconInstagram" />
            <img src={iconFacebook} alt="iconFacebook" />
            <img src={iconTwitter} alt="iconTwitter" />
          </div>
        </div>
      </div>
    </S.Footer>
  )
}

export default Footer
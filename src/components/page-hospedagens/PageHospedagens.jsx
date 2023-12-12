import React, { useEffect, useState } from 'react'
import hospedagens from '../../data/array.js'
import * as S from './style.js'
import iconback from '../../assets/images/iconback.svg'
import iconstar from '../../assets/images/iconstar.svg'
import iconwork from '../../assets/images/iconwork.svg'
import icondoor from '../../assets/images/icondoor.svg'
import icongps from '../../assets/images/icongps.svg'
import iconcar from '../../assets/images/iconcar.svg'
import iconcook from '../../assets/images/iconcook.svg'
import iconfreezer from '../../assets/images/iconfreezer.svg'
import iconmicrowaves from '../../assets/images/iconmicrowaves.svg'
import iconwifi from '../../assets/images/iconwifi.svg'
import Select from 'react-select'
import CardFinal from '../card-final/CardFinal.jsx'
import { Link } from 'react-router-dom'

function PageHospedagens(props) {
    const [hosp, setHosp] = useState('')
    const [valorNoite, setValorNoite] = useState('');

   
    

    useEffect(() => {
      setHosp(hospedagens.find(x => x.id === props.id))
    }, [props.id])
    
    // Select
    const options = [
      { value: 1, label: '1 Noite' },
      { value: 2, label: '2 Noites' },
      { value: 3, label: '3 Noites' },
      { value: 4, label: '4 Noites' },
      { value: 5, label: '5 Noites' },
      { value: 6, label: '6 Noites' },
      { value: 7, label: '7 Noites' },
    ]
    const [select, setSelect] = useState(options[0])
   
    
    useEffect(() => {
      setValorNoite(hosp.valor * select.value);
    }, [hosp, select]);

    const [visible, setVisible] = useState(false);
    const cardFinal = () => {
      setVisible(true); // Inverte o estado atual
    }

    const enviar = (e) => {
      setVisible(e)
      
    }

  return (
    <S.WrapperAll>
        {visible && <CardFinal title={hosp.title} local={hosp.nome} valor={valorNoite} dias={select.value} enviar={enviar}/>}
      <S.Container blur={visible}>
        <S.Header>
          <div className='btn-voltar' onClick={() => props.voltar(false)}><img src={iconback} alt="" /></div>
         
          <span className='logo'>Urbano</span>
        </S.Header>

        <h1 className='title'>{hosp.title}</h1>
        
        <S.Infs>
          <img src={iconstar} alt="icon" />
          <span>5,0</span>
          -
          <span> 223 Comentários</span>
          -
          <span>{hosp.nome}</span>
        </S.Infs>

        <S.GridImages>
        
          <a href={hosp.img1} target="_blank"><img src={hosp.img1} class="img1" alt="" /></a>
          <div class="wrapper-images">
              <a href={hosp.img2} target="_blank"><img src={hosp.img2} class="img2" alt="" /></a>
              <a href={hosp.img3} target="_blank"><img src={hosp.img3} class="img3" alt="" /></a>
          </div>
      
        </S.GridImages>

        <S.Wrapper>
          <div className='container'>
            <div className='infs'>
              <h1>{hosp.subtitle}</h1>
              <span>{hosp.inf}</span>
            </div>

            <S.Line />

            <S.Desc>
              <div className='item'>
                <img src={iconwork} alt="" />
                <div className="wrapper">
                  <h1>Espaço de trabalho exclusivo</h1>
                  <span>Um quarto com wi-fi adequado para trabalhar</span>
                </div>
              </div>

              <div className='item'>
                <img src={icondoor} alt="" />
                <div className="wrapper">
                  <h1>Self check-in</h1>
                  <span>Você pode fazer check-in com os funcionários do prédio.</span>
                </div>
              </div>

              <div className='item'>
                <img src={icongps} alt="" />
                <div className="wrapper">
                  <h1>Ótima localização</h1>
                  <span>95% dos hóspedes recentes deram 5 estrelas à localização.</span>
                </div>
              </div>

              <S.Line />

              <p className='descricao'>
                {hosp.descricao}
              </p>

              <S.Line />

              <h1 className='subtitle'>Este lugar oferece:</h1>
              <div className='caracteristicas'>
                
                <div className="wrapperleft">
                  <div className='item-oferece'>
                      <img src={iconwork} alt="" />
                      <div className="wrapper">
                        <h1>Espaço de trabalho exclusivo</h1>
                      </div>
                    </div>

                    <div className='item-oferece'>
                      <img src={iconcar} alt="" />
                      <div className="wrapper">
                        <h1>Estacionamento incluído</h1>
                      </div>
                    </div>
                    <div className='item-oferece'>
                        <img src={iconfreezer} alt="" />
                        <div className="wrapper">
                          <h1>Refrigerador</h1>
                        </div>
                    </div>
                </div>



                <div className="wrapperright">
                  <div className='item-oferece'>
                      <img src={iconwifi} alt="" />
                      <div className="wrapper">
                        <h1>Wifi</h1>
                      </div>
                  </div>

                  <div className='item-oferece'>
                    <img src={iconcook} alt="" />
                    <div className="wrapper">
                      <h1>Cozinha</h1>
                    </div>
                  </div>

                    <div className='item-oferece'>
                      <img src={iconmicrowaves} alt="" />
                      <div className="wrapper">
                        <h1>Microondas</h1>
                      </div>
                    </div>
                </div>

              </div>

              
              
            </S.Desc>

          </div>
          

          <S.Card>
            <div class="data">
              <span className='price-header'>R$ {hosp.valor},00</span>

              <Select  options={options} value={select} onChange={setSelect} />

              <button class="button" onClick={cardFinal}>Reservar</button>

              

              

              <div class="wrapper-price">
                <div class="price">
                  <span>R$ {hosp.valor},00 x {select.label}</span>
                  <span>R$ {valorNoite},00</span>
                </div>
                <div class="price">
                  <span>Serviço de limpeza:</span>
                  <span>R$ 200,00</span>
                </div>
              </div>

              <hr />

              <div class="valorTotal">
                <span>Valor total (Sem impostos)</span>
                <span>R$ {valorNoite + 200},00</span>
              </div>
              
            </div>   
          </S.Card>

        </S.Wrapper>

        
          
      
      </S.Container>
    </S.WrapperAll>
  )
}

export default PageHospedagens
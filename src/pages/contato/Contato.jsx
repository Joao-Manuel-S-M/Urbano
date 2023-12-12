import React from 'react'
import * as S from './style'
import Header from '../../components/header/Header'
import iconEmail from '../../assets/images/iconemail.svg'
import iconInstagram from '../../assets/images/iconinstagram.svg'
import iconFacebook from '../../assets/images/iconfacebook.svg'
import iconTwitter from '../../assets/images/icontwitter.svg'
import iconCircle from '../../assets/images/iconcircle.svg'
import Faq from "react-faq-component";
import Footer from '../../components/footer/Footer'



const Contato = () => {
    const data = {
        rows: [
            {
                title: "Como posso fazer uma reserva nos chalés da Urbano?",
                content: `Reservar conosco é simples! Basta visitar nossa página de reservas online, inserir as datas desejadas e seguir as etapas simples. Se preferir assistência pessoal, nossa equipe de atendimento está pronta para ajudar por telefone ou e-mail.`,
            },
            {
                title: "Quais comodidades estão incluídas nos chalés?",
                content:
                    "Nossos chalés oferecem uma variedade de comodidades, incluindo Wi-Fi de alta velocidade, café da manhã, estacionamento gratuito e uma lista completa de detalhes confortáveis para tornar sua estadia agradável. Consulte a descrição do chalé específico para obter detalhes.",
            },
            {
                title: "Qual é a política de cancelamento?",
                content: `Nossa política de cancelamento varia de acordo com a temporada e o tipo de reserva. Recomendamos revisar os detalhes específicos durante o processo de reserva ou entrar em contato conosco para obter informações atualizadas. `,
            },
            {
                title: "Os chalés são adequados para crianças?",
                content: 'Sim, nossos chalés são projetados para acomodar confortavelmente famílias. Podemos fornecer berços e outras comodidades mediante solicitação. Certifique-se de mencionar a necessidade durante o processo de reserva.',
            },
            {
                title: "Os chalés têm serviço de limpeza diário?",
                content: 'Respeitamos a privacidade dos nossos hóspedes. O serviço de limpeza é realizado antes do check-in e após o check-out. No entanto, podemos providenciar serviços de limpeza adicionais mediante solicitação durante a sua estadia.',
            },
            
        ],
    };

   



  return (
    <>
        <S.SectionHome>
            <div className="bg">
                
            {/* <Header /> */}
            </div>
            <div className="contato">
                <div className="wrappContato">
                    <div className="wrappText">
                        <h1 className='title'>Fale Conosco!</h1>
                        <p className='text'>Nossa equipe terá  prazer em te responder. </p>
                    </div>
                    

                    <div className="wrappIcons">
                        <a href=""><img src={iconInstagram} alt="" /></a>
                        <a href=""><img src={iconFacebook} alt="" /></a>
                        <a href=""><img src={iconTwitter} alt="" /></a>
                    </div>

                    <div className="wrappText">
                        <h1 className='titleVisit'>Quer fazer uma visita?</h1>
                        <p className='textVisit'>Venha em um de nossos escritórios e esclareça suas duvidas pessoalmente!</p>
                    </div>

                    <div className="wrappLocais">
                        <hr />
                        <div className='wrapp'>
                            <div className="locais">
                                <img src={iconCircle} />
                                <div className="wrapptext">
                                    <span className="endereco">1 - Rua Brasil n°20 - Osvaldo Cruz</span>
                                    <span className="phone">+55 (18) 99685-8213</span>
                                </div>
                            </div>
                            <div className="locais">
                                <img src={iconCircle} />
                                <div className="wrapptext">
                                    <span className="endereco">2 - Hollywood n°222 - Los Angeles</span>
                                    <span className="phone">+1 (213) 3625-1251</span>
                                </div>
                            </div>
                            <div className="locais">
                                <img src={iconCircle} />
                                <div className="wrapptext">
                                    <span className="endereco">3 - Avenida Lyons n°222 - Florianópolis</span>
                                    <span className="phone">+55 (48) 99425-2536</span>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>

                <div className="wrappForm">
                    <div className="texEmail">
                        <img src={iconEmail}/>
                        <p className='text'>
                            Preencha o formulário abaixo que te responderemos em até 24 horas.
                        </p>
                    </div>
                    <form action="">
                        <span className='titleForm'>Informações</span>
                        <div className="wrappInput">
                            <input type="text" name="" id="" placeholder='Nome'/>
                            <input type="text" name="" id="" placeholder='Sobrenome'/>
                            <input type="text" name="" id="" placeholder='E-mail'/>
                            <input type="text" name="" id="" placeholder='Telefone'/>
                        </div>

                        
                        <span className='titleForm'>Sua mensagem</span>
                        <textarea name="" id="" cols="30" rows="10" resize='none' placeholder='Descreva o motivo de seu contato'/>

                        <input type="submit" value="Enviar" className='button'/>
                    </form>
                </div>
            </div>
        </S.SectionHome>

        <S.SectionFAQ>
            <h1 className="title">Perguntas frequentes</h1>
            <Faq
                data={data}
            />
        </S.SectionFAQ>
        {/* <Footer /> */}
    </>
  )
}

export default Contato
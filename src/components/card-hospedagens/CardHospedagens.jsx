import React from 'react';
import * as C from './style';
// import card1 from '../../assets/images/card1.png';
import hospedagens from '../../data/array.js';

const CardHospedagens = ({ searchData, onCardClick }) => {
  const handleClick = (id) => {
    onCardClick(id);
  };
console.log(hospedagens)
  return (
    <C.Container>
      {hospedagens
        .filter((hosp) => {
          return searchData.toLowerCase() === '' ? hosp : hosp.nome.toLowerCase().includes(searchData.toLowerCase());
        })
        .map((hosp) => {
          return (
            <C.Card key={hosp.id} onClick={() => handleClick(hosp.id)}>
              <div className='content-img'>
                <img src={hosp.imgcard} alt="" />
              </div>
              <C.Decricao>
                <h1>{hosp.nome}</h1>
                <span className="inf">{hosp.npessoas}</span>
                <br />
                <span className="inf">{hosp.nquartos}</span>
                <br />
                <span className="preco">R$ {hosp.valor},00</span>
              </C.Decricao>
            </C.Card>
          );
        })}
    </C.Container>
  );
};

export default CardHospedagens;

import React, { useState } from 'react';

import Search from '../../components/InputSearch/Search';
import PageHospedagens from '../../components/page-hospedagens/PageHospedagens';
import CardHospedagens from '../../components/card-hospedagens/Cardhospedagens';
import * as S from './Style.js'
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const Hospedagens = () => {
  const [search, setSearch] = useState('');
  const [showPageHospedagens, setShowPageHospedagens] = useState(false);
  const [id, setId] = useState('')


  const handleSearch = (searchValue) => {
    setSearch(searchValue);
  };

  const handleCardClick = (id) => {
    setShowPageHospedagens(true);
    setId(id)
  };

  return (

    <S.Container>
      <S.Wrapper>
        {/* <Header /> */}
        <h1 className='frase'>Onde será seu destino?</h1>
        <p className='texto'>
          Em cada escolha, um novo horizonte. Em cada destino, uma história única.
          Seu destino é explorar, nossa missão é torná-lo memorável a cada passo.
          {!showPageHospedagens && <Search searchData={handleSearch} />}
        </p>
      </S.Wrapper>
      {!showPageHospedagens && <CardHospedagens searchData={search} onCardClick={handleCardClick}/>}
      {showPageHospedagens && <PageHospedagens id={id} voltar={(data) => setShowPageHospedagens(data)}/>}
      {/* <Footer /> */}
    </S.Container>
  );
};

export default Hospedagens;
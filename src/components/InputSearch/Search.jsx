import React, { useState } from 'react'
import * as S from './Style'
import icon from '../../assets/images/searchicon.svg'
const Search = (props) => {
    
  return (
    <S.Container>
        <input type="text"  onChange={(e) => props.searchData(e.target.value)} placeholder='Digite um destino'/>
        <img src={icon} alt="" />
    </S.Container>
  )
}

export default Search
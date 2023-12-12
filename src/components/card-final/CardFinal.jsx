import React, { useEffect, useRef } from "react";
import * as S from "./style";
import { useState } from "react";
import { DayPicker } from "react-day-picker";
import { ptBR } from "date-fns/locale";
import { format } from "date-fns";
import iconFinish from "../../assets/images/iconfinish.svg"
import { useForm } from 'react-hook-form';


const CardFinal = (props) => {
  const [price, setPrice] = useState({
    service1: "",
    service2: "",
    service3: "",
  });

  const [arr, setArr] = useState([
    {
      name: "",
      email: "",
      telefone: "",
      cpf: "",
      local: "",
      extra: "",
    },
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    setArr((prevArr) => ({
      ...prevArr,
      [name]: value,
    }));
  };

  //Validation form
  const {
    register,
    handleSubmit,
    formState: { errors },
    trigger, // Certifique-se de ter essa linha
  } = useForm();
  const onSubmit = (data) => console.log(data);



  //Calendar
  const formatarData = (data) => {
    return format(data, "dd MMMM", { locale: ptBR });
  };

  const [days, setDays] = React.useState([]);
  const initialDays = [];

  const [posi, setPosi] = useState(1);
  const next = async () => {
    const isValid = await trigger();
    if (isValid) {
      setPosi((nextPosi) => (nextPosi < 5 ? nextPosi + 1 : nextPosi));
    }
    if (posi === 2) {
      if(days.length < props.dias) {
        setPosi(2);
      }
    }
  };


  const stagePosition = async (val) => {
    const isValid = await trigger();
    if (isValid) {
      setPosi(val);
    }
    if (posi === 2) {
      if(days.length < props.dias) {
        setPosi(2);
      }
    }
  }

  const prev = () => {
    setPosi((prevPosi) => (prevPosi > 1 ? prevPosi - 1 : prevPosi));
  };

  return (
    <S.Card>
      <div className={posi === 5 ? "ocult" : "wrappPagenation"}>
        <div className="stage" onClick={() => setPosi(1)}>
          <span className={posi === 1 ? "active number" : "number"}>1</span>
          <div className="wrappText">
            <span>PASSO 1</span>
            <h1>SUAS INFORMAÇÕES</h1>
          </div>
        </div>

        <div className="stage" onClick={() => stagePosition(2)}>
          <span className={posi === 2 ? "active number" : "number"}>2</span>
          <div className="wrappText">
            <span>PASSO 2</span>
            <h1>SELEÇÃO DE DATA</h1>
          </div>
        </div>

        <div className="stage" onClick={() => stagePosition(3)}>
          <span className={posi === 3 ? "active number" : "number"}>3</span>
          <div className="wrappText">
            <span>PASSO 3</span>
            <h1>SERVIÇOS EXTRAS</h1>
          </div>
        </div>

        <div className="stage" onClick={() => stagePosition(4)}>
          <span className={posi === 4 ? "active number" : "number"}>4</span>
          <div className="wrappText">
            <span>PASSO 4</span>
            <h1>REVISÃO</h1>
          </div>
        </div>
      </div>
      <div className="wrappContent">
        <div className={posi === 1 ? "wrappPages" : "ocult"}>
          <S.Button onClick={() => props.enviar(false)}>X</S.Button>

          <div className="wrappTitle">
            <h1>Informações pessoais</h1>
            <p>
              Por favor nos informe, seu nome completo, e-mail, telefone e CPF.
            </p>
          </div>

          <div className="wrappForms">
            <div className="wrappInput">
              <span>Nome Completo</span>
              <input
                className={errors.name ? 'inputError' : ''}
                type="text"
                placeholder="Ex: João Manuel de Souza Marques"
                {...register('name', { required: true, minLength: 5})}
                onChange={(e) => handleChange(e)}
                name="name"
              />
            </div>

            <div className="wrappInput">
              <span>E-mail</span>
              <input
                className={errors.email ? 'inputError' : ''}
                type="text"
                placeholder="Ex: jmsmarques8213@gmail.com"
                {...register('email', { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i })}
                onChange={(e) => handleChange(e)}
                name="email"
              />
            </div>

            <div className="wrappInput">
              <span>Telefone</span>
              <input
                className={errors.telefone ? 'inputError' : ''}
                type="text"
                placeholder="Ex: (18) 99668 - 8213"
                {...register('telefone', { required: true, pattern: /^\+?[1-9]\d{1,4}[-. ]?\d{4}[-. ]?\d{4}$/ })}
                onChange={(e) => handleChange(e)}
                name="telefone"
              />
            </div>

            <div className="wrappInput">
              <span>CPF</span>
              <input
                className={errors.cpf ? 'inputError' : ''}
                type="text"
                placeholder="Ex: 475.145.458-47"
                {...register('cpf', { required: true, pattern: /^\d{3}\.?\d{3}\.?\d{3}-?\d{2}$/ })}
                onChange={(e) => handleChange(e)}
                name="cpf"
              />
            </div>
          </div>
        </div>
        <div className={posi === 2 ? "wrappPages" : "ocult"}>
          <S.Button onClick={() => props.enviar(false)}>X</S.Button>
          <div className="wrappTitle">
            <h1>Data de hospedagem</h1>
            <p>
              Informe a data e os dias de sua hospedagem para que possamos
              checar a disponibilidade.
            </p>
          </div>
          <DayPicker
            mode="multiple"
            min={1}
            max={props.dias}
            selected={days}
            onSelect={setDays}
            className="calendar"
            locale={ptBR}
            footer={
              <span className="footerCalendar">{props.dias - days.length} dias restantes</span>
            }
          />
        </div>
        <div className={posi === 3 ? "wrappPages" : "ocult"}>
          <S.Button onClick={() => props.enviar(false)}>X</S.Button>
          <div className="wrappTitle">
            <h1>Serviços extras</h1>
            <p>
              Selecione alguns de nossos serviços extras, se não quiser, apenas
              pule esta etapa.
            </p>
          </div>
          <div className="wrappOptions">
            <div
              className={price.service1 ? "select option" : "option"}
              onClick={() => {
                setPrice((prevPrice) => ({
                  ...prevPrice,
                  service1:
                    prevPrice.service1 === "Vigilância" ? "" : "Vigilância",
                }));
              }}
            >
              <span className="Title">Vigilância 24 horas</span>
              <span className="price">R$ 800,00</span>
            </div>
            <div
              className={price.service2 ? "select option" : "option"}
              onClick={() => {
                setPrice((prevPrice) => ({
                  ...prevPrice,
                  service2:
                    prevPrice.service2 === "Serviço de quarto"
                      ? ""
                      : "Serviço de quarto",
                }));
              }}
            >
              <span className="Title">Serviço de quarto</span>
              <span className="price">R$ 400,00</span>
            </div>
            <div
              className={price.service3 ? "select option" : "option"}
              onClick={() => {
                setPrice((prevPrice) => ({
                  ...prevPrice,
                  service3:
                    prevPrice.service3 === "Alimentação" ? "" : "Alimentação",
                }));
              }}
            >
              <span className="Title">Alimentação p/ 5 pessoas</span>
              <span className="price">R$ 500,00</span>
            </div>
          </div>
        </div>
        <div className={posi === 4 ? "wrappPages" : "ocult"}>
          <S.Button onClick={() => props.enviar(false)}>X</S.Button>
          <div className="wrappTitle">
            <h1>Revisão</h1>
            <p>
              Revise suas informação, data e serviços. Qualquer coisa é só
              voltar para os passos anteriores.
            </p>
          </div>

          <div className="wrappInfs">
            <div className="infs">
              <span className="campo">Nome: </span>
              <span className="result">{arr.name}</span>
            </div>

            <div className="infs">
              <span className="campo">E-mail: </span>
              <span className="result">{arr.email}</span>
            </div>

            <div className="infs">
              <span className="campo">Telefone: </span>
              <span className="result">{arr.telefone}</span>
            </div>

            <div className="infs">
              <span className="campo">CPF: </span>
              <span className="result">{arr.cpf}</span>
            </div>
          </div>
          <hr className="separator" />
          <div className="wrappInfs">
            <div className="infs">
              <span className="campo">Hospedagem: </span>
              <span className="result">{props.title}</span>
            </div>

            <div className="infs">
              <span className="campo">Local: </span>
              <span className="result">{props.local}</span>
            </div>

            <div className="infs">
              <span className="campo">Data: </span>
              <span className="result">
                {days.length > 0 &&
                  days.map((selectedDate, index) => {
                    const isLastDay = index === days.length - 1;

                    return (
                      <span key={index}>
                        {format(selectedDate, "dd")}
                        {isLastDay && days.length
                          ? ` / ${format(selectedDate, "MMMM", {
                              locale: ptBR,
                            })}`
                          : ""}
                        {index < days.length - 1 ? ", " : ""}
                      </span>
                    );
                  })}
              </span>
            </div>

            <div className="infs">
              <span className="campo">Serviços extras: </span>
              <span className="result">
                {
                price.service1 || price.service2 || price.service3
                ? Object.entries(price)
                  .filter(([key, value]) => value)
                  .map(([key, value], index, array) => (
                    <span key={key}>
                      {value}
                      {index < array.length - 1 && " | "}
                    </span>
                  ))
                : <hr className="line"/>
                }
              </span>
            </div>
          </div>
          <hr className="separator" />
          <div className="wrappPrice">
            <span className="label">Total: </span>
            <span className="price">
              <span>R$ </span>
              {props.valor +
                200 +
                (price.service1 ? 800 : 0) +
                (price.service2 ? 400 : 0) +
                (price.service3 ? 500 : 0)}
              ,00
            </span>
          </div>
        </div>
        <div className={posi === 5 ? "wrappPages" : "ocult"}>
          <S.Button onClick={() => props.enviar(false)} className="resize">X</S.Button>
          <div className="container">
            <img src={iconFinish} className="icon"/>
            <h1>Obrigado!</h1>
            <p>Obrigado por utilizar nossos serviços, te enviaremos uma mensagem e um e-mail com a confirmação da hospedagem e link para pagamento.</p>
          </div>
        </div>
          <div className="wrappButtons">
            <button className="prev" onClick={prev}>
              Anterior
            </button>
            <button className={posi === 5 ? "ocult" : "next"}   onClick={next}>
              {posi < 4 ? "Próximo Passo" : "Finalizar"}
            </button>
          </div>
        </div>

        
    </S.Card>
  );
};

export default CardFinal;

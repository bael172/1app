import React from 'react'
import PropTypes from "prop-types"
import './App.css'
import { useState, useEffect } from 'react'

/*
class App extends React.Component{
  constructor(){
    super()
    this.state = {
      txt:"trener"
    }
  }
  update(){
    this.setState({txt:e.target.value})
  }
  render()
{
  //return React.createElement('h1',null,'Hello nephews') React.createElement('b',null,'Bold')
  const knopka = document.querySelector('button1')
  return (
    <article>
      <div>
        <input type="text" onChange={this.update.bind(this)}/>
        <h2>{this.state.txt}</h2>
      </div>
      <div>
        <button onclick="alert('Терпение')">Click me</button>
        <script>
            const my FirstEvent = document.querySelector('button')
            myFirstEvent.onclick = function() {
              alert("Да будет так!")
            }
            myFirstEvent.addEventListener('click', function(){
              alert('Дорогу осилит идущий')
            })
        </script>
      </div>
    </article>
    
  )
}}

/*
App.propTypes = {
  txt: PropTypes.string,
  cat: PropTypes.number.isRequired
}
App.defaultProps = {
  txt: "this is the default txt"
}
*/

      /*
      document.getElementById('button1')
      knopka.addEventListener('click', () => <noscript> You clicked </noscript>)
      */

//const App = () =><h1>Hello nephews!</h1>
function Pole_vvoda(){
  return(
    <>
    <label for="imya">ВВЕДИ СВОЕ ИМЯ СУКА ПИДОРАС НЕБРИТЫЙ
    <input type="text" id="imya" name="imya"  required minlength="3" size="10"/>
    </label>
    <label for="email">Теперь почта сука
    <input type="email" id="email" name="email" />
    </label>
    <label for="phone">Теперь телефончик свой сука у тебя Iphone или Android а, гандон?
    <input type="tel" id="phone" name="phone" />
    </label>
    <label for="phone">ПРИДУМАЙ ПАРОООООЛЬ БЛЯЯЯЯТЬ! ЧЕ СТОИШЬ КОГО ЖДЁЁШЬ СУКААААААА!!!
    <input type="password" id="passwd" name="passwd" />
    </label>
    <input type="submit"/>
    </>
  )
}
export default function Title(){
  return(
    <>
    <title>Курсы изучения английского языка</title>
    <h1>Это мегауебский сайт от !1-ИС-иди нахуй мне лень. Курсы для недоразвитых,ущербных,невоспитанных,СВЧ уебков-отморозков или инвалидов с раком мозга (IV) только у нас в ENGLISH FOR DOLBAYOBS</h1>
    <Pole_vvoda/>
    </>
  )
}

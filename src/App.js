import React from 'react';
import logo from './logo.svg';
import './App.css';

function Detail(props) {
    return (
        <div >
            <p>Name : {props.name}</p>
            <p>ID : {props.id}</p>
            <p>origin : {props.origin} </p>
        </div>
    )
}


const app = () => {
    let peoples = [["Vortex", "57", "Mexican"], ["Ash", "58", "African"],]

    return (
        <div className={"app"}>
            {
                peoples.map(people => {
                    return (
                        <Detail key={people[1]} name={people[0]} id={people[1]} origin={people[2]}>

                        </Detail>
                    )
                })
            }
        </div>
    )

    /*
        for (let people of peoples) {

        }
    */


}

export default App


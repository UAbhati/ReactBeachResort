import React, { Component } from 'react';
import {FaCocktail,FaHiking,FaShuttleVan,FaHelicopter} from 'react-icons/fa';
import Title from './Title';

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail/>,
                title:"Free cocktails",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique.'
            },
            {
                icon: <FaHiking/>,
                title:"Endless Hiking",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique.'
            },
            {
                icon: <FaShuttleVan/>,
                title:"Free shuttle",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique.'
            },
            {
                icon: <FaHelicopter/>,
                title:"Flying services",
                info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique.'
            }
        ]
    }
    render() {
        return (
            <section className="services">
                <Title title="services" />
                <div className="services-center">
                    {this.state.services.map( (item,index) => {
                        return ( 
                        <article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                            </article>
                        );
                    })}
                </div>   
            </section>
        );
    }
}

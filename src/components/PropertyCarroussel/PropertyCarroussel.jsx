import "./propertyCarroussel.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

export function PropertyCarroussel({status}) {
    console.log(status)
    const availability = "Disponível";

    const idCompany = process.env.REACT_APP_CODEUSER
    console.log(idCompany);

    const {data} = useFetch(
        `property/company/${idCompany}`
    );

    if(data) {
        console.log(data)
    }

    if(!data) {
        return (
            <h5>Carregando..</h5>
        )
    }
    const buttonStyle = {
        display:'none'
    };
    
    const properties = {
        prevArrow: <button style={{ ...buttonStyle }}></button>,
        nextArrow: <button style={{ ...buttonStyle }}></button>
    }

    const responsiveSettings = [
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4
            }
        },
        {
            breakpoint: 780,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 560,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 250,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

    return (
        <div>
            <Slide slidesToScroll={3} slidesToShow={3} indicators={true} {...properties} responsive={responsiveSettings}>
                {data?.map((property) => {
                    return (
                        property?.availability !== availability && property?.availability !== status ? "" :
                        <PropertyUnicBlock id={property.id} key={property.id}/>
                    )
                })}
            </Slide>
        </div>
    )
}
import "./propertyHome.css";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { PropertyUnicBlock } from "../PropertyUnicBlock/PropertyUnicBlock";
import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

export function PropertyHome({status}) {
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

    const filterData = data?.slice(0, 8);
    return (
        <div className="PropertyHome">
                {filterData?.map((property) => {
                    return (
                        property?.availability !== availability && property?.availability !== status ? "" :
                        <PropertyUnicBlock id={property.id} key={property.id}/>
                    )
                })}
          
        </div>
    )
}
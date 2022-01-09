import { useState } from "react";
import { Breed } from "./breedList";
import "../styles/breedListEntryDetails.css";

export interface BreedListEntryDetailsProps {
    breed: Breed
}

interface BreedDetails {
    name: String,
    group: String,
    otherNames: String[] | null,
    height: number[],
    weight: number[],
    lifeExp: number[]
}

const defaultBreedDetails: BreedDetails = {
    name: "",
    group: "",
    otherNames: null,
    height: [0,0],
    weight: [0,0],
    lifeExp: [0,0]
}



export default function BreedListEntryDetails(props: BreedListEntryDetailsProps) {
    const { breed } = props;
    const [breedDetails, setBreedDetails] = useState(defaultBreedDetails);

    fetch(`/api/dogs/${breed.name}`)
        .then(response => response.json())
        .then(data => {
            const newDetails = {... breedDetails};
            newDetails.name = data.name;
            newDetails.group = data.group;
            newDetails.otherNames = data.other_names ? data.other_names : ["No other names found."];
            newDetails.height = data.height_inches;
            newDetails.weight = data.weight_pounds;
            newDetails.lifeExp = data.life_expectancy;
            setBreedDetails(newDetails);
        });

    return (
        <>
            <p><span className="detailsHeading">Group:</span> {breedDetails.group}</p>
            <p><span className="detailsHeading">Other Names:</span> {breedDetails.otherNames}</p>
            <p><span className="detailsHeading">Height:</span> {breedDetails.height[0]} - {breedDetails.height[1]} inches</p>
            <p><span className="detailsHeading">Weight</span> {breedDetails.weight[0]} - {breedDetails.weight[1]} pounds</p>
            <p><span className="detailsHeading">Lifespan:</span> {breedDetails.lifeExp[0]} - {breedDetails.lifeExp[1]} years</p>
        </>
    );
}
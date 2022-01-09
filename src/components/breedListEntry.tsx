import { useState } from "react";
import { Breed } from "./breedList";
import BreedListEntryDetails from "./breedListEntryDetails";
import "../styles/breedListEntry.css";

export interface BreedListEntryProps {
    breed: Breed
}

export default function BreedListEntry(props: BreedListEntryProps) {
    const { breed } = props;
    const [expanded, setExpanded] = useState(false);

    function toggleExpansion() {
        setExpanded(!expanded);
    }

    return (
        <>
            <div className="breedListEntry" onClick={toggleExpansion}>
                <p className="breedName">{breed.name}</p>
                {expanded && (
                    <>
                        <BreedListEntryDetails breed={breed} />
                    </>
                )}
            </div>
        </>
    );
}
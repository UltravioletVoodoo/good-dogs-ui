import BreedListEntry from "./breedListEntry";

export interface Breed {
    name: String,
    group: String
}

export interface BreedListProps {
    breeds: Breed[]
}

export default function BreedList(props: BreedListProps) {
    const { breeds } = props;
    
    let resultComponents = [];
    for (let x = 0; x < breeds.length; x++) {
        resultComponents.push(<BreedListEntry key={x} breed={breeds[x]} />);
    }

    return (
        <>
            {resultComponents}
        </>
    );
}
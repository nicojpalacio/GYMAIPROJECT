//Funcion par pasar a formato DMY

import {parseISO, format} from 'date-fns';

export default function Date({dateString}){
    const date = parseISO(dateString);

    return (
        <time>{format(date, `dd/MM/yyyy`)}</time>
    )
}
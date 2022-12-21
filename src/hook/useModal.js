import { useState } from "react"


export const useModal = ( initialValue = false ) => {

    const [ value, setValue ] = useState( initialValue );

    const openModal = (  ) => {
        setValue( true );
        console.log('openModal: ',value);
    }

    const closeModal = (  ) => {
        setValue( false );
        console.log('close: ',value);
    }

    return {
        value,
        openModal,
        closeModal,
    }

}
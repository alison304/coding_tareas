import React, {useState} from 'react';

const listWork =  [
    'Reparar la puerta', 
    'Hacer tareas de React',
    'Estudiar Apis'
];

export default function Form() {
    const [selectItem, setSelectItem] = useState(listWork[0]);
    const [isDoing, setIsDoing] = useState(false);

    function handleSubmit(event) {
        event.preventDefault();
        console.log('The ' + selectItem + 'is' + (isDoing ? '' : ' not') + ' do!');
    }
    return (
        <form onSubmit={handleSubmit}>
            <select value={selectItem} onChange={e => setSelectItem(e.target.value)}>
                {listWork.map((work, i) =>
                    <option key={i} value={work}>{work}</option>
                )}
            </select>
            <label>
                <input type="checkbox" checked={isDoing} onChange={e => setIsDoing(e.target.checked)} />
                Is doing?
            </label>
            <button>Agree</button>
        </form>
    );
}

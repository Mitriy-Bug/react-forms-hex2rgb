import React, { useState } from 'react';

export function InputHex() {
    const [colorDefault, setColor] = useState('Значение rgb');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {        
        if (event.target.value.length < 7) {
            return;
          }
        let resultHex: string = event.target.value;
        //преобразуем строку из инпут в массив согласно регулярному выражению
        resultHex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(resultHex);
        if (resultHex === null) {
            setColor('Ошибка!');
            return;
          }
        //преобразуем шестнадцатиричные значения в десятичные
        let resultRgb = `rgb(${parseInt(resultHex[1], 16)}, ${parseInt(resultHex[2], 16)}, ${parseInt(resultHex[3], 16)})`;
        setColor(resultRgb);//передаем в новое состояние
    }
    return (
        <div className='bgWindow' style={{ backgroundColor: colorDefault }}>
            <input maxLength="7" placeholder="#000000" onChange={handleChange}></input>
            <div className='resultRGB'>{colorDefault}</div>
        </div>
    )
}
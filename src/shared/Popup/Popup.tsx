import React from "react";
import Select from "react-select";


import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Item } from "../../pages/Home/components/ThisDayInfo/ThisDayInfo";
import { ThisDayItem } from "../../pages/Home/components/ThisDayInfo/ThisDayItem";

import s from "./Popup.module.scss";

interface Props {

}

export const Popup = ({}: Props) => {
    const items = [
        {
            item_id: 'temp',
            name: 'Температура',
            value: '20° - відчувається як 17°'
        },
        {
            item_id: 'pressure',
            name: 'Тиск',
            value: '765 мм ртутного стовпчика - нормальне'
        },
        {
            item_id: 'precipitation',
            name: 'Опади',
            value: 'Без опадів'
        },
        {
            item_id: 'wind',
            name: 'Вітер',
            value: '3 м/с південно-західний - легкий вітер'
        }
    ]

    return (
        <>
        <div className={s.blur}></div>
        <div className={s.popup}>
            <div className={s.day}>
                <div className={s.day_temp}>20°</div>
                <div className={s.day_name}>Середа</div>
                <div className={s.img}>
                    <GlobalSvgSelector id="sun"/>
                </div>
                <div className={s.day_time}>
                    Година: <span>20:00</span>    
                </div> 
                <div className={s.day_city}>
                    Місто: <span>Львів</span>    
                </div> 
            </div>
            <div className={s.this__day_info_items}>
                {items.map((item: Item) => (
                    <ThisDayItem key={item.item_id} item={item} />
                ))}
            </div>
            <div className={s.close}>
                <GlobalSvgSelector id="close"/>
            </div>
        </div>
        </>
    )
}
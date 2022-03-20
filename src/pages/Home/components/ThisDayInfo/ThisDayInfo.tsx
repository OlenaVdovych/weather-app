import React from "react";

import s from './ThisDayInfo.module.scss';

import cloud from '../../../../assets/images/cloud.png';
import { ThisDayItem } from "./ThisDayItem";

interface Props { }

export interface Item {
    item_id: string,
    name: string,
    value: string
};

export const ThisDayInfo = (props: Props) => {
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
        <div className={s.this__day_info}>
            <div className={s.this__day_info_items}>
                {items.map((item: Item) => (
                    <ThisDayItem key={item.item_id} item={item} />
                ))}
            </div>
            <img className={s.cloud__img} src={cloud} alt="cloud" />
        </div>
    )
}
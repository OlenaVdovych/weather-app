import React from "react";
import { Card } from "./Card";

import s from './Days.module.scss';
import { Tabs } from "./Tabs";

interface Props {

}

export interface Day {
    day: string,
    day_info: string,
    icon_id: string,
    temp_day: string,
    temp_night: string,
    info: string
}

export const Days = (props: Props) => {
    const days: Day [] = [
        {
            day: 'Сьогодні',
            day_info: '28 кві',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
        {
            day: 'Завтра',
            day_info: '29 кві',
            icon_id: 'small_rain_sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Невеликий дощ і сонце',
        },
        {
            day: 'Сер',
            day_info: '30 кві',
            icon_id: 'small_rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Невеликий дощ',
        },
        {
            day: 'Чет',
            day_info: '01 тра',
            icon_id: 'mainly_cloudy',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
        {
            day: 'Пят',
            day_info: '02 тра',
            icon_id: 'rain',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
        {
            day: 'Суб',
            day_info: '03 тра',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
        {
            day: 'Нед',
            day_info: '04 тра',
            icon_id: 'sun',
            temp_day: '+18',
            temp_night: '+15',
            info: 'Хмарно',
        },
    ];

    return (
        <>
        <Tabs/>
        <div className={s.days}>
            {
                days.map((day: Day) => (
                    <Card day={day}/>
                )
            )}    
        </div>
        </>
    )
}
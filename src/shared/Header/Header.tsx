import React from "react";
import Select from "react-select";


import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";

import s from "./Header.module.scss";

interface Props {

}

export const Header = (props: Props) => {
    const options = [
        { value: 'Lviv', label: 'Львів' },
        { value: 'Kiev', label: 'Київ' },
        { value: 'Dnipro', label: 'Дніпро' }
    ];

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: '#7747FF33',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        })
    }

    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo"/>
                </div>
                <div className={s.title}>Weather App</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSvgSelector id="change-theme"/>
                </div>
                <Select 
                    styles={colorStyles} 
                    options={options}
                    defaultValue={options[0]}/>
            </div>
        </div>
    )
}
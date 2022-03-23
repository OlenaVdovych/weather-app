import React, { useEffect, useState } from "react";
import Select from "react-select";


import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";
import { Theme } from "../../context/ThemeContext";
import { useTheme } from "../../hooks/useTheme";

import s from "./Header.module.scss";

interface Props {

}

export const Header = (props: Props) => {
    const theme = useTheme();
    const options = [
        { value: 'Lviv', label: 'Львів' },
        { value: 'Kiev', label: 'Київ' },
        { value: 'Dnipro', label: 'Дніпро' }
    ];

    // const [theme, setTheme] = useState('light');

    const colorStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme.theme === Theme.DARK ? 'rgba(39, 46, 66, 1)' : '#7747FF33',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,
        }),
        singleValue: (styles: any) => ({
            ...styles,
            color: theme.theme === Theme.DARK ? '#fff' : '#000',
        })
    };

    function changeTheme() {
        // setTheme(theme === 'light' ? 'dark' : 'light');
        theme.changeTheme(theme.theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)
    };


    return (
        <div className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id="header-logo"/>
                </div>
                <div className={s.title}>Weather App</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
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
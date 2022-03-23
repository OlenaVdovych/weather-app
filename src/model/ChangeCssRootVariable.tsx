import { Theme } from "../context/ThemeContext";

export function ChangeCssRootVariable (theme: Theme) {
    const root = document.querySelector(':root') as HTMLElement;
        
        const components = [
            'body-background',
            'components-background',
            'card-background',
            'card-shadow',
            'text-color'
        ];

        components.forEach((components) => {
            root.style.setProperty(
                `--${components}-default`,
                `var(--${components}-${theme})`
            );
        });
}
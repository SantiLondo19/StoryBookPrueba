/// <reference types="react" />
import "./mylabel.css";
export interface MyLabelProps {
    /**
     * Label text
     */
    label: string;
    /**
     * Label size
     */
    size: "normal" | "h1" | "h2" | "h3";
    /**
     * Convertir todo a mayusq
     */
    allCaps?: boolean;
    /**
     * Elegir el color
     */
    color?: "primary" | "secondary" | "tertiary";
    fontColor?: string;
    backgroundColor?: string;
}
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, ...props }: MyLabelProps) => JSX.Element;

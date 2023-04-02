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

export const MyLabel = ({
  label = "No label",
  size = "normal",
  allCaps = false,
  color = "primary",
  fontColor,
  backgroundColor = 'transparent',
  ...props
}: MyLabelProps) => {
  return (
    <span
      className={`label ${size} ${allCaps && "upperCase"} ${
        !fontColor && `text-${color}`
      } `}
      style={{ color: fontColor, backgroundColor }}
    >
      {label}
    </span>
  );
};

export default MyLabel;
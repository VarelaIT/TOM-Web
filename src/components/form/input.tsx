import { Typography } from "@mui/material";
interface InputElementProps {
  label: string;
  type: string | undefined;
  name: string;
  value: string | undefined;
  required: boolean | undefined;
  pattern: string | undefined;
}

export default function InputELement(props: InputElementProps) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <Typography>{props.label}</Typography>
      <input
        style={{
          padding: "8px",
          fontSize: "16px",
        }}
        type={props.type}
        name={props.name}
        value={props.value}
        required={props.required ? true : false}
        pattern={props.pattern}
        placeholder={props.label}
      />
    </div>
  );
}

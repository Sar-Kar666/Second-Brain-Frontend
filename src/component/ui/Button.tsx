
interface ButtonProps{
    variant:"primary" | "secondary";
    size: "sm"|"md"|"lg";
    text: String;
    startIcon?: any;
    endIcon?: any;
    onClick?: () => void;

}

const variantStyles={
    "primary": "bg-purple-600 text-white ",
    "secondary": "bg-purple-300 text-purple-600"

}
// const defaultStyles= 

export const Button=(props:ButtonProps)=>{
    return( 
    <button className={variantStyles[props.variant]}>{props.text}</button>)

}


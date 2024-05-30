import React from "react";

export interface InputFieldProp extends React.InputHTMLAttributes<InputFieldProp> {
    label: string,
    type: string,
    placeholder: string,
    required?: boolean,
    error?: string,
    clasName?: string

}
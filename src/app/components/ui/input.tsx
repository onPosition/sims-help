import React from "react";

interface InputProps {}

export const Input: React.FC<InputProps> = () => {
    return (
        <input
            placeholder="Поиск по блогу"
            className=" p-3 rounded-md m-2 ml-0"
        />
    );
};

export default Input;

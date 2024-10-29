import React from "react";
import Header from "../components/shared/header";
import Main from "../components/shared/main";
interface servicesProps {}

export const services: React.FC<servicesProps> = () => {
    return (
        <div className="container max-w-[1100px] mx-auto">
            <Header activeCategory="services" />
            <Main />
        </div>
    );
};

export default services;

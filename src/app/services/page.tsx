import React from "react";
import Main from "../components/shared/content";
import { Title } from "../components/ui/title";
import Header from "../components/shared/header";

const services: React.FC = () => {
    return (
        <>
            <Header activeCategory="services" />
            <Title text="Дополнительные услуги" size="2xl" />
            <Main activeCategory="services" />
        </>
    );
};

export default services;

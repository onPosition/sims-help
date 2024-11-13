import React, { Suspense } from "react";
import Main from "../components/shared/content";
import { Title } from "../components/ui/title";
import Header from "../components/shared/header";

const services: React.FC = () => {
    return (
        <>
            <Header activeCategory="services" />
            <Title text="Дополнительные услуги" size="2xl" />
            <Suspense fallback={<div className="flex justify-center w-full h-36">Loading...</div>}>
            <Main activeCategory="services" />
            </Suspense>
        </>
    );
};

export default services;

import React from "react";
import { Title } from "../components/ui/title";
import Header from "../components/shared/header";
import { Metadata } from "next";
import ServicesGrid from "../components/ui/services-grid";

export const metadata: Metadata = {
    title: "Услуги поддержки",
    description: "Техническая поддержка, разбор папки mods",
};

export default function Services() {
    return (
        <>
            <Header />
            <Title size="2xl">Дополнительные услуги</Title>
            <ServicesGrid />
        </>
    );
}

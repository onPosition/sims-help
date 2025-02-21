"use client";
const BackButton = () => {
    const handleBack = () => {
        if (window.history.length > 1) {
            window.history.back();
        } else {
            window.location.href = "/"; // Перенаправление на главную страницу, если истории нет
        }
    };

    return (
        <button
            onClick={handleBack}
            className="font-bold p-4 mb-8 bg-maincolor rounded-xl"
        >
            {"< Назад"}
        </button>
    );
};

export default BackButton;

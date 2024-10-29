import Header from "./components/shared/header";
import Main from "./components/shared/main";

export default function Home() {
    return (
        <div className="container max-w-[1100px] mx-auto">
            <Header />
            <Main />
        </div>
    );
}

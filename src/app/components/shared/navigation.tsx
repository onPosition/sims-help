import { NavigationItem } from "../../../../types/types";
import Card from "../ui/card";

type NavigationProps = {
    items: NavigationItem[];
};

const Navigation: React.FC<NavigationProps> = ({ items }) => {
    return (
        <nav className="flex flex-row items-center justify-center gap-2 lg:gap-4 px-8 lg:px-0">
            {items.map((item) => (
                <Card
                    title={item.title}
                    slug={`/${item.slug}`}
                    icon={item.icon.url}
                    key={item.id}
                />
            ))}
        </nav>
    );
};
export default Navigation;

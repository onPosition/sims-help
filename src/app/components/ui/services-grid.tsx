import fetchContentType from "@/lib/fetchContentType";
import { strapiImage } from "@/lib/strapiImage";
import Image from "next/image";
import Link from "next/link";
import { Service } from "../../../../types/types";

export default async function ServicesGrid() {
    const services = await fetchContentType("services", "populate=*");
    console.log(services);
    return (
        <div className="flex mt-8">
            <div className="grid grid-rows-auto lg:grid-cols-3  w-full gap-4">
                {services.data.map((service: Service) => (
                    <Link href={`/services/${service.slug}`} key={service.id}>
                        <Image
                            src={strapiImage(service.cover.url)}
                            alt="bg"
                            width={0}
                            height={0}
                            sizes="100%"
                            className="w-full rounded-xl h-full object-cover scale-100 hover:scale-105 duration-300"
                        />
                    </Link>
                ))}
            </div>
        </div>
    );
}

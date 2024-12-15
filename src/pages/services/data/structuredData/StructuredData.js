import { services } from '../servicesData.js';

export const servicesSchema = () => ({
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: services.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
            "@type": "Service",
            name: service.title,
            image: service.imgSrc,
            description: service.description,
            offers: {
                "@type": "AggregateOffer",
                priceCurrency: "CAD",
                lowPrice: service.lowPrice,
                highPrice: service.highPrice,
            },
        },
    })),
});

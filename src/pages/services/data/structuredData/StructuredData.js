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
                "@type": "Offer",
                priceCurrency: "CAD",
                price: service.price,
                url: "https://torassembly.ca/"
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "0",
                reviewCount: "0",
            }
        },
    })),
});

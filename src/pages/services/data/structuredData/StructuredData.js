export const servicesSchema = (services) => ({
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
                price: service.price,
                priceCurrency: "USD",
                itemOffered: {
                    "@type": "Product",
                    name: service.title,
                    description: service.description,
                },
            },
        },
    })),
});

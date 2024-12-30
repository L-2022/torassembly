import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async'; // import from react-helmet-async
import { services } from '../../data/servicesData';
import { servicesSchema } from '../../data/structuredData/StructuredData.js';
import ServiceItem from "../serviceItem/index.js";

const ServicesList = () => {
    const schemaData = servicesSchema(services); // created JSON-LD for Schema.org

    return (
            <HelmetProvider>
                <Helmet>
                    <script type="application/ld+json">
                        {JSON.stringify(schemaData)}
                    </script>
                </Helmet>
                <ServiceItem />
            </HelmetProvider>
    );
};

export default ServicesList;

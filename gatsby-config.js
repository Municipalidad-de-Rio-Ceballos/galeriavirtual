module.exports = {
    siteMetadata: {
        title: `Galería Virtual`,
        name: `Municipalidad de Río Ceballos`,
        siteUrl: `https://galeriadearte.rioceballos.gob.ar/`,
        description: `Un espacio online creado para compartir y difundir mediante exposición y catálogo digital, obras de artistas de nuestra localidad y de toda la provincia de Córdoba, visualizando sus Obras.`,
        hero: {
            heading: `Galería Virtual de Arte de la Municipalidad de Río Ceballos.`,
            maxWidth: 652,
        },
        social: [
            {
                name: `instagram`,
                url: `https://www.instagram.com/munirioceballos/`,
            },
            {
                name: `facebook`,
                url: `https://www.facebook.com/CulturaRioCeballosOk/`,
            },
        ],
    },
    plugins: [
        {
            resolve: "@narative/gatsby-theme-novela",
            options: {
                contentPosts: "content/posts",
                contentAuthors: "content/authors",
                basePath: "/",
                authorsPage: true,
                sources: {
                    local: true,
                    // contentful: true,
                },
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `Galería Virtual`,
                short_name: `Municipalidad de Río Ceballos`,
                start_url: `/`,
                background_color: `#fff`,
                theme_color: `#fff`,
                display: `standalone`,
                icon: `src/assets/favicon.png`,
            },
        },
        {
            resolve: `gatsby-plugin-netlify-cms`,
            options: {},
        },
    ],
};

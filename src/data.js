import { Form } from 'react-router-dom'
import { Portfolio1, Portfolio2, Portfolio3, Portfolio4 } from './assets'
export const portfolioData = [{
        title: 'Brand Name',
        thumbnail: Portfolio1,
        alt: 'A photo showcasing branding work that I did for Raddy',
        category: 'Branding',
        link: '#',
    },
    {
        title: 'Jokanola Yusuf',
        thumbnail: Portfolio2,
        alt: 'A photo showcasing branding work that I did for Raddy',
        category: 'Web development',
        link: '/work/harley-davidson',
    },
    {
        title: 'Abdulwaris',
        thumbnail: Portfolio3,
        alt: 'Work that I did for Promise',
        category: 'Web development',
        link: '#',
    },
    {
        title: 'Head',
        thumbnail: Portfolio4,
        alt: 'A photo showcasing branding work that I did for Head',
        category: 'Web design',
        link: '#',
    },
]
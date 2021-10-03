import Footer from 'part/Footer'
import Header from 'part/Header'
import Sitemap from 'part/Sitemap'
import React from 'react'
import Breadcrumb from 'components/Breadcrumb'
import Content from 'part/ProductDetail/Content'
import Suggestion from 'part/ProductDetail/Suggestion'

export default function ProductDetails() {
    return (
        <>
            <Header theme="black" position="relative" />
            <Breadcrumb list={[
                { url: "/", name: "Home" },
                { url: "/categories/office-room", name: "Office Room" },
                { url: "/product/kursi-gaming", name: "Details" },
            ]} />
            <Content />
            <Suggestion />
            <Sitemap />
            <Footer />
        </>
    )
}

import React from 'react'

export default function Blog() {
    return (
        <section className="blog-section" id="blog">
            <div className="container">
            <div className="row">
                <div className="section-title">
                    <h3>Blog</h3>
                </div>
            </div>
            <div className="row">
                <div className="blog-content">
                    <img src="images/unsplash.jpg" alt="" />
                </div>
                <div className="blog-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quas modi voluptates commodi sunt magni? Non nihil reprehenderit sunt, quis dolor dolorum. Quisquam inventore tempora doloribus, aspernatur eum voluptatem similique. Assumenda, ad ab molestiae voluptas asperiores vitae laboriosam vel laborum ea, quod sed officiis, saepe id.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, id reiciendis! Officia eaque, fugiat est unde delectus dicta doloribus excepturi.</p>
                </div>
                <div className="blog-content order">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, quas modi voluptates commodi sunt magni? Non nihil reprehenderit sunt, quis dolor dolorum. Quisquam inventore tempora doloribus, aspernatur eum voluptatem similique. Assumenda, ad ab molestiae voluptas asperiores vitae laboriosam vel laborum ea, quod sed officiis, saepe id.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam tempore commodi et ipsa mollitia vero?</p>
                </div>
                <div className="blog-content">
                    <img src="images/city.jpg" alt="" />
                </div>
            </div>
            </div>
        </section>
    )
}

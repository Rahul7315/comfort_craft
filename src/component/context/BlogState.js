import BlogContext from './BlogContext';

const BlogState = (props) => {

    const Blog_data = [{
        id: 1,
        title: "Modern Elegance: The Art of Minimalist Furniture",
        blog_img: "images/b1.jpg",
        details: "Enhance your living space with sleek and minimalist furniture designs. Explore the beauty of simplicity, where clean lines and functional forms create an atmosphere of modern elegance."
    },
    {
        id: 2,
        title: "Timeless Classics: Embracing Vintage Furniture Trends",
        blog_img: "images/b2.jpg",
        details: "Step into the past and embrace the charm of vintage furniture. Discover how classic pieces add character to your home, creating a timeless ambiance that transcends trends."
    },
    {
        id: 3,
        title: "Smart Living: Furniture Solutions for Compact Spaces",
        blog_img: "images/b3.jpg",
        details: "Make the most of limited space with smart furniture choices. From multi-functional sofas to clever storage solutions, unlock the secrets to creating a stylish and efficient living area in any compact space."
    },
    {
        id: 4,
        title: "Nature's Touch: Bringing the Outdoors In with Wooden Furniture",
        blog_img: "images/b4.jpg",
        details: "Immerse your home in the warmth and beauty of nature with wooden furniture."
    }
]
    return(

        <BlogContext.Provider value={Blog_data}>
            {props.children}
        </BlogContext.Provider>
    );
}

export default BlogState;
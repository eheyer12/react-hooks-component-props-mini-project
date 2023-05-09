
function About(props) {
    const {image} = props
    return (
        <aside>
            <img src={image || "https://via.placeholder.com/215Links"} alt="blog logo"></img>
            <p>{props.about}</p>
        </aside>
    )
}

export default About


// an <img> element, with the src set to an image passed as a prop called image
// the <img> element should use this placeholder image as a default value for the prop if no prop is passed in: "https://via.placeholder.com/215Links to an external site."
// the image should also be accessible! Give it an alt attribute of "blog logo"

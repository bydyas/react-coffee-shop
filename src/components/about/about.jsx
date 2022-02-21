import Description from '../description/description';

import './about.css';

const About = ({src, alt, style}) => {
    return (
        <section className="section-about">
            <img className="section-about__img-frame" src={src} alt={alt} style={style} />
            <Description />
        </section>
    )
}

export default About;
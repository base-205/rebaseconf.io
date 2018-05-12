import SpeakerImage from 'components/SpeakerImage';

const SpeakerHero = ({ speakers }) => {
    return speakers.map(speaker => (
        <article className="speaker-hero" key={speaker.id}>
            <SpeakerImage speaker={speaker} layout="hero" />
            <section className="speaker-hero__content">
                <h1 className="speaker-hero__title">{speaker.title}</h1>
                <span className="speaker-hero__track">{speaker.track}</span>
                <p className="speaker-hero__bio">{speaker.bio}</p>
            </section>
        </article>
    ))
};

export default SpeakerHero;
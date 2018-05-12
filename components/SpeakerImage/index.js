const SpeakerImage = ({ speaker, layout }) => (
    <figure className="speaker-image">
        <figcaption className={`speaker-image__name speaker-image__name--${layout}`}>{speaker.name}</figcaption>
        <section className="speaker-image__image-wrap">
            <img src={`/static/${speaker.image}`} alt={speaker.name} className="speaker-image__image" />
        </section>
    </figure>
);

export default SpeakerImage;
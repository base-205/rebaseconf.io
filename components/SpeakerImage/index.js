import css from './styles.css';

const SpeakerImage = ({ speaker, layout }) => (
    <figure className={css[layout]}>
        <figcaption className={css.name}>{speaker.name}</figcaption>
        <section className={css.imageWrapper}>
            <img src={`/static/${speaker.image}`} alt={speaker.name} className={css.image} />
        </section>
    </figure>
);

export default SpeakerImage;
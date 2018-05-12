import SpeakerImage from 'components/SpeakerImage';

import css from './styles.css';

const SpeakerHero = ({ speakers }) => {
    return speakers.map(speaker => (
        <article className={css.wrapper} key={speaker.id}>
            <SpeakerImage speaker={speaker} layout="hero" />
            <section className={css.content}>
                <h1 className={css.title}>{speaker.title}</h1>
                <span className={css.track}>{speaker.track}</span>
                <p className={css.bio}>{speaker.bio}</p>
            </section>
        </article>
    ))
};

export default SpeakerHero;
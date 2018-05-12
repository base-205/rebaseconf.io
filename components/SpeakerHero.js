import SpeakerImage from './SpeakerImage';

const SpeakerHero = ({speakers}) => {
    return speakers.map(speaker => (
        <div key={speaker.id}>
            <SpeakerImage speaker={speaker} layout="hero" />
            <div className="speaker-blurb">
                <div className="speaker-type">{speaker.type}</div>
                <div className="speaker-title">{speaker.title}</div>
                <div className="speaker-track">{speaker.track}</div>
                <div className="speaker-bio">{speaker.bio}</div>
            </div>
        </div>
    ))
};

export default SpeakerHero;
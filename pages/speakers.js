import SpeakerHero from './speakers/speaker-hero';
import SpeakerList from '../components/speaker-list';

import SpeakersJSON from '/static/speakers.json';

export default () => (
    <div>
        <SpeakerHero speaker={SpeakersJSON.speakers[SpeakersJSON.highlightedSpeaker]} />
        <SpeakerList speakers={SpeakersJSON.speakers} />
    </div>
);
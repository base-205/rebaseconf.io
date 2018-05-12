import SpeakerHero from '../components/SpeakerHero';
import SpeakerList from '../components/SpeakerList';

import speakerData from '../static/speakers.json';

export default () => (
    <div>
        <SpeakerHero speaker={speakerData.speakers[speakerData.highlightedSpeaker]} />
        <SpeakerList speakers={speakerData.speakers} />
    </div>
);
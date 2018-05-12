import SpeakerHero from '../components/SpeakerHero';
import SpeakerList from '../components/SpeakerList';

import speakerData from '../static/speakers.json';

const keynoteSpeakers = speakerData.speakers.filter(speaker => speaker.isKeynote)

export default () => (
    <div>
        <SpeakerHero speakers={keynoteSpeakers} />
        <SpeakerList speakers={speakerData.speakers} />
    </div>
)
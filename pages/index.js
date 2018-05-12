import SpeakerHero from '../components/SpeakerHero';
import SpeakerList from '../components/SpeakerList';

import speakerData from '../static/speakers.json';

const keynoteSpeakers = speakerData.filter(speaker => speaker.isKeynote)

export default () => (
    <div>
        <SpeakerHero speakers={keynoteSpeakers} />
        <SpeakerList speakers={speakerData} />
    </div>
)
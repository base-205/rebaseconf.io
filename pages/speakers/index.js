import PageContainer from "components/PageContainer";
import { Title } from "components/Header";
import SpeakerHero from 'components/SpeakerHero';
import SpeakerList from 'components/SpeakerList';

import speakerData from '../../static/speakers.json';

const keynoteSpeakers = speakerData.filter(speaker => speaker.isKeynote)

const Speakers = () => (
  <PageContainer headerContent={<Title>Speakers</Title>}>
    <div>
      <SpeakerHero speakers={keynoteSpeakers} />
      <SpeakerList speakers={speakerData} />
    </div>
  </PageContainer>
);

export default Speakers;

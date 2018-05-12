import SpeakerImage from './SpeakerImage';

const SpeakerList = ({speakers}) => (
    <div>
        {speakers.map(s =>
            <SpeakerImage
                key={s.id}
                speaker={s}
                layout="regular"
            />
        )}
    </div>
);

export default SpeakerList;
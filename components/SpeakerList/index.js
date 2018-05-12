import SpeakerImage from 'components/SpeakerImage';

import css from './styles.css';

const SpeakerList = ({speakers}) => (
    <div className={css.speakerList}>
        {speakers.map(s =>
            <SpeakerImage
                key={s.id}
                speaker={s}
                layout="speakerPage"
            />
        )}
    </div>
);

export default SpeakerList;
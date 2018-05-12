const SpeakerImage = ({speaker, layout}) => (
    <div>
        <div className={layout}>{speaker.name}</div>
        <div className="speaker-image">
            <img src={`/static/speaker-images/${speaker.image}`} alt={speaker.name}/>
        </div>
    </div>
);

export default SpeakerImage;
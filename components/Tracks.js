import Paragraph from './Paragraph';
import styles from './tracks.module.scss'

function convertDuration(duration) {
    const minutes = Math.floor(duration / 60);
    const seconds = duration % 60;
    const formattedSeconds = (Math.round(seconds * 100) / 100).toFixed(2);

    const formattedDuration = `${minutes}:${formattedSeconds}`;
    return formattedDuration;
}

const Tracks = ({ items }) => {
    return <ul className={styles.tracks}>
        {items.map((item, index) => {
            const { title, songInformation } = item;
            //const {title, artist} = item;
            return <li 
                key={index} 
                className={styles.trackItem}>
            <h3>{item.title}</h3>
            <Paragraph>{convertDuration(songInformation.duration)}</Paragraph>
            </li>
        })} 
    </ul>
}
export default Tracks;
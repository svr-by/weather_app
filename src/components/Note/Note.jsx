import { formatTemp, formatDate, formatTime } from '../../services/formatServices';
import { getIconWeatherUrl } from '../../services/endpointServices';
import './Note.css';

export default function Note({data, onDelete}) {
  const {id, message, time, temp, icon, desc} = data;
  const iconUrl = getIconWeatherUrl(icon);
  const tempSrt = formatTemp(temp);
  const dateSrt = formatDate(time);
  const timeStr = formatTime(time);

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="note">
      <p className="note__message">{message}</p>
      <div className="note__weather">
        {icon && <img className="note__icon" src={iconUrl} alt={desc}/>}
        {!!temp && <p className="note__info">{tempSrt}</p>}
        {!!time && <>
          <p className="note__info">{dateSrt}</p>
          <p className="note__info">{timeStr}</p>
        </>}
      </div>
      <div className="note__erase-icon" onClick={handleDelete} >{'\u2716'}</div>
    </div>
  );
}

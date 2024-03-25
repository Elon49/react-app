import "./Spinner.css";
import imageSource from '../../../Assets/Images/gif.gif'

export function Spinner(): JSX.Element {
    return (
        <div className="Spinner">
            just a sec
			<img src = {imageSource}></img>
        </div>
    );
}

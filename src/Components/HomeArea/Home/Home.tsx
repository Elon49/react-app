import "./Home.css";
import imageSource from "../../../Assets/Images/yoni_autoOrient_i.jpg";
import { useTitle } from "../../../Utils/UseTitle";

export function Home(): JSX.Element {
    useTitle('Home');

    return (
        <div className="Home">
            <img src={imageSource}></img>
        </div>
    );
}

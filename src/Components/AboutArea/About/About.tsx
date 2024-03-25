import { useTitle } from "../../../Utils/UseTitle";
import "./About.css";
import { Tune } from "../Tune/Tune";

export default function About(): JSX.Element {

    useTitle('about');

    return (
        <div className="About">
			<Tune/>
        </div>
    );
}

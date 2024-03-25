import { useTitle } from "../../../Utils/UseTitle";
import "./Page404.css";

export function Page404(): JSX.Element {

    useTitle('404 page');
    
    return (
        <div className="Page404">
			<p>The page you're looking for doesn't exist!! amdback bich you stupid bastered!</p>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/t3otBjVZzT0?autoplay=true" allow="autoplay" title="Page not Found"></iframe>
        </div>
    );
}

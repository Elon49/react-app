import { Typography, TextField, Button, ButtonGroup, FormControlLabel, Checkbox} from "@mui/material";
import "./ContactUs.css";
import {AlternateEmail, ClearAll, Send} from "@mui/icons-material";

export function ContactUs(): JSX.Element {
    return (
        <div className="ContactUs">

			<Typography variant='h3'>
                Contact Us
                &nbsp;
                <AlternateEmail fontSize="large"/>
            </Typography>

            <form>
                <TextField label="name" className="TextBox"/>
                <TextField type="email" label="Email" className="TextBox"/>
                <TextField label="message" className="TextBox"/>

                <FormControlLabel label="Send me promotional emails" control={<Checkbox/>}/>

                <ButtonGroup fullWidth variant="contained">
                <Button color="primary">Send &nbsp;<Send/></Button>
                <Button color="secondary" type="reset">Clear &nbsp; <ClearAll/></Button>

                </ButtonGroup>
            </form>

        </div>
    );
}

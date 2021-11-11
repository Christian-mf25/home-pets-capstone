import { useHistory } from "react-router-dom"
import { Button } from "@material-ui/core"

const HomePage = () =>{
	
	const history = useHistory()

	const sendTo = (path) =>{
		history.push(path)
	}

	return(
		<>
		<h1>HomePage</h1>
		<Button variant="contained" onClick={() => sendTo("/login")}>Ir para login</Button>
		</>
	)
}

export default HomePage
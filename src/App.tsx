import { useState } from "react";
import Alert from "./components/Alert";
import Buttons from "./components/Buttons";
// import ListGroup from "./components/ListGroup";
function App() {
	// let items = ["New York", "London", "Delhi", "Paris", "Dubai", "Basti"];
	// const handleSelectItem = (item: string) => {
	// 	console.log(item);
	// };
	const [alertVisible, setAlertVisiblity] = useState(false);
	return (
		<div>
			{/* <ListGroup
				items={items}
				heading="Cities"
				onSelectItem={handleSelectItem}
			/> */}
			{alertVisible && (
				<Alert onClose={() => setAlertVisiblity(false)}>My Alert</Alert>
			)}
			<Buttons color="danger" onClick={() => setAlertVisiblity(true)}>
				WOW
			</Buttons>
		</div>
	);
}

export default App;

// import { Fragment } from "react"; if using <Fragement/>

import { useState } from "react";
interface ListGroupProps {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

// import type { MouseEvent } from "react";
function ListGroup({ items, heading, onSelectItem }: ListGroupProps) {
	// let items = ["New York", "London", "Delhi", "Paris", "Dubai"];
	// items = [];
	//event handling
	// const handleClick = (event: MouseEvent) => console.log(event);

	const [selectedIndex, setSelectedIndex] = useState(-1);

	return (
		// You can use a <div> or a <Fragment> or <></> for returning multiple points
		<>
			<h1>{heading}</h1>
			{
				/* {if (condition) {}}  we cant use statements in jsx we can only use expressions (variables,function calls, operators, Araay methods, Object property access) in the jsx*/
				// items.length === 0 ? <p>No Item Found</p> : null
			}
			{items.length === 0 && <p>No Item Found</p>}

			<ul className="list-group">
				{items.map((item, index) => (
					<li
						className={
							selectedIndex === index
								? "list-group-item active"
								: "list-group-item"
						}
						key={item}
						onClick={() => {
							setSelectedIndex(index);
							onSelectItem(item);
						}}
						// onClick={handleClick}
					>
						{item}
					</li>
				))}
			</ul>
		</>
	);
}

export default ListGroup;

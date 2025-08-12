import styles from "./NewListGroup.module.css";
import { useState } from "react";
import styled from "styled-components";
interface ListItemsProps {
	active: boolean;
}
interface GroupProps {
	items: string[];
	heading: string;
	onSelectItem: (item: string) => void;
}

const List = styled.ul`
	list-style: none;
	background-color: aquamarine;
	padding: 0;
`;
const ListItems = styled.li<ListItemsProps>`
	padding: 5px 0;
	background: ${(props) => (props.active ? "blue" : "none")};
`;
function NewListGroup({ items, heading, onSelectItem }: GroupProps) {
	const [selectedIndex, setSelectedIndex] = useState(0);
	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No items found</p>}
			{/* <ul className="list-group"> */}
			<List>
				{items.map((item, index) => (
					<ListItems
						active={index === selectedIndex}
						key={item}
						onClick={() => {
							setSelectedIndex(index);
							onSelectItem(item);
						}}
					>
						{item}
					</ListItems>
				))}
			</List>
		</>
	);
}

export default NewListGroup;

import styles from "./NewListGroup.module.css";
interface GroupProps {
	items: string[];
	heading: string;
}

function NewListGroup({ items, heading }: GroupProps) {
	return (
		<>
			<h1>{heading}</h1>
			{items.length === 0 && <p>No items found</p>}
			{/* <ul className="list-group"> */}
			<ul className={styles["list-group"]}>
				{items.map((item) => (
					<li key={item}>{item}</li>
				))}
			</ul>
		</>
	);
}

export default NewListGroup;

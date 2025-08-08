interface Props {
	children: string;
	color?: "primary" | "secondary" | "danger";
	onClick: () => void;
}
const Buttons = ({ children, onClick, color = "primary" }: Props) => {
	return (
		<div
			className="alert alert-warning alert-dismissible fade show"
			role="alert"
		>
			<button type="button" className={"btn btn-" + color} onClick={onClick}>
				{children}
			</button>
			<button type="button" className="btn btn-secondary">
				Secondary
			</button>
			<button type="button" className="btn btn-success">
				Success
			</button>
			<button type="button" className="btn btn-danger">
				Danger
			</button>
			<button type="button" className="btn btn-warning">
				Warning
			</button>
			<button type="button" className="btn btn-info">
				Info
			</button>
			<button type="button" className="btn btn-light">
				Light
			</button>
			<button type="button" className="btn btn-dark">
				Dark
			</button>

			<button type="button" className="btn btn-link">
				Link
			</button>
		</div>
	);
};

export default Buttons;

import cn from "classnames";

export const Text = ({
	children,
	className,
	as,
	h1,
	h2,
	h3,
	h4,
	h5,
	large,
	small,
	xSmall,
	bold,
	...rest
}) => {
	const Component =
		as || h1 ? "h1" : h2 ? "h2" : h3 ? "h3" : h4 ? "h4" : h5 ? "h5" : "p";
	return (
		<Component
			className={cn(
				{
					"text-3xl font-medium": h1,
					"text-2xl font-medium": h2,
					"text-xl font-medium": h3,
					"text-lg font-medium": h4,
					"text-base font-medium": h5,
					"text-lg": large,
					"text-sm": small,
					"text-xs": xSmall,
					"font-medium": bold,
				},
				className
			)}
			{...rest}
		>
			{children}
		</Component>
	);
};

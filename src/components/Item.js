export default function Item({ item }) {
	const contentItemPrice = item.currency_code === 'USD' ? `$${item.price}`
		: item.currency_code === 'EUR' ? `€${item.price}`
			: `${item.price ?? ''} ${item.currency_code ?? ''}`
	const classQuantity = item.quantity <= 10 ? 'level-low'
		: item.quantity <= 20 ? 'level-medium' : 'level-high'
	return (
		<div className="item">
			<div className="item-image">
				<a href={item.url}>
					<img src={item?.MainImage?.url_570xN} alt={item.title}/>
				</a>
			</div>
			<div className="item-details">
				<p className="item-title">{item.title}</p>
				<p className="item-price">{contentItemPrice}</p>
				<p className={`item-quantity ${classQuantity}`}>{item.quantity} left</p>
			</div>
		</div>
	)
}

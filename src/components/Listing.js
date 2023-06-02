import Item from './Item';

export default function Listing({ items = [] }) {
	return (
		<div className="item-list">
			{items.map((item) => <Item key={item.listing_id} item={item}/>)}
		</div>
	)
}

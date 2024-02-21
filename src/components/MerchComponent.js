import GTX from '../images/GTX1080.png'
import Four0Four from '../images/404.png'

export function MerchComponent() {
    const merchData = [
        {
            imgSrc: `https://thebigcb.com/images/Merch/laptop.png`,
            title: `Dirty Old Laptop`,
            description: `I swear its not broken`,
        },
        {
            imgSrc: `https://thebigcb.com/images/Merch/laptop.png`,
            title: `Code Therapy Mug`,
            description: `Code Therapy: When Functions Can't Fix Feelings`,
        },
        { imgSrc: Four0Four, title: `My Soul`, description: `Sold!` },
        { imgSrc: GTX, title: `My GTX 1080TI GPU`, description: `2020 boi` },
        {
            imgSrc: `https://thebigcb.com/images/Merch/laptop.png`,
            title: `Game Over Coffee Art`,
            description: `Description 2`,
        },
        {
            imgSrc: `https://thebigcb.com/images/Merch/laptop.png`,
            title: `Ctrl+Alt+Delete Feelings Poster`,
            description: `Description 2`,
        },
        {
            imgSrc: `https://thebigcb.com/images/Merch/laptop.png`,
            title: `BubbleTea Wintermelon Flavor`,
            description: `Description 1`,
        },
        {
            imgSrc: `https://thebigcb.com/images/Merch/laptop.png`,
            title: `Debugging My Emotions T-Shirt`,
            description: `A shirt with a sad-faced debugger symbol and the text "Debugging My Emotions"`,
        },
    ]
    const itemsPerRow = 3
    const rows = []
    for (let i = 0; i < merchData.length; i += itemsPerRow) {
        rows.push(merchData.slice(i, i + itemsPerRow))
    }
    return (
        <>
            <div>Merch</div>
            <div className="merch-grid secondary">
                {merchData.map((item, itemIndex) => (
                    <MerchItem
                        key={itemIndex}
                        imgSrc={item.imgSrc}
                        title={item.title}
                        description={item.description}
                    />
                ))}
            </div>
        </>
    )
}

function MerchItem({ imgSrc, title, description }) {
    const secret = 'L2hpZGRlbg=='
    return (
        <div className="merch">
            <img
                src={imgSrc}
                alt={title === 'My Soul' ? secret : 'Merchandise'}
                height="960"
                width="1280"
            />
            <div className="title">{title}</div>
            <div className="description">{description}</div>
        </div>
    )
}

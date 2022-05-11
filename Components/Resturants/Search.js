import Link from "next/link"
import Image from "next/image"
import ImagePlaceholder from "/images/img-placeholder.svg"
function SearchComponent({ getDataSearch }) {
    return (
        <div className="sort-data">
            {
                getDataSearch.map(item => (
                    <div key={item.id}>
                        <Link href={`/restaurants/${item.id}`} passHref>
                            <div className="res-item">
                                <Image className="res-img"
                                    src={ImagePlaceholder}
                                    alt={item.id}
                                    width={150}
                                    height={150} />
                                <div className="info-item">
                                    <p>{`${item.title.substring(0, 13)}`}</p>
                                    <p>{`${item.title.substring(5, 25)}..${item.id}..`}</p>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))
            }
        </div>
    )
}

export default SearchComponent;
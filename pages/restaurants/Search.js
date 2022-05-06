import React from "react"
import Link from "next/link"
function SearchComponent({ getDataSearch }) {
    return (
        <div className="sort-data">
            {
                getDataSearch.map(item => (
                    <React.Fragment key={item.id}>
                        <Link href={`/restaurants/${item.id}`}>
                            <div className="res-item">
                                <img className="res-img" src={item.thumbnailUrl} alt={item.id} />
                                <div className="info-item">
                                    <p>{`${item.title.substring(0, 13)}`}</p>
                                    <p>{`${item.title.substring(5, 25)}..${item.id}..`}</p>
                                </div>
                            </div>
                        </Link>
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default SearchComponent;
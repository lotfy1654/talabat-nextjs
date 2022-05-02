import React from "react"
import Link from "next/link"
function SearchComponent({ getDataSearch }) {
    return (
        <div className="sort-data">
            {
                getDataSearch.map(item => (
                    <React.Fragment key={item.id}>
                        <div className="res-item">
                            <img className="res-img" src={item.thumbnailUrl} alt={item.id} />
                            <div className="info-item">
                                <Link href={`/restaurants/${item.id}`}>
                                    <p>{`${item.title.substring(0, 13)}`}</p>
                                </Link>
                                <p>{`${item.title.substring(5, 25)}..${item.id}..`}</p>
                            </div>
                        </div>
                    </React.Fragment>
                ))
            }
        </div>
    )
}

export default SearchComponent;
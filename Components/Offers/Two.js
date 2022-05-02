import React, { Component } from "react";
import Coupons from "../../js/Coupons.json"
import Link from "next/link"
import ReactPaginate from "react-paginate";

export default class TabOne extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 20,
            currentPage: 0
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    receivedData() {
        const slice = Coupons.slice(
            this.state.offset,
            this.state.offset + this.state.perPage
        );
        const postData = slice.map((ele, index) => (
            <React.Fragment key={ele.id}>
                <div className="res-item">
                    <img className="res-img" src={ele.thumbnailUrl} alt={ele.id} />
                    <div className="info-item">
                        <Link href={`/restaurants/${ele.id}`}>
                            <p>{`${ele.title.substring(0, 13)}`}</p>
                        </Link>
                        <p>{`${ele.title.substring(0, 19)}..${ele.id}..`}</p>
                    </div>
                </div>
            </React.Fragment>
        ));

        this.setState({
            pageCount: Math.ceil(Coupons.length / this.state.perPage),
            postData
        });
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;

        this.setState(
            {
                currentPage: selectedPage,
                offset: offset
            },
            () => {
                this.receivedData();
            }
        );
    };

    componentDidMount() {
        this.receivedData();
    }
    render() {
        return (
            <>
                <div className="sort-data">
                    {this.state.postData}
                </div>
                <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={this.state.pageCount}
                    marginPagesDisplayed={1}
                    pageRangeDisplayed={1}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                />
            </>
        )
    }
}

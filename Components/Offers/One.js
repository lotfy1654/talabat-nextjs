import React, { Component } from "react";
import Promotions from "../../js/Promotions.json"
import Link from "next/link"
import ReactPaginate from "react-paginate";
import Image from "next/image";
import ImagePlaceholder from "/images/img-placeholder.svg";

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
        const slice = Promotions.slice(
            this.state.offset,
            this.state.offset + this.state.perPage
        );
        const postData = slice.map((ele, index) => (
            <React.Fragment key={ele.id}>
                <Link href={`/offers/${ele.id}`} passHref>
                    <div className="res-item">
                        <Image className="res-img" src={ImagePlaceholder} alt={ele.id} height={150} width={150} />
                        <div className="info-item">
                            <p>{`${ele.title.substring(0, 13)}`}</p>
                            <p>{`${ele.title.substring(0, 19)}..${ele.id}..`}</p>
                        </div>
                    </div>
                </Link>
            </React.Fragment>
        ));

        this.setState({
            pageCount: Math.ceil(Promotions.length / this.state.perPage),
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


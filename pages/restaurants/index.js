import React, { Component } from "react";
import Link from "next/link";
import ReactPaginate from "react-paginate";
import SearchComponent from "./Search";
import Footer from "../../Components/Footer/Footer"
import Image from "next/image"
import ImagePlaceholder from "/images/img-placeholder.svg"


export default class Restaurants extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            offset: 0,
            data: [],
            perPage: 30,
            currentPage: 0,
            resNeed: "",
            getDataSearch: [],
            showAllData: true,
            showSearchData: false,
        };
        this.handlePageClick = this.handlePageClick.bind(this);
    }
    dataShow = () => {
        const images = {
            domains: ['https://via.placeholder.com/']
        };
        const { allRestaurents } = this.props
        const slice = allRestaurents.slice(
            this.state.offset,
            this.state.offset + this.state.perPage
        );

        const postData = slice.map((ele) => (
            <React.Fragment key={ele.id}>
                <Link href={`/restaurants/${ele.id}`} passHref>
                    <div className="res-item">
                        <Image
                            className="res-img"
                            src={ImagePlaceholder}
                            alt={ele.id}
                            width={150}
                            height={150} />
                        <div className="info-item">
                            <div>
                                <p>
                                    {`${ele.title.substring(0, 13)}`}
                                </p>
                                <p>{`${ele.title.substring(0, 19)}..${ele.id}..`}</p>
                            </div>
                        </div>
                    </div>
                </Link>
            </React.Fragment>
        ))
        this.setState({
            pageCount: Math.ceil(allRestaurents.length / this.state.perPage),
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
                this.dataShow();
            }
        );
    };

    componentDidMount() {
        this.dataShow();
    }

    handleClick = (e) => {
        let { getDataSearch } = this.state
        if (e.target.value.length == 0) {
            getDataSearch.length = 0;
            this.setState({
                resNeed: ""
            })
        } else {
            getDataSearch.length = 0
            this.setState({
                resNeed: e.target.value.trim()
            })
            this.filterData()
        }
    }

    filterData() {
        let { resNeed } = this.state
        let { allRestaurents } = this.props
        let dataget = allRestaurents.filter(item => item.title.substring(0, 13) === resNeed)
        this.setState({
            getDataSearch: dataget,
            showAllData: false
        })
        dataget.length ? null : this.setState({ showAllData: true })
    }
    // componentDidUpdate() {
    //     let { getDataSearch } = this.state
    //     this.props.allRestaurents.filter(ele => {
    //         ele.title.substring(0, 13) == this.state.resNeed
    //             ? getDataSearch.push(ele)
    //             : null
    //     })
    //     // console.log(this.state.getDataSearch)
    // }



    render() {

        let { showAllData, showSearchData } = this.state;
        return (
            <>
                <div className="container">
                    <div className="restaurants">
                        <div className="all-res-box">
                            <div className="box">
                                <div className="title">
                                    <h2>all restaurants</h2>
                                    <div className="search-input">
                                        <input type="text" placeholder="Search" onChange={this.handleClick} />
                                    </div>
                                </div>
                            </div>
                            {showAllData ?
                                <div className="all-data" style={{ display: `${this.state.showAllData}` }}>
                                    <div className="container">
                                        <div className="sort-data">
                                            {this.state.postData}
                                        </div>
                                        <ReactPaginate
                                            previousLabel={"<~"}
                                            nextLabel={"~>"}
                                            breakLabel={".."}
                                            breakClassName={"break-me"}
                                            pageCount={this.state.pageCount}
                                            marginPagesDisplayed={1}
                                            pageRangeDisplayed={1}
                                            onPageChange={this.handlePageClick}
                                            containerClassName={"pagination"}
                                            subContainerClassName={"pages pagination"}
                                            activeClassName={"active"}
                                        />
                                    </div>
                                </div>
                                : null}
                            <div className="search-data">
                                <div>
                                    <SearchComponent getDataSearch={this.state.getDataSearch} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </>
        )
    }
}

export async function getStaticProps() {
    const req = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await req.json();

    return {
        props: {
            allRestaurents: data,
        },
    };
}



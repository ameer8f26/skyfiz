import React, { Component } from 'react';
import axios from '@/lib/axios'
import {withRouter} from 'next/router'
class BreweryDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Brewery: {},
        };
        // this.handleShowBrewery = this.handleShowBrewery.bind(this);
    }

    //  handleShowBrewery(ev) {
    //      this.props.router.push('brewery/'+ev.target.dataset.id)
    // }

     componentDidMount() {
        console.log();
        axios
            .get('/api/breweries/' + this.props.router.query.bid)
            .then((res) => {
                this.setState({
                    Brewery: res.data
                })
                console.log(res.data);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h4 className='font-medium leading-tight text-xl mt-0 mb-4 text-gray-600'>
                    Brewery details
                </h4>
                <table className="w-full whitespace-nowrap">
                    <tbody>
                        <tr className='h-16 border border-gray-100 bg-gray-100 rounded'>
                            <td className='p-2 font-extrabold'>Name</td>
                            <td className='p-2'>
                                {
                                    this.state.Brewery.name
                                }
                            </td>
                        </tr>
                        <tr className='h-16 border border-gray-100 rounded'>
                            <td className='p-2 font-extrabold'>Brewery Type</td>
                            <td className='p-2'>
                                {
                                    this.state.Brewery.brewery_type
                                }
                            </td>
                        </tr>
                        <tr className='h-16 border border-gray-100 bg-gray-100 rounded'>
                            <td className='p-2 font-extrabold'>Street</td>
                            <td className='p-2'>
                                {
                                    this.state.Brewery.street
                                }
                            </td>
                        </tr>

                        <tr className='h-16 border border-gray-100 rounded'>
                            <td className='p-2 font-extrabold'>Phone</td>
                            <td className='p-2'>
                                {
                                    this.state.Brewery.phone
                                }
                            </td>
                        </tr>
                        <tr className='h-16 border border-gray-100 rounded'>
                            <td className='p-2 font-extrabold'>Address 2</td>
                            <td className='p-2'>
                                {
                                    this.state.Brewery.address_2
                                }
                            </td>
                        </tr>
                        <tr className='h-16 border border-gray-100 bg-gray-100 rounded'>
                            <td className='p-2 font-extrabold'>Address 3</td>
                            <td className='p-2'>
                                {
                                    this.state.Brewery.address_3
                                }
                            </td>
                        </tr>
                        <tr className='h-16 border border-gray-100 rounded'>
                            <td className='p-2 font-extrabold'>City</td>
                            <td className='p-2'>
                                {
                                    this.state.Brewery.city
                                }
                            </td>
                        </tr>
                        <tr className='h-16 border border-gray-100 bg-gray-100 rounded'>
                            <td className='p-2 font-extrabold'>State</td>
                            <td className='p-2'>
                                {
                                    this.state.Brewery.state
                                }
                            </td>
                        </tr>
                        <tr className='h-16 border border-gray-100 rounded'>
                            <td className='p-2 font-extrabold'>County Province</td>
                            <td className='p-2'>
                                {
                                    this.state.Brewery.county_province
                                }
                            </td>
                        </tr>
                        <tr className='h-16 border border-gray-100 bg-gray-100 rounded'>
                            <td className='p-2 font-extrabold'>Postal Code</td>
                            <td className='p-2'>
                                {
                                    this.state.Brewery.postal_code
                                }
                            </td>
                        </tr>

                        <tr className='h-16 border border-gray-100 rounded'>
                            <td className='p-2 font-extrabold'>Latitude</td>
                            <td className='p-2'>
                                {
                                    this.state.Brewery.latitude
                                }
                            </td>
                        </tr>

                        <tr className='h-16 border border-gray-100 bg-gray-100 rounded'>
                            <td className='p-2 font-extrabold'>Longitude</td>
                            <td className='p-2'>
                                {
                                    this.state.Brewery.longitude
                                }
                            </td>
                        </tr>
                        <tr className='h-16 border border-gray-100 rounded'>
                            <td className='p-2 font-extrabold'>Website URL</td>
                            <td className='p-2'>
                                {
                                    this.state.Brewery.website_url
                                }
                            </td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        )
    }
}

export default withRouter(BreweryDetails)
import React from "react"

import "./Navbar.css"


import NavbarIcon from "./NavbarIcon.js"
import NavbarSeach from './NavbarSearch.js'

export default class Navbar extends React.Component {

    // props
    // searchCallAction - parent function param : searchValue
    //            title - title of nav



    constructor(props) {
        super(props);

        this.state = {
            openMenu: false,
            openSearch: false,

            searchValue: '',    
            searchQuery: '',
        }
        this.updateSearchValue = this.updateSearchValue.bind(this)
        this.handleSearchClick = this.handleSearchClick.bind(this)
        // this.createResult = this.createResult.bind(this)
        // this.openSearchMenu = this.openSearchMenu.bind(this)
    }

    updateSearchValue(event) {
        this.setState({
            searchValue:event.target.value,
        })
    }

    handleSearchClick(event) {

        const { searchCallAction } = this.props

        
        if(this.state.openSearch === false) {
            this.setState({
                openSearch:true
            })
        } else {
            
            this.setState({
                searchQuery: this.state.searchValue,
                searchValue: '',
            })

            setTimeout(() => {
                searchCallAction(this.state.searchQuery)
            }, 100)
            // searchCallAction(this.state.searchQuery)

            // this.createResult();

            //CALL SEARCH FROM HERE

            this.setState({openSearch:false})
        }

    }

    render() {

        const { title, links } = this.props;
        return (
            <nav className='navbar'>
                <div className='container navbar-container'>
                    <span className='navbar-title'>{title}</span>
                    <div className='navbar-dropdown-items'>
                        <NavbarIcon title='Cart' materialIconName='shopping_cart' clickAction={this.setMenuOpen} closeAction={this.setMenuClosed}/>
                        <NavbarSeach clickAction={ this.handleSearchClick } openSearchBar={this.state.openSearch} updateSearchValue={this.updateSearchValue}/>
                    </div>
                </div>
            </nav>
        );
    }
}


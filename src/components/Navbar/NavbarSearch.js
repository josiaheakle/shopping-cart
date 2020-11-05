import React from "react"

export default class NavbarSearch extends React.Component {

    // props: 
    // clickAction - handle search submit/click action,
    // openSearchBar - t/f to animate the searchbar open
    // updateSearchValue - calls when the user types anything into the input


    constructor(props) {
        super(props);

        this.thisRef = React.createRef();
        this.state = {

            canDismountInput: true,
            animDone: true,



        }


        this.animateSearchBar = this.animateSearchBar.bind(this)


    }


    animateSearchBar() {


        let windowWidth = window.innerWidth;
        let vw = (windowWidth/100);

        this.setState ({
            canDismountInput: false,
            animDone: false,
        });



        const searchContainer = document.querySelector('.search-container')
        const searchButton = document.querySelector('.search-icon-button')
        let searchInputs = document.querySelectorAll('.search-input')


        let animSearch = this.props.openSearchBar;

        let contAnimDone = false;
        let searchAnimDone = false;
        let buttonAnimDone = false;

        let contWidth, contGridVal, searchWidth, buttonRight;


        if(animSearch === true) {
            searchButton.style.justifySelf = 'flex-end'
            contWidth = 48;
            contGridVal = 0;
            searchWidth = 0;
            buttonRight = 0;
        } else {

            // searchButton.classList.remove('open')
            searchContainer.classList.remove('open')

            if(searchInputs) {searchInputs.forEach(elem => {elem.classList.remove('open')})};


            contGridVal = (12*vw)
            contWidth = (20*vw);

            searchWidth = (12*vw);
            buttonRight = -26;
        }

        searchContainer.style.width = `${contWidth}px`
        // searchButton.style.right = `${buttonRight}px`



        // if(searchInputs !== undefined && searchInputs !== null){
        //     // searchInput.style.right = `${buttonRight}px`

        // }


        const setState = (stateObj) => {
            this.setState(stateObj)
        }

        function playAnimationOpen() {







            if (contGridVal < (18*vw)-48) {

                contGridVal = contGridVal +5;
                searchContainer.style.gridTemplateColumns = `${contGridVal}px 48px`

            }

            if(contWidth < (20*vw)) {
                contWidth = contWidth + 5;
                searchContainer.style.width = `${contWidth}px`




                
            } else {
                contAnimDone = true;
                searchContainer.classList.add('open')
                searchContainer.style.gridTemplateColumns = `12vw 48px`

            }

            if(buttonRight > -26) {
                buttonRight = buttonRight - 2;
                // searchButton.style.right = `${buttonRight}px`
            } else {
                buttonAnimDone = true;
                // searchButton.classList.add('open')

            }  



            if(animSearch === true) {
                searchInputs = document.querySelectorAll('.search-input')
                if(searchWidth < ((18*vw)-48)) {
                    searchWidth = searchWidth + 3;
                    searchInputs.forEach(elem => {elem.style.width = `${searchWidth}px`});

                } else {
                    searchInputs.forEach(elem => {elem.classList.add('open')});
                    searchAnimDone = true;
                
                }




            }



            if( contAnimDone === true && buttonAnimDone === true && searchAnimDone === true) { 
                clearInterval(timer)

                const input = document.querySelector('.search-input.input')
                if(input) {
                    input.focus();
                    input.select();
                }

                setState ({
                    animDone: true,
                    canDismountInput: true,
                });

            }
        

        }


        function playAnimationClose() {






            const searchInputs = document.querySelectorAll('.search-input')



            

            if (contGridVal > 0) {
                contGridVal = contGridVal - 5
                searchContainer.style.gridTemplateColumns = `${contGridVal}px 48px`

            }
            if(contWidth > (48)) {
                contWidth = contWidth - 5;
                searchContainer.style.width = `${contWidth}px`
                // searchContainer.style.borderRadius = `${borderRadius}px`
            }  else {
                contAnimDone = true;
                searchContainer.style.width = `48px`
                searchContainer.style.gridTemplateColumns = '0px 48px'
            }

            if(buttonRight < 0) {
                buttonRight = buttonRight + 2;
            } else {
                buttonAnimDone = true;
            }  
            if(searchInputs){
                if(searchWidth > 0) {
                    searchWidth = searchWidth - 4;
                    searchInputs.forEach(elem => elem.style.width = `${searchWidth}px`);
                } else {
                    searchInputs.forEach(elem => elem.style.width = '0px')
                    searchAnimDone = true;
                }
            }

            if( contAnimDone === true && buttonAnimDone === true && searchAnimDone === true) { 
                clearInterval(timer)
                setState ({
                    animDone: true,
                    canDismountInput: true,
                });

            }

        }


        let timer;
        if(animSearch === true) {
            timer = setInterval(playAnimationOpen, 5);
            searchContainer.classList.add('open-search-container')

        } else {
            timer = setInterval(playAnimationClose, 5);
            searchContainer.classList.remove('open-search-container')
        }
    }


    
    componentDidUpdate(prevProps) {
        if(this.props.openSearchBar !== prevProps.openSearchBar) {
            this.setState({
                isAnimOpening: this.props.openSearchBar,
                canDismountInput: (!this.props.openSearchBar && this.state.canDismountInput),
            })
            this.animateSearchBar();
        }
    }

    render() {
        const { clickAction, openSearchBar, updateSearchValue } = this.props
        return( 
            <span className='search-container' title='Search' >
                
                    {(openSearchBar===true ||  this.state.canDismountInput===false)?

                            <form className='search-input' onSubmit={clickAction}>
                                <input className='search-input input' type='text' placeholder='search' onChange={updateSearchValue}></input>
                            </form>
                    :null}
                <a href='#' className='search-icon-button' onClick={ clickAction }>
                    <i className='material-icons nav-icons'>search</i>
                </a>
            </span>
        );
    }


}
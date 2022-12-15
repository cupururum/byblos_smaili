import SandwichIcon from "./svg/sandwich-icon";

function Sandwich(props){
    return(
        <div className="fixed z-20 top-16 right-10 mt-3 lg:right-16 xl:right-24 2xl:right-28 4xl:right-36 "> 
            <button className="focus:outline-none pt-5" onClick={props.onClick}>
                <SandwichIcon/>
            </button>
        </div>
    )
}

export default Sandwich
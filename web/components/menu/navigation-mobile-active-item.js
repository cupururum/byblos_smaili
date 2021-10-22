

function NavavigationMobileActiveItem(props) {

    let activeItem = props.activeSection

    activeItem = activeItem.split('')
    const firstLetterToUpper = activeItem[0].toUpperCase()
    activeItem[0] = firstLetterToUpper
    activeItem = activeItem.join('')

    return (
            <button className="group flex w-full h-16 text-menuGroups text-left bg-romance font-bold text-soft-amber focus:outline-none " onClick={e => props.onClick(e)}>
                <p className="border-b w-full h-16 ml-6 pt-1 border-white-coffee">{activeItem}</p>
                <div className={`mr-8 mt-6 w-3 h-3 border-soft-amber  border-b-2 border-l-2 -rotate-45 group-focus:rotate-135`}></div>
            </button>               
    )
}

export default NavavigationMobileActiveItem

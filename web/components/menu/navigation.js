import NavigationItem from "./navigation-item"

function Navigation(props) {
    console.log(props.activeSection)
    return (
        <div>
            {props.menuSections.map((section) => 
                            <NavigationItem key={section._id}
                                            title={section.title}
                                            slug={section.slug.current}
                                            activeSection={props.activeSection}/>
            )} 
        </div>
    )
}

export default Navigation

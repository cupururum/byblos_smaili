{props.menuSections.map((section) => 
    <NavigationMobileItem key={section._id}
                    title={section.title}
                    slug={section.slug.current}
                    activeSection={props.activeSection}/>
)} 
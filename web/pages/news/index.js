function News(){
    return (
        <div className="pt-32 pb-32 px-32">
            <button className="relative h-9 w-10 group focus:outline-none">
                <div className="h-1 w-5  border-black border-t-2  absolute left-3 top-3 transition duration-500 ease-in-out transform group-focus:-rotate-45 group-focus:scale-x-150 group-focus:translate-y-1"></div>
                <div className="h-1 w-5  border-black border-b-2  absolute left-3 bottom-3 transition duration-500 ease-in-out transform group-focus:rotate-45 group-focus:scale-x-150 group-focus:-translate-y-1"></div>
            </button>
        </div>
    )
}

export default News
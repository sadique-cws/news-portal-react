import Categories from "./Categories";
import Header from "./Header"

const Layout = () => {
    return (
        <>
            <Header/>
            <div className="flex">
                <div className="w-1/5">
                    <Categories/>
                </div>
                
                <div className="w-4/5">
                    {/* for news */}
                </div>
            </div>
        </>

    )
}

export default Layout;
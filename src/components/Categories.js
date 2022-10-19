const Item = ({title}) => {
    return (
        <a className="p-3 bg-slate-500 text-white hover:bg-black" href="">{title}</a>
    )
}

const Categories = () => {
    const newsData = ["crime","education","poltics","Social","bollywood","sports","health","foods","gadgets"]
    return (
        <div className="flex flex-col">
          {
            newsData.map((value,index) => (
                <Item title={value} key={index}/>
            ))
          }
        </div>
    )
}

export default Categories;
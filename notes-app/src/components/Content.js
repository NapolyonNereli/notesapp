import { useSelector } from "react-redux"



function Content() {
    const items = useSelector((state) => state.notes.items);
    console.log(items);
    return (
        <div>
            {items.map((item) => (
               <div style={{backgroundColor: `${item.color}`}}>
                {item.title}
               </div> 
            ))}
        </div>
    )
}

export default Content
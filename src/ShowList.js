import Show from './Show'
function ShowList(props)
{
return (
    <div >
{
    props.shows.map((show)=>(
        <Show show={show} Delete={props.Delete}/>
))
}

    </div>
);
}
export default ShowList 
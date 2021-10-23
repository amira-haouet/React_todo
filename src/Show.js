function Show(props){
    function handleDelete() {
        props.Delete(props.show.id)
    }
return (
<div className='show'>

<div className='title'>{props.show.name}</div>
<button className='Delete' onClick={handleDelete}> Delete</button>
</div>
);
}
export default Show;
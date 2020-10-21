const ImageList = (props) => {
  const {
    list,
    direction
  } = props;

  const renderList = () => list.map((item) => {
    return <img className="image-list" src={item.source} alt={item.name}/>
  })

  return(
    <div className={`mt-8 flex flex-${direction} justify-between`}>
      {renderList()}
    </div>
  )
}

export default ImageList;
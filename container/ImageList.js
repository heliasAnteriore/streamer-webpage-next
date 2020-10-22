const ImageList = (props) => {
  const {
    list,
    direction
  } = props;

  const renderList = () => list.map((item, i) => {
    return <img className="image-list" key={i} src={item.source} alt={item.name}/>
  })

  return(
    <div className="image-list-container">
      {renderList()}
    </div>
  )
}

export default ImageList;
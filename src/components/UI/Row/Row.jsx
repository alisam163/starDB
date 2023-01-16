const Row = ({ left, right }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-6">{left}</div>
        <div className="col-6">{right}</div>
      </div>
      <hr />
    </div>
  )
}

export default Row

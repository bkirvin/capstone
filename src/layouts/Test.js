const Test = () => {
  return (
    <>
      <div className="testgrid">1
        <div className="item">2
          <div className="subitem" style={{gridRow: '1 / 2'}}>3</div>
          <div className="subitem fullsub" style={{gridRow: '2 / 3'}}>4</div>
          <div className="subitem" style={{gridRow: '3 / 4'}}>5</div>
        </div>
      </div>
    </>
  )
}

export default Test

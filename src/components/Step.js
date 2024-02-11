const Step = (props) => {

  const steps = [1, 2, 3]

  return (
    <article>
      <div className="row justify-content-center">
        <div className="col-7">
          <div className="hFrame auto-spread center">
            {steps.map((step, index) => {
              return (
                <>
                  <div className="circle" style={{backgroundColor: (index + 1) <= props.step ? '#F4CE14': '#EDEFEE'}} key={index}>{step}</div>
                  <div className="stepconnector" style={{display: ((index + 1) < steps.length ? 'inline' : 'none')}}></div>
                </>
                )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}

export default Step

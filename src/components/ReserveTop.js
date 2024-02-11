import Step from '../components/Step'

const ReserveTop = (props) => {
  return (
    <section id="reserve-top" className="row justify-content-center">
      <div className="col-8">
        <Step step={props.step}/>
        <div className="prompt">Please provide the following information to reserve your table.</div>
      </div>
    </section>
  )
}

export default ReserveTop

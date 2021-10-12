import './Modal.css'

import Card from '../Card/Card'

const Modal = (props) => {
  return (
    <>
      <div className="ModalBackdrop" onClick={props.close}></div>
      <div className="Modal">
        <Card>
          <div className="ModalTitle">
            <h2>{props.title}</h2>
          </div>
          <div className="Message">
            <p>{props.message}</p>
            <button onClick={props.close}>Okay</button>
          </div>
        </Card>
      </div>
    </>
  )
}

export default Modal
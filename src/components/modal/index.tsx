import './styles.scss';

interface ModalSuccessProps {
  onActiveModal: boolean;
  handleChangeModal: (value: boolean) => void;
}
export function ModalSuccess({
  onActiveModal,
  handleChangeModal
}: ModalSuccessProps) {
  const activeModal = onActiveModal ? 'active' : '';

  return (
    <div className={`modal-success ${activeModal}`}>
      <div className="modal-box">
        <div className="icon-box">
          <img src="/images/check.svg" alt="" />
        </div>
        <h5>Order sent successfully</h5>
        <p>We will contact you via phone or email</p>
        <button onClick={() => handleChangeModal(false)}>Ok!</button>
      </div>
    </div>
  );
}

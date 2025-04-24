import "../styles/PhotoDetailsModal.scss";
import closeSymbol from "../assets/closeSymbol.svg";

const PhotoDetailsModal = ({ toggleModal, photo }) => {
  console.log(photo);
  return (
    <div className="photo-details-modal">
      <button
        onClick={toggleModal}
        className="photo-details-modal__close-button">
        <img src={closeSymbol} alt="close symbol" />
      </button>
    </div>
  );
};

export default PhotoDetailsModal;

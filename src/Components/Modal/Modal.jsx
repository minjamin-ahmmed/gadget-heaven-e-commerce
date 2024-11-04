
const Modal = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null;

    return (
        <div>
             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-lg shadow-lg w-96">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    &#10005;
                </button>
                
                <div>{children}</div>
            </div>
        </div>
        </div>
    );
};

export default Modal;
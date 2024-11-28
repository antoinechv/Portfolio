import { useState } from 'react';
import { motion } from 'framer-motion';

const GalleryItem = ({ galleryPhoto, index }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {

        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const handleOutsideClick = (e) => {
        if (e.target.id === 'modal-overlay') {
            closeModal();
        }
    };

    return (
        <div
            className={`gallery-item ${galleryPhoto.sourceUrl.includes('-vertical') ? 'col-span-1' : 'col-span-2'}`}
        >
            {/* Gallery Image */}
            <div id={index}>
                <img
                    src={galleryPhoto.sourceUrl}
                    alt={galleryPhoto.altText}
                    className="w-full h-auto object-cover rounded-lg shadow-md pointer-events-none lg:pointer-events-auto"
                    onClick={openModal}
                />
            </div>

            {/* Modal */}
            {isModalOpen && (
                <motion.div
                    id="modal-overlay"
                    className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
                    onClick={handleOutsideClick}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <motion.div
                        className="bg-white p-4 rounded-lg relative"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.8 }}
                        transition={{ duration: 0.3 }}
                    >
                        <img
                            src={galleryPhoto.sourceUrl}
                            alt={galleryPhoto.altText}
                            className="max-w-screen-lg max-h-[calc(100vh-150px)] mx-auto object-cover rounded-lg"
                        />
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
};

export default GalleryItem;

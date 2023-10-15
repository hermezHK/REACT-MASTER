import { Dialog } from "@headlessui/react";
import PropTypes from "prop-types";

export default function Modal({ children, open, onClose }) {
    return ( 
        <Dialog open={open} onClose={onClose}>
            <Dialog.Panel>
                {children}
            </Dialog.Panel>
        </Dialog>
    )
}

Modal.propTypes = {
    children: PropTypes.element,
    open: PropTypes.bool,
    onClose: PropTypes.func,
}
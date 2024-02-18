import React, { ReactNode } from 'react';

export type ModalProps = {
  children: ReactNode | undefined,
}

const Modal = ({children}: ModalProps) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 overflow-y-scroll">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="min-h-50 bg-lightblack p-6 rounded-md z-10">
        {children}
      </div>
    </div>
  );
};

export default Modal;
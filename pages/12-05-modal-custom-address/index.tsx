import { useState } from "react";
import { Modal } from "antd";
import DaumPostcodeEmbed, { Address } from "react-daum-postcode";

export default function App() {
    const [isOpen, setIsOpen] = useState(false);

    const onToggleModal = () => {
        setIsOpen((prev) => !prev);
    };

    const handleComplete = (address: Address) => {
        console.log(address);
        onToggleModal();
    };

    return (
        <>
            <button onClick={onToggleModal}>모달창 열기~</button>
            {/* 모달 종료 방식 - 1. 모달 숨기는 방법 */}
            {/* <Modal maskClosable={false} open={isOpen} onOk={handleOk} onCancel={handleCancel}>
                <DaumPostcodeEmbed onComplete={handleComplete} />
            </Modal> */}
            {/* 모달 종료 방식 - 2. 모달 삭제하는 방법 */}
            {isOpen && (
                <Modal maskClosable={false} open={true} onOk={onToggleModal} onCancel={onToggleModal}>
                    <DaumPostcodeEmbed onComplete={handleComplete} />
                </Modal>
            )}
        </>
    );
}

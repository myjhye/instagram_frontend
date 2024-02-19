import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay } from "@chakra-ui/react";
import { useState } from "react";
import { FaPhotoVideo } from 'react-icons/fa';
import { GrEmoji } from "react-icons/gr";
import { GoLocation } from "react-icons/go";
import "./CreatePostModal.css";

export default function CreatePostModal({ onClose, isOpen }) {

    // 파일 드래그 중인지 여부
    const [isDragOver, setIsDragOver] = useState(false);
    // 선택한 파일 저장
    const [file, setFile] = useState();
    // 입력한 설명 저장
    const [caption, setCaption] = useState("");

    // 파일 드래그 앤 드롭
    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile.type.startsWith("image/") || droppedFile.type.startsWith("video/")) {
            setFile(droppedFile)
        }
    };

    // 파일 드래그 시 해당 파일 복사
    const handleDragOver = (e) => {
        e.preventDefault();
        e.dataTransfer.dropEffect = "copy";
        setIsDragOver(true);
    };

    // 파일 드래그 후 해당 영역을 떠났을 때
    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    // 파일 선택
    const handleOnChange = (e) => {
        const file = e.target.files[0];
        if (file && (file.type.startsWith("image/") || file.type.startsWith("video/"))) {
            setFile(file);
        } 
        else {
            setFile(null);
            alert("이미지나 비디오를 선택하세요");
        }
    };

    // 설명 입력에 대한 이벤트 처리
    const handleCaptionChange = (e) => {
        setCaption(e.target.value);
    }

    return (
        <div>
            <Modal
                size={"4xl"} 
                onClose={onClose} 
                isOpen={isOpen} 
                isCentered
            >
                <ModalOverlay>
                    <ModalContent>
                        <div className="flex justify-between py-1 px-10 items-center">
                            <p>새 게시물 생성</p>
                            <Button 
                                variant={"ghost"}
                                size="sm"
                                colorScheme={'blue'}
                            >
                                공유
                            </Button>
                        </div>
                        <hr />
                        <ModalBody>
                            <div className="h-[70vh] justify-between pb-5 flex">
                                <div className="w-[50%]">
                                    {!file && <div
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        onDragLeave={handleDragLeave}
                                        className="drag-drop h-full"
                                    >
                                        <div>
                                            <FaPhotoVideo className="text-3xl" />
                                            <p>사진과 동영상을 여기에 끌어다 놓으세요</p>
                                            <label 
                                            htmlFor="file-upload" 
                                            className="custom-file-upload"
                                        >
                                            컴퓨터에서 선택
                                        </label>
                                        <input
                                            className="fileInput" 
                                            type="file"
                                            id="file-upload"
                                            accept="image/*, video/*"
                                            onChange={handleOnChange} 
                                        />
                                        </div>
                                    </div>}
                                    {/* 선택한 파일이 있을 경우 미리보기 표시 */}
                                    {file && (
                                        <img
                                            className="max-h-full" 
                                            src={URL.createObjectURL(file)} 
                                            alt="" 
                                        />
                                    )}
                                </div>
                                {/* 가운데 구분선 */}
                                <div className="w-[1px] border h-full"></div>
                                <div className="w-[50%]">
                                    <div className="flex items-center px-2">
                                        <img 
                                            className="w-7 h-7 rounded-full" 
                                            src="https://cdn.pixabay.com/photo/2023/11/27/15/41/cat-8415620_1280.jpg" 
                                            alt="" 
                                        />
                                        <p className="font-semibold ml-4">
                                            username
                                        </p>
                                    </div>
                                    <div className="px-2">
                                        {/* 설명 입력란 */}
                                        <textarea
                                            placeholder="문구 입력..." 
                                            className="captionInput" 
                                            name='caption' 
                                            rows="10"
                                            onChange={handleCaptionChange}
                                        />
                                    </div>
                                    <div className="flex justify-between px-2">
                                        <GrEmoji />
                                        <p className="opacity-70">
                                            {caption?.length} / 2,200
                                        </p>
                                    </div>
                                    <hr />
                                    {/* 위치 입력란 */}
                                    <div className="p-2 flex justify-between items-center">
                                        <input
                                            className="locationInput" 
                                            type="text" 
                                            placeholder="location" 
                                            name="location" 
                                        />
                                        <GoLocation />
                                    </div>
                                    <hr />
                                </div>
                            </div>
                        </ModalBody>
                    </ModalContent>
                </ModalOverlay>
            </Modal>
        </div>
    )
}
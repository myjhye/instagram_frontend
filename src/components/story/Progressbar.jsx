import { useEffect, useState } from "react";
import "./Progressbar.css";

export default function Progressbar({ index, activeIndex, duration }) {
    const [progress, setProgress] = useState(0);
    const isActive = index === activeIndex;

    useEffect(() => {
        let interval;
        if (isActive) {
            // 활성화된 경우에만 setInterval 호출
            interval = setInterval(() => {
                setProgress((prev) => {
                    if (prev < 100) {
                        // 이전 상태를 고려하여 100% 미만인 경우에만 증가
                        return prev + 1;
                    } else {
                        clearInterval(interval);
                        return prev;
                    }
                });
            // 숫자가 낮을 수록 진행 속도 느려짐
            }, duration / 70);
        }

        return () => {
            // 컴포넌트가 unmount되거나 isActive가 변경될 때 interval 초기화
            clearInterval(interval);
        };
    }, [duration, isActive]);

    useEffect(() => {
        // isActive가 변경될 때마다 progress를 0으로 초기화
        if (!isActive) {
            setProgress(0);
        }
    }, [isActive]);

    return (
        <div className={`progress-bar-container ${isActive ? "active" : ""}`}>
            <div
                className={`${isActive ? "progress-bar" : ""}`}
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
}

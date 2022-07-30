import { useState, useEffect, useCallback, useRef } from "react";
import gsap from "gsap";

import styled from "styled-components";

const StyledCheckbox = styled.div`
    display: inline-block;
    visibility: ${({isMounted}) => isMounted ? "visible" : "hidden"};

    + .todoitem {
        border-top: 1px solid #000;
    }

    label {
        padding: 10px;
        display: flex;
        align-items: center;
        cursor: pointer;
        input {
            display: none;
            pointer-events: none;
        }
        div {
            display: inline-block;
            width: 14px; height: 14px;
            border: 2px solid #000;
            flex: 0 0 auto;
            color: transparent;
            font-size: 0;
            position: relative;
            overflow: hidden;
            span {
                position: absolute;
                top: 0; left: 0;
                width: 100%; height: 100%;
                display: inline-block;

                > span {
                    box-sizing: border-box;
                    position: absolute;
                    top: -35%; left: -5%;
                    width: 100%; height: 100%;
                    display: inline-block;
                    transform: rotate(-135deg);
                    &::before, &::after {
                        content:'';
                        position: absolute;
                        top: 0; left: 0;
                        display: inline-block;
                        background-color: #fff;
                        // transform: rotate(45deg);
                    }

                    &::before {
                        width:15%; height: 80%;
                    }
                    &::after {
                        width: 60%; height: 15%;
                    }
                }
            }
            + p {
                margin-left: 10px;
            }
        }
        p {
            font-weight: 500;
            display: inline-block;
            width: 100%;
            span {
            }
        }
    }
`;

const Checkbox = (props) => {
    const {
        solved,
        title,
        onChange,
    } = props;

    const [isMounted, setIsMounted] = useState(false);

    const $box = useRef(null);
    const $check = useRef(null);

    const onChangeInput = useCallback((event) => {
        onChange(event.target.checked);
    }, []);

    const ani_box = (solved) => {
        const duration = (d: number):number => isMounted ? d : 0;

        if (solved) {
            gsap.to($check.current, {
                y: 0,
                ease: "power2.out",
                duration: duration(0.45),
            });
            gsap.to($box.current, {
                backgroundColor: "#000",
                duration: duration(0.25),
            });
        } else {
            gsap.to($check.current, {
                y: "100%",
                ease: "power2.out",
                duration: duration(0.45),
            });
            gsap.to($box.current, {
                backgroundColor: "transparent",
                duration: duration(0.25),
            });
        }
    };

    useEffect(() => {
        if (!isMounted) {
            setIsMounted(true);
        }
    }, []);

    useEffect(() => {
        ani_box(solved);
    }, [solved]);

    return (
        <StyledCheckbox className="todoitem" isMounted={isMounted}>
            <label >
                <input type="checkbox" defaultChecked={solved} onChange={onChangeInput} />
                <div ref={$box}>
                    {solved ? "체크됨" : "체크안됨"}
                    <span ref={$check}><span></span></span>
                </div>
                <p>
                    {title}
                </p>
            </label>
        </StyledCheckbox>
    );
};

export default Checkbox;
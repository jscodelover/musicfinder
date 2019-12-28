import styled, { keyframes } from 'styled-components';

const animate = keyframes`
    0% {
       transform: scale(1);
       
    }
    25% {
       transform: scale(1.1);
    }
    50% {
       transform: scale(1.1);
    }
    100% {
       transform: scale(1);
    }
`;

const text = keyframes`
    0% {
        fill: #d62b2b;
    }
    70%{
        fill: #129CAF;
    }
    100% {
        fill: #d62b2b;
    }
`;
const stop1 = keyframes`
    0% {
        stop-color: #e02a2a;
    }
    70%{
        stop-color: #9d8e4f;
    }
    100%{
        stop-color: #e02a2a;
    }
`;
const stop2 = keyframes`
    0% {
        stop-color: #d02f2f;
    }
    70%{
        stop-color: #2fbdd0;
    }
    100%{
        stop-color: #d02f2f;  
    }
`;
const stop3 = keyframes`
    0% {
        stop-color: #605050;
    }
    70%{
        stop-color: #706a52;
    }
    100%{
        stop-color: #605050;  
    }
`;
const stop4 = keyframes`
    0% {
        stop-color: #545454;
    }
    70%{
        stop-color: #545454;
    }
    100%{
        stop-color: #545454;  
    }
`;

const Wrapper = styled.div`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	svg {
		width: ${props => props.width || '400px'};
		animation: ${animate} 2s infinite;
		defs {
			linearGradient {
				stop {
					&:nth-child(1) {
						animation: ${stop1} 3.5s infinite;
					}
					&:nth-child(2) {
						animation: ${stop2} 3.5s infinite;
					}
					&:nth-child(3) {
						animation: ${stop3} 3.5s infinite;
					}
					&:nth-child(4) {
						animation: ${stop4} 3.5s infinite;
					}
				}
			}
		}
		g {
			g {
				text {
					animation: ${text} 3.5s infinite;
				}
			}
		}
	}
`;

export { Wrapper };

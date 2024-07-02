export function Logo({ color }: any) {
    return (
        <svg
            width="200"
            height="200"
            viewBox="0 0 200 200"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M0 0H200V200H0V0ZM50 55H150V70H50V55ZM100 80H50V95H100V80ZM50 105H75V120H50V105ZM125 130H50V145H125V130Z"
                fill={color}
            />
        </svg>
    );
}

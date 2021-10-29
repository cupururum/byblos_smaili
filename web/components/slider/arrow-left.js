function ArrowLeft(props) {
    return (
      <svg
        onClick={props.onClick}
        className="z-20  w-16 h-16 "
        width="34" height="64" viewBox="0 0 34 64" fill="none" xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M32 2L2 32L32 62" stroke="white" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    )
  }

export default ArrowLeft
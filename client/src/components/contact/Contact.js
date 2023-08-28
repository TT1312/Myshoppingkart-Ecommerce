import './Contact.css'

const Contact = () => {
  return (
    <div className='contact'>
      <div className="wrapper">
        <span>Join with us:</span>
        <div className="mail">
          <input type="text" placeholder='Enter your email...' />
          <button>JOIN </button>
        </div>
      </div>

    </div>
  )
}

export default Contact
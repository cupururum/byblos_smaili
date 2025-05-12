function Form() {
  const currentDate = new Date()

  let month = currentDate.getMonth() + 1
  let day = currentDate.getDate()
  let maxDay = day + 14

  if (day < 10) day = `0${day}`
  if (month < 10) month = `0${month}`

  const minDate = `${currentDate.getFullYear()}-${month}-${day}`
  const maxDate = `${currentDate.getFullYear()}-${month}-${maxDay}`

  return (
    <div className="mt-20 md:w-84 md:pr-5 md:mt-6 xl:w-92">
      <h1 className="text-addressTextInContactUsMobile mb-10 lg:mb-0 xl:text-IntroTextDesk 4xl:mb-12">Rezerwacja</h1>

      <form
        name="booking"
        method="POST"
        data-netlify="true"
        netlify-honeypot="bot-field"
        action="/success"
        className="w-full max-w-sm text-formText"
      >
        {/* Netlify spam protection */}
        <input type="hidden" name="form-name" value="booking" />
        <p hidden>
          <label>Don’t fill this out: <input name="bot-field" /></label>
        </p>

        <div className="flex items-center border-b border-black py-2 mb-10 lg:mb-5 xl:mb-10">
          <span className="text-red-500">*</span>
          <input
            className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            name="name"
            aria-label="Full name"
            placeholder="Imię i Nazwisko"
            required
          />
        </div>

        <div className="flex items-center border-b border-black py-2 mb-10 lg:mb-5 xl:mb-10">
          <span className="text-red-500">*</span>
          <input
            className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="date"
            name="date"
            aria-label="date"
            min={minDate}
            max={maxDate}
            placeholder="Dzień i godzina"
            required
          />
        </div>

        <div className="flex items-center border-b border-black py-2 mb-10 lg:mb-5 xl:mb-10">
          <span className="text-red-500">*</span>
          <input
            className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="number"
            name="guests"
            aria-label="number"
            placeholder="Liczba gości min 1 max 8"
            min="1"
            max="8"
            required
          />
        </div>

        <div className="flex items-center border-b border-black py-2 lg:mb-5 xl:mb-10">
          <span className="text-red-500">*</span>
          <input
            className="appearance-none bg-transparent border-none placeholder-black w-full text-black mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="tel"
            name="phone"
            aria-label="phone"
            placeholder="Numer telefonu"
            pattern="^(\+48)?\d{9}$"
            required
          />
        </div>

        <button
          className="w-56 h-16 mt-10 bg-white-coffee text-buttonJumbotron font-bold focus:outline-none lg:hover:bg-btn-color-hover"
          type="submit"
        >
          Rezerwacja
        </button>
      </form>
    </div>
  )
}

export default Form
